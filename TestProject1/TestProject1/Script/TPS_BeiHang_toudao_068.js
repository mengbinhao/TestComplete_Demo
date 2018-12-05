var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var physicalparameterutils = require("physicalparameterutils");

function addMachineManagementThenCancel(loginUserName, loginPassword, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    let count = machineList.wRowCount;

    physicalparameterutils.addMachineThenCancel(indel, newConfigName);
    
    aqObject.CheckProperty(machineList, "wRowCount", cmpEqual, count);
    
    indel.machine_management.Close();
     
    logout.logout();
    exitwithlogic.exitWithLogic()
}
