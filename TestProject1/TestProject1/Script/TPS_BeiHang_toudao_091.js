var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var physicalparameterutils = require("physicalparameterutils");
var finditeminlist = require("finditeminlist");
var filefunction = require("filefunction");
var utilsfunction = require("utilsfunction");

function exportMachineManagement(loginUserName, loginPassword, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        machineConfigNameColumn = globalconstant.obj.machineConfigNameColumn,
        result = false;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    //add new user first
    physicalparameterutils.addMachine(indel, newConfigName);
    
    let ret =  finditeminlist.isItemInListReturnIndex(newConfigName, machineConfigNameColumn, machineList);
    
    if (!strictEqual(ret, -1)) {
        let path = physicalparameterutils.getAndCreateExportFolder();
        let exportName = utilsfunction.getTimeAsFloat() + globalconstant.obj.configFileSuffix;
        physicalparameterutils.exportMachine(indel, ret, path, exportName);
        result = filefunction.isExists(path, exportName);
        aqObject.CompareProperty(result, cmpEqual, true, true, 3);
        //clear folder
        filefunction.deleteFolder(path, true);
    } else {
        Log.Error(`${Project.TestItems.Current.Name} can not find machine to operation`);
    }
    
     //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
     
    logout.logout();
    exitwithlogic.exitWithLogic()
}
