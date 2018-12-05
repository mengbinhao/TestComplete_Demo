var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var finditeminlist = require("finditeminlist");

function defaultEditFirstMachineManagement(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        machineConfigNameColumn = globalconstant.obj.machineConfigNameColumn;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    if (machineList.wRowCount > 0) {
        let configName = finditeminlist.getFieldValue(0, machineConfigNameColumn, machineList);
        indel.machine_management.pushButton_2.ClickButton();
        aqObject.CheckProperty(indel.machine_physical_configs.lineEdit_ConfigName, "wText", cmpEqual, configName);
        indel.machine_physical_configs.pushButton_2.ClickButton();
    } else {
        Log.Error(`${Project.TestItems.Current.Name} there is no default machine to edit`);
    }
    
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}