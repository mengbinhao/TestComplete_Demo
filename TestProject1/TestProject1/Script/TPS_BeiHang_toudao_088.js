var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var finditeminlist = require("finditeminlist");
var physicalparameterutils = require("physicalparameterutils");
var utilsfunction = require("utilsfunction");

function editFrameParametersTab(loginUserName, loginPassword, newConfigName) {    
    let indel = Project.Variables.indel,
        machineList = indel.machine_management.ConfigList,
        tabWidget = indel.machine_physical_configs.tabWidget,
        groupBox = tabWidget.qt_tabwidget_stackedwidget.tab_8.groupBox,
        machineConfigNameColumn = globalconstant.obj.machineConfigNameColumn,
        objectName = globalconstant.obj.objectName,
        tabIndex = 7,
        editMachineTabProperty = 'doubleSpinBox', 
        count = 10,
        result = globalconstant.obj.emptyStr,
        originalValue = null;
        
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);

    indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();

    //add first
    physicalparameterutils.addMachine(indel, newConfigName);

    let ret =  finditeminlist.isItemInListReturnIndex(newConfigName, machineConfigNameColumn, machineList);
    if (!strictEqual(ret, -1)) {
        __gotoTargetTab(indel, ret, machineConfigNameColumn, tabIndex);
        let child = utilsfunction.findChildObject(groupBox, objectName, editMachineTabProperty);
        originalValue = (child != null) ? child.wValue : null;

        //Change value
        child.up(count);

        indel.machine_physical_configs.pushButton.ClickButton();
        indel.machine_TMR_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        indel.machine_OAR_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        indel.machine_confirm_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
        indel.PhyDataChangeViewerClass.pushButton_Ok.ClickButton();
        
        __gotoTargetTab(indel, ret, machineConfigNameColumn, tabIndex);
        result = (child != null) ? child.wValue : null;
        indel.machine_physical_configs.pushButton_2.ClickButton();
    }
    //proprty shoubld be same even it is changed, this is by requirement
    aqObject.CompareProperty(result, cmpEqual, originalValue, true, 3);
      
    //clear dirty data
    physicalparameterutils.deleteMachine(indel, newConfigName);
    
    indel.machine_management.Close();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}

function __gotoTargetTab(indel, ret, machineConfigNameColumn, tabIndex) {
    indel.machine_management.ConfigList.ClickCell(ret, globalconstant.obj.machineConfigNameColumn);
    indel.machine_management.pushButton_2.ClickButton();
    indel.machine_physical_configs.tabWidget.setCurrentIndex(tabIndex);
}