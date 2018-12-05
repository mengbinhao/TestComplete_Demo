var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");

function cancelSetting(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        settingBtn = indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting,
        localPathBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox,
        serverPathBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_2,
        databaseBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_3,
        controllerBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_4,
        IGRTBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_5,
        cancelBtn = indel.DlgOptionClass.pushButton_Cancel;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    settingBtn.ClickButton();
    
    let oginalModuleInterfaceFolder = localPathBox.lineEdit_ModuleInterfaceFolder.wText;
    let oginalWorkDirFolder = localPathBox.lineEdit_WorkDirFolder.wText;
    let oginalDCMPath = localPathBox.lineEdit_DCMPath.wText;
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
    
    cancelBtn.ClickButton();
    
    settingBtn.ClickButton();
    
    aqObject.CheckProperty(localPathBox.lineEdit_ModuleInterfaceFolder, "wText", cmpEqual, oginalModuleInterfaceFolder);
    aqObject.CheckProperty(localPathBox.lineEdit_WorkDirFolder, "wText", cmpEqual, oginalWorkDirFolder);
    aqObject.CheckProperty(localPathBox.lineEdit_DCMPath, "wText", cmpEqual, oginalDCMPath);
    aqObject.CheckProperty(serverPathBox.lineEdit_ServerDataPath, "wText", cmpEqual, oginalServerDataPath);
    aqObject.CheckProperty(serverPathBox.lineEdit_ServerPatientPath, "wText", cmpEqual, oginalServerPatientPath);
    aqObject.CheckProperty(serverPathBox.lineEdit_DCMGatePort, "wText", cmpEqual, oginalDCMGatePort);
    aqObject.CheckProperty(databaseBox.lineEdit_SQLServerIP, "wText", cmpEqual, oginalSQLServerIP);
    aqObject.CheckProperty(databaseBox.lineEdit_SQLServerUser, "wText", cmpEqual, oginalSQLServerUser);
    aqObject.CheckProperty(databaseBox.lineEdit_SQLServerKey, "wText", cmpEqual, oginalSQLServerKey);
    aqObject.CheckProperty(controllerBox.lineEdit_UpperIP, "wText", cmpEqual, oginalUpperIP);
    aqObject.CheckProperty(controllerBox.lineEdit_UpperDatabase, "wText", cmpEqual, oginalUpperDatabase);
    aqObject.CheckProperty(controllerBox.lineEdit_UpperUser, "wText", cmpEqual, oginalUpperUser);
    aqObject.CheckProperty(controllerBox.lineEdit_UpperKey, "wText", cmpEqual, oginalUpperKey);
    aqObject.CheckProperty(controllerBox.lineEdit_UpperImagePath, "wText", cmpEqual, oginalUpperImagePath);
    aqObject.CheckProperty(IGRTBox.lineEdit_IGRTIP, "wText", cmpEqual, oginalIGRTIP);
    aqObject.CheckProperty(IGRTBox.lineEdit_IGRTPort, "wText", cmpEqual, oginalIGRTPort);
    
    cancelBtn.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
