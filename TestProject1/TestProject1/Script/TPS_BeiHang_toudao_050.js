var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var userutils = require("userutils");
var globalconstant = require("globalconstant");
var finditeminlist = require("finditeminlist");

function defaultEditFirstUserThenCancel(loginUserName, loginPassword) {    
    let indel = Project.Variables.indel,
        userManagemant = indel.user_management,
        userList = userManagemant.userList;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
    
    //default edit is first user
    if (userList.wRowCount > 0) {
        let userName = finditeminlist.getFieldValue(0, globalconstant.obj.userNameColumn, userList);
        let userType = finditeminlist.getFieldValue(0, globalconstant.obj.userTypeColumn, userList);
        userManagemant.pushButton_EditUser.ClickButton();
        indel.new_user.pushButton_Cancel.ClickButton();
        //get value then compare
        aqObject.CompareProperty(userName, cmpEqual, finditeminlist.getFieldValue(0, globalconstant.obj.userNameColumn, userList), true, 3);
        aqObject.CompareProperty(userType, cmpEqual, finditeminlist.getFieldValue(0, globalconstant.obj.userTypeColumn, userList), true, 3);
    } else {
        Log.Error(`${Project.TestItems.Current.Name} there is no any user to edit, then cancel`);
    }
    userManagemant.pushButton_Exit.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}