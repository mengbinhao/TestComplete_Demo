var utilsfunction = require("utilsfunction");
var finditeminlist = require("finditeminlist");
var globalconstant = require("globalconstant");

function addPatient(indel, patientId, patientName) {
    __addPatientOrCancel(indel, true, patientId, patientName);
}

function addPatientThenCancel(indel, patientName, patientId) {
    __addPatientOrCancel(indel, false, patientId, patientName);
}


function __addPatientOrCancel(indel, isDel, patientId, patientName) {
    //Check params
    if(!utilsfunction.checkParamNull(patientName, patientId)) {
      Log.Error(`Please input valid patientName=${patientName} or patientId=${patientId}`);
      //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
      Runner.Stop(true);
    }

    indel.groupBox.pushButton_NewPatient.ClickButton();
    indel.newpatientClass.lineEdit.Keys(patientName);
    indel.newpatientClass.lineEdit_2.Click();
    indel.newpatientClass.lineEdit_2.Keys(patientId);

    if (isDel) {
        indel.newpatientClass.pushButton_2.ClickButton();
        indel.dirtyData.set(globalconstant.obj.patient, patientName);
        __checkAllRadioBtn(indel);
    } else {
        indel.newpatientClass.pushButton_4.ClickButton();
    }
}

function editPatient(indel, patientId, patientName) {
    if(!utilsfunction.checkParamNull(patientId, patientName)) {
        Log.Error(`Please input valid patientName=${patientId} or patientId=${patientName}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    __checkAllRadioBtn(indel);

    let patientList = indel.groupBox.treeWidget_PatientList;
    
    let ret =  finditeminlist.isItemExistReturnIndex(patientId, globalconstant.obj.patientName, patientList);
    
    if (!strictEqual(ret, -1)) {
        patientList.ClickItem(patientId);
        indel.groupBox.pushButton_EditPatient.ClickButton();
        utilsfunction.delay(10000);
        indel.newpatientClass.lineEdit.Clear();
        indel.newpatientClass.lineEdit.Keys(patientName);
        indel.newpatientClass.pushButton_2.ClickButton();
        return finditeminlist.getFieldValueForList(patientId, globalconstant.obj.patientID, globalconstant.obj.patientName, patientList);
    } else {
        Log.Warning(`can not find patient to edit patientId=${patientId}`);
    }
    return globalconstant.obj.emptyStr;
}

function deletePatient(indel, patientId) {
  __deletePatientOrCancel(indel, true, patientId);
}

function deletePatientThenCancel(indel, patientId) {
  __deletePatientOrCancel(indel, false, patientId);
}

function __deletePatientOrCancel(indel, isDel, patientId) {
    if(!utilsfunction.checkParamNull(patientId)) {
        Log.Error(`Please input valid patientId=${patientId}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    __checkAllRadioBtn(indel);

    let patientList = indel.groupBox.treeWidget_PatientList;
   
    let ret =  finditeminlist.isItemExistReturnIndex(patientId, globalconstant.obj.patientID, patientList);
    if (!strictEqual(ret, -1)) {
        patientList.ClickItem(patientId);
        indel.groupBox.pushButton_DeletePatient.ClickButton();
        aqObject.CheckProperty(indel.patient_delete_popup, "Exists", cmpEqual, true);
        if (isDel) {
            indel.patient_delete_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
            indel.dirtyData.delete(globalconstant.obj.patient, patientId);
        } else {
            indel.patient_delete_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
        }
    } else {
        Log.Warning(`can not find patient to delete patientId=${patientId}`);
    }
}

function loadPatient(indel, patientId) {
    let patientList = indel.groupBox.treeWidget_PatientList;
    
    if(!utilsfunction.checkParamNull(patientId)) {
        Log.Error(`Please input valid patientId=${patientId}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    __checkAllRadioBtn(indel);
    
    let ret =  finditeminlist.isItemExistReturnIndex(patientId, globalconstant.obj.patientID, patientList);
    
    if (!strictEqual(ret, -1)) {  
        patientList.ClickItem(patientId);
        indel.groupBox.pushButton_LoadPatient.ClickButton();
        while (!indel.PatientDataClass.Exists) {
            utilsfunction.delay(5000);
        }
        return indel.PatientDataClass.groupBox_10.label_PhydataName.QtText;
    } else {
        Log.Warning(`can not find patient to load patientId=${patientId}`);
    }
}

function exitPatientToMain(indel) {
    indel.PatientDataClass.groupBox_7.pushButton_Close.ClickButton();
    if (indel.patient_update_popup.Exists) {
        indel.patient_update_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();   
        while (!indel.groupBox.Exists) {
            utilsfunction.delay(2000);
        }
    }
}

//in case can not display
function __checkAllRadioBtn(indel) {
    indel.groupBox.groupBox_2.radioButton_AllDate.ClickButton();
}

module.exports.addPatient = addPatient;
module.exports.addPatientThenCancel = addPatientThenCancel;
module.exports.editPatient = editPatient;
module.exports.deletePatient = deletePatient;
module.exports.deletePatientThenCancel = deletePatientThenCancel;
module.exports.loadPatient = loadPatient;
module.exports.exitPatientToMain = exitPatientToMain;