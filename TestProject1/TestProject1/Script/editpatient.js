var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");
var findItemInList = require("findItemInList");

function editpatient(patientId, editname) {
    let field = 'ID';
    let wantField = 'Name';
    let indel = Project.Variables.indel;
    
    if(!utilsfunction.paramCheck(patientId, editname)) {
        Log.Error("Please input valid paient id or editname");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    indel.patientManagementWidget.groupBox.groupBox_2.radioButton_AllDate.ClickButton();
  
    let patientList = indel.patientManagementWidget.groupBox.treeWidget_PatientList;
    
    let ret= findItemInList.isItemExist(patientId, field, patientList);
    
    if (!ret){
        Log.Error("Can not find patient with paient_id " + patientId);
        Runner.Stop(true);
    }
  
    patientList.ClickItem(patientId);
    //Clicks the 'pushButton_EditPatient' button.
    indel.patientManagementWidget.groupBox.pushButton_EditPatient.ClickButton();
    utilsfunction.delay(10000);
    indel.newpatient.lineEdit.Clear();
    indel.newpatient.lineEdit.Keys(editname);

    indel.newpatient.pushButton_2.ClickButton();

    ret = findItemInList.findFieldValueForList(patientId, field, wantField, patientList);
  
    aqObject.CompareProperty(ret, cmpEqual, editname, true, 3);
}