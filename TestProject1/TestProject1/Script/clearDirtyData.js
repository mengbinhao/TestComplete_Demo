﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var globalconstant = require("globalconstant");
var userutils = require("userutils");
var physicalparameterutils = require("physicalparameterutils");
var patientutils = require("patientutils");


//for now : no scenario need to add more than one data in same type
function clearDirtyData(indel, loginUserName, loginPassword) {       
    let dirtyData = indel.dirtyData;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    if (dirtyData.has(globalconstant.obj.user)) {
        indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
        userutils.deleteUser(indel, dirtyData.get(globalconstant.obj.user));
        indel.dirtyData.delete(globalconstant.obj.user);
        indel.user_management.pushButton_Exit.ClickButton();
    }
    
    if (dirtyData.has(globalconstant.obj.machine)) {
        indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData.ClickButton();
        physicalparameterutils.deleteMachine(indel, dirtyData.get(globalconstant.obj.machine));
        indel.dirtyData.delete(globalconstant.obj.machine);
        indel.machine_management.Close();
    }
    
    if (dirtyData.has(globalconstant.obj.patient)) {
        patientutils.deletePatient(indel, dirtyData.get(globalconstant.obj.patient));
        indel.dirtyData.delete(globalconstant.obj.patient);
    }
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}

module.exports.clearDirtyData = clearDirtyData;