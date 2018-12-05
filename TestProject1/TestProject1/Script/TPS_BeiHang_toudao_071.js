var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var physicalparameterutils = require("physicalparameterutils");
var globalconstant = require("globalconstant");
var utilsfunction = require("utilsfunction");
var finditeminlist = require("finditeminlist");

function editMachineManagementAll(loginUserName, loginPassword, newConfigName, editMachineTab, editMachineProperty, editMachinePropertyValue) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        tabWidget = indel.machine_physical_configs.tabWidget,
        objectName = globalconstant.obj.objectName,
        inputPrefix = globalconstant.obj.inputPrefix,
        machineConfigNameColumn = globalconstant.obj.machineConfigNameColumn,
        spaceStr = globalconstant.obj.spaceStr,
        emptyStr = globalconstant.obj.emptyStr,  
        result = emptyStr;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();

    //add first
    physicalparameterutils.addMachine(indel, newConfigName);
    
    editMachineProperty = utilsfunction.strReplace(editMachineProperty, spaceStr, emptyStr);
    physicalparameterutils.editMachine(indel, true, newConfigName, editMachineTab, editMachineProperty, editMachinePropertyValue);
    
    let ret =  finditeminlist.isItemInListReturnIndex(newConfigName, machineConfigNameColumn, machineList);
    if (!strictEqual(ret, -1)) {
        machineList.ClickCell(ret, machineConfigNameColumn);
        indel.machine_management.pushButton_2.ClickButton();
        tabWidget.setCurrentIndex(editMachineTab);
        result = utilsfunction.findChildObjectText(tabWidget.qt_tabwidget_stackedwidget.tab, objectName, inputPrefix + editMachineProperty);
        indel.machine_physical_configs.pushButton_2.ClickButton();
    }
    aqObject.CompareProperty(result, cmpEqual, editMachinePropertyValue, true, 3);
      
    //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
     
    logout.logout();
    exitwithlogic.exitWithLogic()
}
