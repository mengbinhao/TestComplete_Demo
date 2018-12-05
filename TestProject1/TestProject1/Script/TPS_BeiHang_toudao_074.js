var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var physicalparameterutils = require("physicalparameterutils");
var finditeminlist = require("finditeminlist");

function checkGeneralInformationTab(loginUserName, loginPassword, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        tab = indel.machine_physical_configs.tabWidget.qt_tabwidget_stackedwidget.tab,
        tabIndex = 0;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
    
    //add first
    physicalparameterutils.addMachine(indel, newConfigName);
    
    let ret =  finditeminlist.isItemInListReturnIndex(newConfigName, globalconstant.obj.machineConfigNameColumn, machineList);
    
    if (!strictEqual(ret, -1)) {
        machineList.ClickCell(ret, globalconstant.obj.machineConfigNameColumn);
        indel.machine_management.pushButton_2.ClickButton();
        indel.machine_physical_configs.tabWidget.setCurrentIndex(tabIndex);
        
        aqObject.CheckProperty(tab.label, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_2, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_3, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_4, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_5, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_6, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_7, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_15, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_8, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_9, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_10, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_12, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_13, "VisibleOnScreen", cmpEqual, true);
        aqObject.CheckProperty(tab.label_26, "VisibleOnScreen", cmpEqual, true);
        
        indel.machine_physical_configs.pushButton_2.ClickButton();
    } else {
        Log.Error(`${Project.TestItems.Current.Name} error`);
    }
    
    //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}
