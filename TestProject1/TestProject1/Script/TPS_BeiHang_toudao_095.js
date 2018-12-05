var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var finditeminlist = require("finditeminlist");
var physicalparameterutils = require("physicalparameterutils");
var patientutils = require("patientutils");
var utilsfunction = require("utilsfunction");
var filefunction = require("filefunction");


function deleteDefaultFirstMachineManagement(loginUserName, loginPassword, patientId, patientName, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        machineConfigNameColumn = globalconstant.obj.machineConfigNameColumn;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    if (machineList.wRowCount > 0) {
      
        let path = physicalparameterutils.getAndCreateExportFolder();
        let exportName = utilsfunction.getTimeAsFloat() + globalconstant.obj.configFileSuffix;
        physicalparameterutils.exportMachine(indel, 0, path, exportName);
    
        let count = machineList.wRowCount;
        //delete first row config name
        indel.machine_management.pushButton_3.ClickButton();
        
        //first row is default current
        if (indel.machine_delete_default_config_popup.Exists) {
            indel.machine_delete_default_config_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
            indel.machine_management.Close();
            
            patientutils.addPatient(indel, patientId, patientName);
            let currentMachineName = physicalparameterutils.getCurrentMachineNameFromPatientDetail(indel, patientId);
            patientutils.exitPatientToMain(indel);
            
            //in case there is no currentMachine
            if (!currentMachineName) {
                Log.Error(`${Project.TestItems.Current.Name} there is no current machine`);
                Runner.Stop(true);
            }
        
            indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
            
            machineList.ClickCell(0, machineConfigNameColumn);
            indel.machine_management.pushButton_2.ClickButton();
            indel.machine_edit_default_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();

            physicalparameterutils.addMachineFromEdit(indel, newConfigName);

            aqObject.CheckProperty(machineList, "wRowCount", cmpEqual, count + 1);

            physicalparameterutils.setCurrentMachine(indel, newConfigName);
            
            //delete first row
            physicalparameterutils.deleteMachine(indel, currentMachineName);
            
            aqObject.CheckProperty(machineList, "wRowCount", cmpEqual, count);
            
            //restore and clear
            physicalparameterutils.importMachine(indel, path, exportName);
            physicalparameterutils.setCurrentMachine(indel, currentMachineName);
            physicalparameterutils.deleteMachine(indel, newConfigName);
            indel.machine_management.Close();
            patientutils.deletePatient(indel, patientId);
        } else {
            indel.machine_delete_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();

            physicalparameterutils.deleteMachine(indel, finditeminlist.getFieldValue(0, machineConfigNameColumn, machineList));
            
            aqObject.CheckProperty(machineList, "wRowCount", cmpEqual, count - 1);
        
            //restore
            physicalparameterutils.importMachine(indel, path, exportName);
            indel.machine_management.Close();
        }
        filefunction.deleteFolder(path, true);
    } else {
        Log.Error(`${Project.TestItems.Current.Name} there is no default machine to edit`);
    }
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}