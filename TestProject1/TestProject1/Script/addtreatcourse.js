function addtreatcourse() {
    let indel = Project.Variables.indel;
  
    aqObject.CheckProperty(indel.PatientDataClass.groupBox_5.treeWidget_PlanList.wItems, "Count", cmpEqual, 0);
  
    indel.PatientDataClass.groupBox_5.pushButton_AddTreatCourse.ClickButton();
  
    indel.main.TreatcourseAddClass.pushButton_Ok.ClickButton();
  
    aqObject.CheckProperty(indel.PatientDataClass.groupBox_5.treeWidget_PlanList.wItems, "Count", cmpEqual, 1);
}