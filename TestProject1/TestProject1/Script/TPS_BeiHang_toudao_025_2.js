﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var filefunction = require("filefunction");
var utilsfunction = require("utilsfunction");
var globalconstant = require("globalconstant");

//create folder re-login to verify 
function changeLocalPath_2(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        localPathBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox,
        settingBtn = indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting,
        temp = globalconstant.obj.temp,
        backslash = globalconstant.obj.backslash;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    settingBtn.ClickButton();
    let oginalModuleInterfaceFolder = localPathBox.lineEdit_ModuleInterfaceFolder.wText;
    let oginalWorkDirFolder = localPathBox.lineEdit_WorkDirFolder.wText;
    let oginalDCMPath = localPathBox.lineEdit_DCMPath.wText;
    let oginalDCMPathFix = aqString.Remove(oginalDCMPath, 0, aqString.FindLast(oginalDCMPath, backslash) + 1);
    
    let newModuleInterfaceFolder = oginalModuleInterfaceFolder + temp;
    let newWorkDirFolder = oginalWorkDirFolder + temp;
    let newDCMPath = oginalModuleInterfaceFolder + temp + backslash + oginalDCMPathFix + temp;
    
    localPathBox.lineEdit_ModuleInterfaceFolder.SetText(newModuleInterfaceFolder);
    localPathBox.lineEdit_WorkDirFolder.SetText(newWorkDirFolder);
    localPathBox.lineEdit_DCMPath.SetText(newDCMPath);

    //create new folder
    createNewLocalFolders(newModuleInterfaceFolder, newWorkDirFolder, oginalDCMPathFix + temp)
    
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    aqObject.CheckProperty(indel.settings_update_popup, "Exists", cmpEqual, true);
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
    
    while (!indel.logonClass.Exists) {
        utilsfunction.delay(5000);
    }
    login.login(loginUserName, loginPassword);
    settingBtn.ClickButton();

    aqObject.CheckProperty(localPathBox.lineEdit_ModuleInterfaceFolder, "wText", cmpEqual, newModuleInterfaceFolder);
    aqObject.CheckProperty(localPathBox.lineEdit_WorkDirFolder, "wText", cmpEqual, newWorkDirFolder);
    aqObject.CheckProperty(localPathBox.lineEdit_DCMPath, "wText", cmpEqual, newDCMPath);
    
    //ckear dirty data
    deleteNewLocalFolders(newModuleInterfaceFolder);
    localPathBox.lineEdit_ModuleInterfaceFolder.SetText(oginalModuleInterfaceFolder);
    localPathBox.lineEdit_WorkDirFolder.SetText(oginalWorkDirFolder);
    localPathBox.lineEdit_DCMPath.SetText(oginalDCMPath);
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    logout.logout();
    exitwithlogic.exitWithLogic()
}

function createNewLocalFolders(newModuleInterfaceFolder, newWorkDirFolder, newDCMPath) {
    filefunction.createFolder(newModuleInterfaceFolder);
    filefunction.createFolder(newModuleInterfaceFolder + globalconstant.obj.backslash + newWorkDirFolder);
    filefunction.createFolder(newModuleInterfaceFolder + globalconstant.obj.backslash +  newDCMPath);
}

function deleteNewLocalFolders(newModuleInterfaceFolder) {
    filefunction.deleteFolder(newModuleInterfaceFolder, true);
}
