var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var finditeminlist = require("finditeminlist");

function checkMachineManagement(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        checkColumns = 'Config Name,Creator,Create Time,Last Editor,Last Edit Time';
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    aqObject.CheckProperty(indel.machine_management, "VisibleOnScreen", cmpEqual, true);
    
    let ret = finditeminlist.getColumnHearders(machineList).toString();
    aqObject.CompareProperty(ret, cmpEqual, checkColumns, true, 3);
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
