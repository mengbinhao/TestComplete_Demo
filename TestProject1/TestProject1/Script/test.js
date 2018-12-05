var patientutils = require("patientutils");
var physicalparameterutils = require("physicalparameterutils");
var userutils = require("userutils");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var patientdetailtab = require("patientdetailtab");
var gotomainpage = require("gotomainpage");
var cotourlibutils = require("cotourlibutils");


function test() {
    let indel = Project.Variables.indel;
    
    //patientdetailtab.changePatientDetailTab(indel,'PatientManagement');
    
    //gotomainpage.gotoMainPage(true, true, true);
    cotourlibutils.addContourLibThenCancel(indel, 'SKIN', 'aaa');
    cotourlibutils.addContourLib(indel, 'SKIN', 'aaa');
    cotourlibutils.editContourLibThenCancel(indel, 'aaa', 'bbb', 'OAR');
    cotourlibutils.editContourLibThenCancel(indel, 'bbb', 'ccc', 'OAR');
    cotourlibutils.editContourLib(indel, 'aaa', 'bbb', 'OAR');
    cotourlibutils.deleteContourLib(indel, 'aaa');
    cotourlibutils.deleteContourLib(indel, 'bbb');
}