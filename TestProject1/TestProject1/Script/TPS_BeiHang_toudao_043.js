var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var userutils = require("userutils");
var globalconstant = require("globalconstant");

function addNewUser(loginUserName, loginPassword, newUserName, newUserPassword, newUserType) {    
    let indel = Project.Variables.indel,
        userManagemant = indel.user_management,
        userList = userManagemant.userList;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
    
    let count = userList.wRowCount;

    userutils.addUser(indel, newUserName, newUserPassword, null, newUserType);
    
    aqObject.CheckProperty(userList, "wRowCount", cmpEqual, count + 1);

    //clear dirty data
    userutils.deleteUser(indel, newUserName);
    
    userManagemant.pushButton_Exit.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}