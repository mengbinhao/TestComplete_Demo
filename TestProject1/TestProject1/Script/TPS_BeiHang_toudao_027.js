﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var filefunction = require("filefunction");
var globalconstant = require("globalconstant");
var utilsfunction = require("utilsfunction");
var settingutils = require("settingutils");

//check SystemConfig.ini to verify
function changeServerPath(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        serverPathBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_2,
        settingBtn = indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting,
        temp = globalconstant.obj.temp,
        tempPort = '999',
        indelPath = globalconstant.obj.indelPath,
        systemConfigFile = globalconstant.obj.systemConfigFile,
        doubleBackslashes = globalconstant.obj.doubleBackslashes,
        backslash = globalconstant.obj.backslash;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    settingBtn.ClickButton();

    let oginalServerDataPath = serverPathBox.lineEdit_ServerDataPath.wText;
    let oginalServerPatientPath = serverPathBox.lineEdit_ServerPatientPath.wText;
    let oginalDCMGatePort = serverPathBox.lineEdit_DCMGatePort.wText;

    let newServerDataPath = oginalServerDataPath + temp;
    let newServerPatientPath = oginalServerPatientPath + temp;
    
    let content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, false, newServerDataPath, newServerPatientPath, tempPort);
    
    serverPathBox.lineEdit_ServerDataPath.SetText(newServerDataPath);
    serverPathBox.lineEdit_ServerPatientPath.SetText(newServerPatientPath);
    serverPathBox.lineEdit_DCMGatePort.SetText(tempPort);
    
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    aqObject.CheckProperty(indel.settings_update_popup, "Exists", cmpEqual, true);
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    //in case IO too slow
    utilsfunction.delay(1000);
    
    content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, true, newServerDataPath, newServerPatientPath, tempPort);
    
    //clear dirty data
    settingBtn.ClickButton();
    serverPathBox.lineEdit_ServerDataPath.SetText(oginalServerDataPath);
    serverPathBox.lineEdit_ServerPatientPath.SetText(oginalServerPatientPath);
    serverPathBox.lineEdit_DCMGatePort.SetText(oginalDCMGatePort);
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}