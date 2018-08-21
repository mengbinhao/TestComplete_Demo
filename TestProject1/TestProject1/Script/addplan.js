var indelplanUI = require("indelplanUI");

function addplan() {
    let indel = Project.Variables.indel;
      
    aqObject.CheckProperty(indel.patientDataClass.groupBox_5.treeWidget_PlanList.wItems.Item(0).Items, "Count", cmpEqual, 0);
  
    indel.patientDataClass.groupBox_5.pushButton_AddPlan.ClickButton();
    
    indel.main.PlanAddClass.pushButton_Ok.ClickButton();
    
    if (indel.main.addplan_popup.Exists) {
      indel.main.addplan_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
    }
  
    aqObject.CheckProperty(indel.patientDataClass.groupBox_5.treeWidget_PlanList.wItems.Item(0).Items, "Count", cmpEqual, 1);
}