﻿var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");
var findItemInList = require("findItemInList");

function gotopatientdetail(patientId) {
    let field = 'ID';
    let indel = Project.Variables.indel;
    let patientList = indel.patientManagementWidget.groupBox.treeWidget_PatientList;
    
    if(!utilsfunction.paramCheck(patientId)) {
        Log.Error("Please input valid patient ID");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    let ret= findItemInList.isItemExist(patientId, field, patientList);
    
    if (!ret){
        Log.Error("Can not find patient with this id " + patientId);
        Runner.Stop(true);
    }
  
    //Click for edit
    patientList.ClickItem(patientId);
    indel.patientManagementWidget.groupBox.pushButton_LoadPatient.ClickButton();
    //should have a delay
    utilsfunction.delay(30000);
    
    aqObject.CheckProperty(indel.patientDataClass.groupBox_2.lineEdit_PatientID, "wText", cmpEqual, patientId);
}