﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var finditeminlist = require("finditeminlist");

function checkSystemChecking(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        tabWidget = indel.DlgOptionClass.tabWidget,
        tab_2 = tabWidget.qt_tabwidget_stackedwidget.tab_2,
        resultList = tab_2.groupBox_6.treeWidget_Result,
        colName = 'Item',
        checkText = ['TPS database connection test', 'DICOM gate database connection test', 'Default physical data existence test', 
        'Machine parameters test', 'Collimator, TMR and OAR test', 'Electron density map test', 'System settings test'];

    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting.ClickButton();
    //setCurrentIndex / setCurrentTab
    tabWidget.qt_tabwidget_tabbar.setCurrentTab(1);

    for (let i = 0; i < resultList.wItems.Count; i++) {
        aqObject.CompareProperty(finditeminlist.getFieldValueForMoreList(i, colName, resultList), cmpEqual, checkText[i], true, 3);
    }
    
    aqObject.CheckProperty(tab_2.pushButton_Check, "VisibleOnScreen", cmpEqual, true);
    
    indel.DlgOptionClass.pushButton_Cancel.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
