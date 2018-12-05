var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");

function checkPhysicalConfigWhileEdit(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        tabWidget = indel.machine_physical_configs.tabWidget,
        checkTabs = 'General Information,Source,Collimator,Machine,TMR,OAR,HU-ED,FrameParameters';
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    if (machineList.wRowCount > 0) {
        //default edit first item
        indel.machine_management.pushButton_2.ClickButton();
        let tabCount = tabWidget.wTabCount;
        let ret = [];
        for (let i = 0; i < tabCount; i++) {
            ret.push(tabWidget.wTabCaption(i));
        }
    
        aqObject.CompareProperty(ret.toString(), cmpEqual, checkTabs, true, 3);
    
        indel.machine_physical_configs.pushButton_2.ClickButton();
    } else {
        Log.Error(`${Project.TestItems.Current.Name} there is no machine to edit`);
    }
    
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
