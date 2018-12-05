var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");

function checkIGRT(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        IGRTBox = indel.DlgOptionClass.tabWidget.qt_tabwidget_stackedwidget.tab.groupBox_5;

    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting.ClickButton();

    aqObject.CheckProperty(IGRTBox.label_17, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(IGRTBox.label_18, "VisibleOnScreen", cmpEqual, true);
    
    indel.DlgOptionClass.pushButton_Cancel.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
