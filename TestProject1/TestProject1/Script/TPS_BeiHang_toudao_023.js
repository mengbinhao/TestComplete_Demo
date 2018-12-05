var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var utilsfunction = require("utilsfunction");
var filefunction = require("filefunction");
var globalconstant = require("globalconstant");
var settingutils = require("settingutils");

function changeSettingAll(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        settingBtn = indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting,
        indelPath = globalconstant.obj.indelPath,
        systemConfigFile = globalconstant.obj.systemConfigFile,
        doubleBackslashes = globalconstant.obj.doubleBackslashes,
        backslash = globalconstant.obj.backslash,
        localPathBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox,
        serverPathBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_2,
        databaseBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_3,
        controllerBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_4,
        IGRTBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_5,
        temp = globalconstant.obj.temp,
        tempPort = '999',
        databaseIP = '192.168.1.1',
        databaseUserName = 'test',
        databasePassword = 'test123',
        tempIGRTIP = '255.255.255.255',
        tempIGRTPort = '9999';
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    settingBtn.ClickButton();
    
    let oginalModuleInterfaceFolder = localPathBox.lineEdit_ModuleInterfaceFolder.wText;
    let oginalWorkDirFolder = localPathBox.lineEdit_WorkDirFolder.wText;
    let oginalDCMPath = localPathBox.lineEdit_DCMPath.wText;
    let oginalDCMPathFix = aqString.Remove(oginalDCMPath, 0, aqString.FindLast(oginalDCMPath,backslash) + 1);
    let oginalServerDataPath = serverPathBox.lineEdit_ServerDataPath.wText;
    let oginalServerPatientPath = serverPathBox.lineEdit_ServerPatientPath.wText;
    let oginalDCMGatePort = serverPathBox.lineEdit_DCMGatePort.wText;
    let oginalSQLServerIP = databaseBox.lineEdit_SQLServerIP.wText;
    let oginalSQLServerUser = databaseBox.lineEdit_SQLServerUser.wText;
    let oginalSQLServerKey = databaseBox.lineEdit_SQLServerKey.wText;
    let oginalUpperIP = controllerBox.lineEdit_UpperIP.wText;
    let oginalUpperDatabase = controllerBox.lineEdit_UpperDatabase.wText;
    let oginalUpperUser = controllerBox.lineEdit_UpperUser.wText;
    let oginalUpperKey = controllerBox.lineEdit_UpperKey.wText;
    let oginalUpperImagePath = controllerBox.lineEdit_UpperImagePath.wText;
    let oginalIGRTIP = IGRTBox.lineEdit_IGRTIP.wText;
    let oginalIGRTPort = IGRTBox.lineEdit_IGRTPort.wText;
    
    let newModuleInterfaceFolder = oginalModuleInterfaceFolder + temp;
    let newWorkDirFolder = oginalWorkDirFolder + temp;
    let newDCMPath = oginalModuleInterfaceFolder + temp + backslash + oginalDCMPathFix + temp;
    let newServerDataPath = oginalServerDataPath + temp;
    let newServerPatientPath = oginalServerPatientPath + temp;
    let newUpperIP = oginalUpperIP + temp;
    let newUpperDatabase = oginalUpperDatabase + temp;
    let newUpperUser = oginalUpperUser + temp;
    let newUpperKey = oginalUpperKey + temp;
    let newUpperImagePath = oginalUpperImagePath + temp;
    
    let content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, false, newModuleInterfaceFolder, newWorkDirFolder, newDCMPath, newServerDataPath, newServerPatientPath,
                                          tempPort,databaseIP, databaseUserName, databasePassword, newUpperIP, newUpperDatabase, newUpperUser,
                                          newUpperKey, newUpperImagePath, tempIGRTIP, tempIGRTPort);
    
    localPathBox.lineEdit_ModuleInterfaceFolder.SetText(newModuleInterfaceFolder);
    localPathBox.lineEdit_WorkDirFolder.SetText(newWorkDirFolder);
    localPathBox.lineEdit_DCMPath.SetText(newDCMPath);
    serverPathBox.lineEdit_ServerDataPath.SetText(newServerDataPath);
    serverPathBox.lineEdit_ServerPatientPath.SetText(newServerPatientPath);
    serverPathBox.lineEdit_DCMGatePort.SetText(tempPort);
    databaseBox.lineEdit_SQLServerIP.SetText(databaseIP);
    databaseBox.lineEdit_SQLServerUser.SetText(databaseUserName);
    databaseBox.lineEdit_SQLServerKey.SetText(databasePassword);
    controllerBox.lineEdit_UpperIP.SetText(newUpperIP);
    controllerBox.lineEdit_UpperDatabase.SetText(newUpperDatabase);
    controllerBox.lineEdit_UpperUser.SetText(newUpperUser);
    controllerBox.lineEdit_UpperKey.SetText(newUpperKey);
    controllerBox.lineEdit_UpperImagePath.SetText(newUpperImagePath);
    IGRTBox.lineEdit_IGRTIP.SetText(tempIGRTIP);
    IGRTBox.lineEdit_IGRTPort.SetText(tempIGRTPort);   
    
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    aqObject.CheckProperty(indel.settings_update_popup, "Exists", cmpEqual, true);
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    //in case IO too slow
    utilsfunction.delay(1000);
    
    content = utilsfunction.strReplace(filefunction.readFile(indelPath, systemConfigFile), doubleBackslashes, backslash);
    settingutils.checkSystemConfigFile(content, true, newModuleInterfaceFolder, newWorkDirFolder, newDCMPath, newServerDataPath, newServerPatientPath,
                                          tempPort,databaseIP, databaseUserName, databasePassword, newUpperIP, newUpperDatabase, newUpperUser,
                                          newUpperKey, newUpperImagePath, tempIGRTIP, tempIGRTPort);
    
    //clear dirty data
    settingBtn.ClickButton();
    
    localPathBox.lineEdit_ModuleInterfaceFolder.SetText(oginalModuleInterfaceFolder);
    localPathBox.lineEdit_WorkDirFolder.SetText(oginalWorkDirFolder);
    localPathBox.lineEdit_DCMPath.SetText(oginalDCMPath);
    serverPathBox.lineEdit_ServerDataPath.SetText(oginalServerDataPath);
    serverPathBox.lineEdit_ServerPatientPath.SetText(oginalServerPatientPath);
    serverPathBox.lineEdit_DCMGatePort.SetText(oginalDCMGatePort);
    databaseBox.lineEdit_SQLServerIP.SetText(oginalSQLServerIP);
    databaseBox.lineEdit_SQLServerUser.SetText(oginalSQLServerUser);
    databaseBox.lineEdit_SQLServerKey.SetText(oginalSQLServerKey);
    controllerBox.lineEdit_UpperIP.SetText(oginalUpperIP);
    controllerBox.lineEdit_UpperDatabase.SetText(oginalUpperDatabase);
    controllerBox.lineEdit_UpperUser.SetText(oginalUpperUser);
    controllerBox.lineEdit_UpperKey.SetText(oginalUpperKey);
    controllerBox.lineEdit_UpperImagePath.SetText(oginalUpperImagePath); 
    IGRTBox.lineEdit_IGRTIP.SetText(oginalIGRTIP);
    IGRTBox.lineEdit_IGRTPort.SetText(oginalIGRTPort); 
    
    indel.DlgOptionClass.pushButton_Ok.ClickButton();
    indel.settings_update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}