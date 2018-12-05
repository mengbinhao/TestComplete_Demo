var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var filefunction = require("filefunction");
var globalconstant = require("globalconstant");
var utilsfunction = require("utilsfunction");
var settingutils = require("settingutils");

//check SystemConfig.ini to verify
function changeIGRT(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        IGRTBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_5,
        settingBtn = indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting,
        indelPath = globalconstant.obj.indelPath,
        systemConfigFile = globalconstant.obj.systemConfigFile,
        doubleBackslashes = globalconstant.obj.doubleBackslashes,
        backslash = globalconstant.obj.backslash,
        tempIGRTIP = '255.255.255.255',
        tempIGRTPort = '9999';
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    settingBtn.ClickButton();

    let oginalIGRTIP = IGRTBox.lineEdit_IGRTIP.wText;
    let oginalIGRTPort = IGRTBox.lineEdit_IGRTPort.wText;

    let content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, false, tempIGRTIP, tempIGRTPort);
    
    IGRTBox.lineEdit_IGRTIP.SetText(tempIGRTIP);
    IGRTBox.lineEdit_IGRTPort.SetText(tempIGRTPort);
    
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    aqObject.CheckProperty(indel.settings_update_popup, "Exists", cmpEqual, true);
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    //in case IO too slow
    utilsfunction.delay(1000);
    
    content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, true, tempIGRTIP, tempIGRTPort);
    
    //clear dirty data
    settingBtn.ClickButton();
    IGRTBox.lineEdit_IGRTIP.SetText(oginalIGRTIP);
    IGRTBox.lineEdit_IGRTPort.SetText(oginalIGRTPort);
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}