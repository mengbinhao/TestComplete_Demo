﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var physicalparameterutils = require("physicalparameterutils");
var utilsfunction = require("utilsfunction");

function addMachineManagementCheck(loginUserName, loginPassword, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();

    indel.machine_management.pushButton.ClickButton();
    indel.InputMachineDialog.LineEdit.SetText(newConfigName);
    indel.InputMachineDialog.DialogButtonBox.buttonOk.ClickButton();
    indel.machine_physical_configs.pushButton.ClickButton();
    aqObject.CheckProperty(indel.machine_TMR_popup, "Exists", cmpEqual, true);
    indel.machine_TMR_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
    aqObject.CheckProperty(indel.machine_OAR_popup, "Exists", cmpEqual, true);
    indel.machine_OAR_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
    aqObject.CheckProperty(indel.machine_confirm_popup, "Exists", cmpEqual, true);
    indel.machine_confirm_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
    //for refresh
    utilsfunction.delay(5000);
    
    //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
     
    logout.logout();
    exitwithlogic.exitWithLogic()
}
