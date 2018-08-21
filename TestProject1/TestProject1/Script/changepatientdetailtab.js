var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");

function changepatientdetailtab(tabName) {
    let indel = Project.Variables.indel;
  
    if(!utilsfunction.paramCheck(tabName) || !checkTabNameExists(tabName, indel.tabWidget)) {
        Log.Error("Please input valid tabName");
        Runner.Stop(true);
    }
    
    if (canSwitch(tabName, indel.tabWidget.wFocusedTab)) {
        indel.tabWidget.ClickTab(tabName);
        utilsfunction.delay(10000);
    }
    
    if (strictEqual(tabName, 'Contour')) {
        if (indel.contour_to_plan_popup.Exists) {
            indel.contour_to_plan_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        }
        aqObject.CheckProperty(indel.contourGUIClass.groupBox_4.AddToLib, "Visible", cmpEqual, true);
    } else  if (strictEqual(tabName, 'PlanDesign')) {
        if (indel.contour_to_plan_popup.Exists) {
            indel.contour_to_plan_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        }
        aqObject.CheckProperty(indel.planListClass, "Visible", cmpEqual, true);
    } else {
        aqObject.CheckProperty(indel.patientDataClass.groupBox_7.pushButton_GamaReg, "Visible", cmpEqual, true);
    }
}

function checkTabNameExists(tabName, tabWidget) {
    let tabs = [];
    for (let i = 0; i < tabWidget.wTabCount; i++) {
        tabs[i] = tabWidget.wTabCaption(i);
    }
    return tabs.includes(tabName) ? true : false;
}

function canSwitch(tabName, currentIndex) {
    //PlanDesign popup a dialog so can not change tab
    if (strictEqual(currentIndex, 2)) {
        return false;
    }
    return !strictEqual(getTabIndex(tabName), currentIndex) ? true : false;
}

function getTabIndex(tabName) {
    let tabMapping = {
        'PatientManagement' : 0,
        'Contour' : 1,
        'PlanDesign' : 2,
    }
    return tabMapping[tabName];
}