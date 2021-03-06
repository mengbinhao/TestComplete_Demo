﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var finditeminlist = require("finditeminlist");

function checkUserManagementAttribute(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        userManagemant = indel.user_management;
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
    
    aqObject.CheckProperty(userManagemant, "VisibleOnScreen", cmpEqual, true);
    
    aqObject.CheckProperty(userManagemant.pushButton_NewUser, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(userManagemant.pushButton_EditUser, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(userManagemant.pushButton_DelUser, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(userManagemant.pushButton_Exit, "VisibleOnScreen", cmpEqual, true);
    
    let ret = finditeminlist.getColumnHearders(userManagemant.Userlist).toString();
    
    aqObject.CompareProperty(ret, cmpEqual, 'User Name,User Type,Login Information,Login Time', true, 3);

    userManagemant.pushButton_Exit.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}