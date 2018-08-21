var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");

function addpatient(name, id) {
    let indel = Project.Variables.indel;
    //Check params
    if(!utilsfunction.paramCheck(name,id)) {
      Log.Error("Please input valid patient_name or patient_id");
      //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
      //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
      Runner.Stop(true);
    }

    //Clicks the 'radioButton_AllDate' button.
    indel.patientManagementWidget.groupBox.groupBox_2.radioButton_AllDate.ClickButton();

    let count = indel.patientManagementWidget.groupBox.treeWidget_PatientList.wItems.Count;
  
    //Clicks the 'pushButton_NewPatient' button.
    indel.patientManagementWidget.groupBox.pushButton_NewPatient.ClickButton();
    indel.newpatient.lineEdit.Keys(name);
    indel.newpatient.lineEdit_2.Click();
    indel.newpatient.lineEdit_2.Keys(id);
  
    //Clicks the 'pushButton_2' button.
    indel.newpatient.pushButton_2.ClickButton();

    aqObject.CheckProperty(indel.patientManagementWidget.groupBox.treeWidget_PatientList.wItems, "Count", cmpEqual, count + 1);
}