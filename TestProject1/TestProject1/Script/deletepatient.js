var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");
var findItemInList = require("findItemInList");

function deletepatient(patientId) {
    let field = 'ID';
    let indel = Project.Variables.indel;
    if(!utilsfunction.paramCheck(patientId)) {
        Log.Error("Please input valid paient_id");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }

    let patientList = indel.patientManagementWidget.groupBox.treeWidget_PatientList;
  
    //Clicks the 'radioButton_AllDate' button.
    indel.patientManagementWidget.groupBox.groupBox_2.radioButton_AllDate.ClickButton();
  
    let count = patientList.wItems.Count;
   
    let ret= findItemInList.isItemExist(patientId, field, patientList);
    
    if (!ret){
      Log.Error("Can not find patient with paient_id " + patientId);
      Runner.Stop(true);
    }
  
    patientList.ClickItem(patientId);
    
    indel.patientManagementWidget.groupBox.pushButton_DeletePatient.ClickButton();
  
    indel.delete_patient_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();

    aqObject.CheckProperty(patientList.wItems, "Count", cmpEqual, count - 1);
}