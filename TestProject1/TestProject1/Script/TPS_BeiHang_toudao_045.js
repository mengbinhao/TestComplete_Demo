var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var userutils = require("userutils");

function addNewUserWithTypoPassword(loginUserName, loginPassword, newUserName, newUserPassword, newUserConfirmPassword) {    
    let indel = Project.Variables.indel;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();

    userutils.addUser(indel, newUserName, newUserPassword, newUserConfirmPassword, null);
    
    aqObject.CheckProperty(indel.user_incorrectconfirmedpassword_popup, "Exists", cmpEqual, true);
    
    indel.user_incorrectconfirmedpassword_popup.Close();
    
    indel.new_user.pushButton_Cancel.ClickButton();
    
    indel.user_management.pushButton_Exit.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}