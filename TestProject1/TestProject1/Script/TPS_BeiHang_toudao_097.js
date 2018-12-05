var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var physicalparameterutils = require("physicalparameterutils");


function deleteCurrentMachineManagementThenCancel(loginUserName, loginPassword, patientId, patientName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    if (machineList.wRowCount > 0) {      
        let currentMachine = physicalparameterutils.getCurrentMachine(indel);
        
        if (!currentMachine) {
            Log.Error(`${Project.TestItems.Current.Name} there is no current machine`);
            Runner.Stop(true);
        }
        
        indel.machine_management.pushButton_3.ClickButton();
        
        aqObject.CheckProperty(indel.machine_delete_default_config_popup, "Exists", cmpEqual, true);
        
        indel.machine_delete_default_config_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
        
        //TODO-create a plan using this machine
    } else {
        Log.Error(`${Project.TestItems.Current.Name} there is no current machine to delete`);
    }
    
    indel.machine_management.Close();
    logout.logout();
    exitwithlogic.exitWithLogic()
}