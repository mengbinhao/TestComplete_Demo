var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");

function TPS_BeiHang_toudao_016(loginUserName, loginPassword) {    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    let indel = Project.Variables.indel;
    
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_6.lineEdit_SearchPatient, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.radioButton_AllDate, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.radioButton_Today, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.radioButton_Yesterday, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.radioButton_Month, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.radioButton_Between, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.dateEdit_StartDate, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.dateEdit_EndDate, "Visible", cmpEqual, true);

    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_7.pushButton_Export, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_7.pushButton_Import, "Visible", cmpEqual, true);
    
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_5.radioButton_AllPlan, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_5.radioButton_Unapproved, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_5.radioButton_Approved, "Visible", cmpEqual, true);
    
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_4, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.treeWidget_PatientList, "Visible", cmpEqual, true);
    
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.pushButton_ImportPatient, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.pushButton_ExportPatient, "Visible", cmpEqual, true);
        
    
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.pushButton_LoadPatient, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.pushButton_NewPatient, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.pushButton_EditPatient, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.pushButton_DeletePatient, "Visible", cmpEqual, true);
    
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.frame.pushButton_SystemSetting, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.frame.pushButton_PhyData, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage, "Visible", cmpEqual, true);
    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.frame.pushButton_SystemLog, "Visible", cmpEqual, true);
         
    logout.logout();
    exitwithlogic.exitWithLogic()
}