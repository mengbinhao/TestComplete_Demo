var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var finditeminlist = require("finditeminlist");

function checkNewUserAttribute(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        userManagemant = indel.user_management,
        newUser = indel.new_user;

    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
    
    userManagemant.pushButton_NewUser.ClickButton();
    
    aqObject.CheckProperty(newUser, "VisibleOnScreen", cmpEqual, true);
    
    aqObject.CheckProperty(newUser.label, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(newUser.label_2, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(newUser.label_3, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(newUser.label_4, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(newUser.pushButton_OK, "VisibleOnScreen", cmpEqual, true);
    aqObject.CheckProperty(newUser.pushButton_Cancel, "VisibleOnScreen", cmpEqual, true);
    
    newUser.pushButton_Cancel.ClickButton();
    userManagemant.pushButton_Exit.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}