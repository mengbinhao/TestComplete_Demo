var utilsfunction = require("utilsfunction");

function gotoPlandesign() {
    let indel = Project.Variables.indel;
    indel.PatientDataClass.groupBox_5.treeWidget_PlanList.wItems.Item(0).Items.Item(0).DblClick();
    utilsfunction.delay(60000);
    aqObject.CheckProperty(indel.stackedWidget.PlanGUI.widget.splitter.widget_4.pbSetPD, "Visible", cmpEqual, true);
}