﻿var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var userutils = require("userutils");
var finditeminlist = require("finditeminlist");
var globalconstant = require("globalconstant");

function changeUserPasswordFail(loginUserName, loginPassword, newUserName, newUserPassword, editUserPassword) {    
    let indel = Project.Variables.indel,
        userManagemant = indel.user_management,
        userList = userManagemant.userList,
        newUser = indel.new_user,
        passwordInput = newUser.lineEdit_Password,
        confirmPasswordInput = newUser.lineEdit_PasswordConfirm;
    
    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();

    //add new user first
    userutils.addUser(indel, newUserName, newUserPassword, null, null);
    
    let ret =  finditeminlist.isItemInListReturnIndex(newUserName, globalconstant.obj.userNameColumn, userList);
    
    if (!strictEqual(ret, -1)) {
         userList.ClickCell(ret, globalconstant.obj.userNameColumn);
         userManagemant.pushButton_EditUser.ClickButton();
         confirmPasswordInput.clear();
         confirmPasswordInput.Keys(editUserPassword);
         newUser.pushButton_OK.ClickButton();
         aqObject.CheckProperty(indel.user_incorrectconfirmedpassword_popup, "Exists", cmpEqual, true);
         indel.user_incorrectconfirmedpassword_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
         newUser.pushButton_Cancel.ClickButton();
     } else {
         Log.Error(`${Project.TestItems.Current.Name} can not find user to operation`);
     }
 
    //clear dirty data
    userutils.deleteUser(indel, newUserName);
    
    userManagemant.pushButton_Exit.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}