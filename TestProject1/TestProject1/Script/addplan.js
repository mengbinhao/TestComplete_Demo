﻿function addplan() {
    let indel = Project.Variables.indel;
      
    aqObject.CheckProperty(indel.PatientDataClass.groupBox_5.treeWidget_PlanList.wItems.Item(0).Items, "Count", cmpEqual, 0);
  
    indel.PatientDataClass.groupBox_5.pushButton_AddPlan.ClickButton();
    
    indel.main.PlanAddClass.pushButton_Ok.ClickButton();
    
    if (indel.main.add_plan_popup.Exists) {
      indel.main.add_plan_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
    }
  
    aqObject.CheckProperty(indel.PatientDataClass.groupBox_5.treeWidget_PlanList.wItems.Item(0).Items, "Count", cmpEqual, 1);
}