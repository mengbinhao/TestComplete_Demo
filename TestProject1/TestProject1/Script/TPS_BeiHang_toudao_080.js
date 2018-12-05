var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var finditeminlist = require("finditeminlist");
var physicalparameterutils = require("physicalparameterutils");
var utilsfunction = require("utilsfunction");

function editMachineTab(loginUserName, loginPassword, newConfigName, editMachineTabProperty, editMachineTabPropertyValue) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        tabIndex = 3,
        result = globalconstant.obj.emptyStr;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();

    //add first
    physicalparameterutils.addMachine(indel, newConfigName);
    
    editMachineTabProperty = utilsfunction.strReplace(editMachineTabProperty, globalconstant.obj.spaceStr, globalconstant.obj.emptyStr);
    physicalparameterutils.editMachine(indel, true, newConfigName, tabIndex, editMachineTabProperty, editMachineTabPropertyValue);
    
    let ret =  finditeminlist.isItemInListReturnIndex(newConfigName, globalconstant.obj.machineConfigNameColumn, machineList);
    if (!strictEqual(ret, -1)) {
        machineList.ClickCell(ret, globalconstant.obj.machineConfigNameColumn);
        indel.machine_management.pushButton_2.ClickButton();
        indel.machine_physical_configs.tabWidget.setCurrentIndex(tabIndex);
        result = utilsfunction.findChildObjectText(indel.machine_physical_configs.tabWidget.qt_tabwidget_stackedwidget.tab_4, 
                                       globalconstant.obj.objectName, globalconstant.obj.inputPrefix + editMachineTabProperty);
        indel.machine_physical_configs.pushButton_2.ClickButton();
    }
    aqObject.CompareProperty(result, cmpEqual, editMachineTabPropertyValue, true, 3);
      
    //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
