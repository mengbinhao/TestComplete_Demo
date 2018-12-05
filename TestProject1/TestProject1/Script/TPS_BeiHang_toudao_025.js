var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var filefunction = require("filefunction");
var globalconstant = require("globalconstant");
var utilsfunction = require("utilsfunction");
var settingutils = require("settingutils");

//check SystemConfig.ini to verify
function changeLocalPath(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        localPathBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox,
        settingBtn = indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting,
        temp = globalconstant.obj.temp,
        indelPath = globalconstant.obj.indelPath,
        systemConfigFile = globalconstant.obj.systemConfigFile,
        doubleBackslashes = globalconstant.obj.doubleBackslashes,
        backslash = globalconstant.obj.backslash;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    settingBtn.ClickButton();

    let oginalModuleInterfaceFolder = localPathBox.lineEdit_ModuleInterfaceFolder.wText;
    let oginalWorkDirFolder = localPathBox.lineEdit_WorkDirFolder.wText;
    let oginalDCMPath = localPathBox.lineEdit_DCMPath.wText;
    let oginalDCMPathFix = aqString.Remove(oginalDCMPath, 0, aqString.FindLast(oginalDCMPath,backslash) + 1);

    let newModuleInterfaceFolder = oginalModuleInterfaceFolder + temp;
    let newWorkDirFolder = oginalWorkDirFolder + temp;
    let newDCMPath = oginalModuleInterfaceFolder + temp + backslash + oginalDCMPathFix + temp;
    
    let content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, false, newModuleInterfaceFolder, newWorkDirFolder, newDCMPath);
    
    localPathBox.lineEdit_ModuleInterfaceFolder.SetText(newModuleInterfaceFolder);
    localPathBox.lineEdit_WorkDirFolder.SetText(newWorkDirFolder);
    localPathBox.lineEdit_DCMPath.SetText(newDCMPath);
    
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    aqObject.CheckProperty(indel.settings_update_popup, "Exists", cmpEqual, true);
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    //in case IO too slow
    utilsfunction.delay(1000);
    
    content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, true, newModuleInterfaceFolder, newWorkDirFolder, newDCMPath);
    
    //clear dirty data
    settingBtn.ClickButton();
    localPathBox.lineEdit_ModuleInterfaceFolder.SetText(oginalModuleInterfaceFolder);
    localPathBox.lineEdit_WorkDirFolder.SetText(oginalWorkDirFolder);
    localPathBox.lineEdit_DCMPath.SetText(oginalDCMPath);
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}