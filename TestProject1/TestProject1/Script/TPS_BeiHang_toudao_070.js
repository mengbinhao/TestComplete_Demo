var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var finditeminlist = require("finditeminlist");
var globalconstant = require("globalconstant");
var physicalparameterutils = require("physicalparameterutils");

function addExistingMachineManagement(loginUserName, loginPassword, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    //add first
    physicalparameterutils.addMachine(indel, newConfigName);
    
    indel.machine_management.pushButton.ClickButton();
    indel.InputMachineDialog.LineEdit.SetText(newConfigName);
    indel.InputMachineDialog.DialogButtonBox.buttonOk.ClickButton();
    
    aqObject.CheckProperty(indel.machine_add_existing_popup, "Exists", cmpEqual, true);
        
    indel.machine_add_existing_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
    
    //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
