﻿var utilsfunction = require("utilsfunction");
var cleardirtydata = require("cleardirtydata");

//handle exception script stop
//handle exception script stop
function GeneralEvents_OnStopTest(Sender) {
    let indel = Project.Variables.indel;
        loginUserName = Project.Variables.loginUserName;
        loginPassword = Project.Variables.loginPassword;
    Log.Warning('++++++++++++++++++++++++++GeneralEvents_OnStopTestGeneralEvents_OnStopTest');
    if (Sys.waitProcess(indel.procesName).Exists) {
        Log.Warning('----------------------GeneralEvents_OnStopTestGeneralEvents_OnStopTest');
        //force kill app process
        //Sys.Process(indel.procesName).Terminate();
        //utilsfunction.delay(60000);
        
        //clear dirty data
        //if (indel.dirtyData.size > 0) {
        //    cleardirtydata.clearDirtyData(indel, loginUserName, loginPassword);
        //}
    }
}