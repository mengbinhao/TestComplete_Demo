﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var physicalparameterutils = require("physicalparameterutils");
var finditeminlist = require("finditeminlist");

function checkFrameParametersTab(loginUserName, loginPassword, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        group = indel.machine_physical_configs.tabWidget.qt_tabwidget_stackedwidget.tab_8.groupBox,
        tabIndex = 7;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    //add first
    physicalparameterutils.addMachine(indel, newConfigName);
    
    let ret =  finditeminlist.isItemInListReturnIndex(newConfigName, globalconstant.obj.machineConfigNameColumn, machineList);
    
    if (!strictEqual(ret, -1)) { 
        machineList.ClickCell(ret, globalconstant.obj.machineConfigNameColumn);
        indel.machine_management.pushButton_2.ClickButton();
        indel.machine_physical_configs.tabWidget.setCurrentIndex(tabIndex);
        aqObject.CheckProperty(group.label_16, "text", cmpEqual, 'N-FrameLength(X)');
        aqObject.CheckProperty(group.label_17, "text", cmpEqual, 'N-FrameWidth(Y)');
        aqObject.CheckProperty(group.label_18, "text", cmpEqual, 'N-FrameHeight(Z)');
        aqObject.CheckProperty(group.label_19, "text", cmpEqual, 'CenterPointX');
        aqObject.CheckProperty(group.label_20, "text", cmpEqual, 'CenterPointY');
        aqObject.CheckProperty(group.label_21, "text", cmpEqual, 'CenterPointZ');

        indel.machine_physical_configs.pushButton_2.ClickButton();
    } else {
        Log.Error(`${Project.TestItems.Current.Name} error`);
    }

    //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
