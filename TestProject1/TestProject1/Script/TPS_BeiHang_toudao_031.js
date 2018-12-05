var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var filefunction = require("filefunction");
var globalconstant = require("globalconstant");
var utilsfunction = require("utilsfunction");
var settingutils = require("settingutils");

//check SystemConfig.ini to verify
function changeController(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        controllerBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_4,
        settingBtn = indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting,
        temp = globalconstant.obj.temp,
        indelPath = globalconstant.obj.indelPath,
        systemConfigFile = globalconstant.obj.systemConfigFile,
        doubleBackslashes = globalconstant.obj.doubleBackslashes,
        backslash = globalconstant.obj.backslash;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    settingBtn.ClickButton();

    let oginalUpperIP = controllerBox.lineEdit_UpperIP.wText;
    let oginalUpperDatabase = controllerBox.lineEdit_UpperDatabase.wText;
    let oginalUpperUser = controllerBox.lineEdit_UpperUser.wText;
    let oginalUpperKey = controllerBox.lineEdit_UpperKey.wText;
    let oginalUpperImagePath = controllerBox.lineEdit_UpperImagePath.wText;
    
    
    let newUpperIP = oginalUpperIP + temp;
    let newUpperDatabase = oginalUpperDatabase + temp;
    let newUpperUser = oginalUpperUser + temp;
    let newUpperKey = oginalUpperKey + temp;
    let newUpperImagePath = oginalUpperImagePath + temp;

    let content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, false, newUpperIP, newUpperDatabase, newUpperUser, newUpperKey, newUpperImagePath);
    
    controllerBox.lineEdit_UpperIP.SetText(newUpperIP);
    controllerBox.lineEdit_UpperDatabase.SetText(newUpperDatabase);
    controllerBox.lineEdit_UpperUser.SetText(newUpperUser);
    controllerBox.lineEdit_UpperKey.SetText(newUpperKey);
    controllerBox.lineEdit_UpperImagePath.SetText(newUpperImagePath);
    
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    aqObject.CheckProperty(indel.settings_update_popup, "Exists", cmpEqual, true);
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    //in case IO too slow
    utilsfunction.delay(1000);
    
    content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, true, newUpperIP, newUpperDatabase, newUpperUser, newUpperKey, newUpperImagePath);
    
    //clear dirty data
    settingBtn.ClickButton();
    controllerBox.lineEdit_UpperIP.SetText(oginalUpperIP);
    controllerBox.lineEdit_UpperDatabase.SetText(oginalUpperDatabase);
    controllerBox.lineEdit_UpperUser.SetText(oginalUpperUser);
    controllerBox.lineEdit_UpperKey.SetText(oginalUpperKey);
    controllerBox.lineEdit_UpperImagePath.SetText(oginalUpperImagePath);
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}