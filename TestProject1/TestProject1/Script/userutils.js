var utilsfunction = require("utilsfunction");
var finditeminlist = require("finditeminlist");
var globalconstant = require("globalconstant");

const USER_TYPE = ['Visitor', 'PlanningPhysicist', 'RadiationPhysicist', 'RadiationTherapist', 'ChiefDoctor', 'Technician'];

function __getUserType() {
    return USER_TYPE;
}

//Add user related
function addUser(indel, newUserName, newUserPassword, newUserConfirmPassword, newUserType) {
    __addUserOrCancel(indel, true, newUserName, newUserPassword, newUserConfirmPassword, newUserType);
}

function addUserThenCancel(indel, newUserName, newUserPassword, newUserConfirmPassword, newUserType) {
    __addUserOrCancel(indel, false, newUserName, newUserPassword, newUserConfirmPassword, newUserType);
}

function __addUserOrCancel(indel, isAdd, newUserName, newUserPassword, newUserConfirmPassword, newUserType) {
    if(!utilsfunction.checkParamNull(newUserName,newUserPassword)) {
        Log.Error(`Please input valid newusername=${newUserName} or newuserpassword=${newUserPassword}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    __fillUserInfo(indel, newUserName, newUserPassword, newUserConfirmPassword, newUserType);
    
    if (isAdd) {
        indel.new_user.pushButton_OK.ClickButton();
        indel.dirtyData.set(globalconstant.obj.user, newUserName);
    } else {
        indel.new_user.pushButton_Cancel.ClickButton();
    }
}

function __fillUserInfo(indel, newUserName, newUserPassword, newUserConfirmPassword, newUserType) {
    indel.user_management.pushButton_NewUser.ClickButton();
    //input user info
    indel.new_user.lineEdit_UserName.Keys(newUserName);
    indel.new_user.lineEdit_Password.Click();
    indel.new_user.lineEdit_Password.Keys(newUserPassword);
    indel.new_user.lineEdit_PasswordConfirm.Click();
    indel.new_user.lineEdit_PasswordConfirm.Keys(newUserConfirmPassword ? newUserConfirmPassword : newUserPassword);
    
    __choiceUserType(indel, newUserType);
}

function __choiceUserType(indel, newUserType) {
    if (newUserType && __getUserType().includes(newUserType)) {
        indel.new_user.comboBox_UserType.ClickItem(newUserType);
    }
}

//Edit user
function editUser(indel, editUserName, editUserPassword, editUserType) {
    let userManagement = indel.user_management,
        userList = userManagement.UserList;

    if (!utilsfunction.checkParamNull(editUserPassword, editUserType)) {
        Log.Error(`Please input valid edituserpassword=${editUserPassword} or usertype=${editUserType}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }

    let ret =  finditeminlist.isItemInListReturnIndex(editUserName, globalconstant.obj.userNameColumn, userList);
    
    //Will continue excute if does not pass
    //so need to hanle below code
    if (!strictEqual(ret, -1)) {
        userList.ClickCell(ret, globalconstant.obj.userNameColumn);
        userManagement.pushButton_EditUser.ClickButton();
        //handle popup does not display
        if (!indel.new_user.Exists) {
            return globalconstant.obj.emptyStr;
        }
        indel.new_user.lineEdit_Password.Click();
        indel.new_user.lineEdit_Password.Clear();
        indel.new_user.lineEdit_Password.Keys(editUserPassword);
        indel.new_user.lineEdit_PasswordConfirm.Click();
        indel.new_user.lineEdit_PasswordConfirm.Clear();
        indel.new_user.lineEdit_PasswordConfirm.Keys(editUserPassword);
    
        __choiceUserType(indel, editUserType);
    
        indel.new_user.pushButton_OK.ClickButton();
    
        //re-find the row index, maybe the sequence changes
        ret =  finditeminlist.isItemInListReturnIndex(editUserName, globalconstant.obj.userNameColumn, userList);
    
        return finditeminlist.getFieldValue(ret, globalconstant.obj.userTypeColumn, userList);
    } else {
        Log.Warning(`can not find user to edit editusername=${editUserName}`);
    }
    return globalconstant.obj.emptyStr;
}

//Delete user related
function deleteUser(indel, deleteUserName) {
  __deleteUserOrCancel(indel, true, deleteUserName);
}

function deleteUserThenCancel(indel, deleteUserName) {
  __deleteUserOrCancel(indel, false, deleteUserName);
}

function __deleteUserOrCancel(indel, isDel, deleteUserName) {
    let userManagement = indel.user_management,
        userList = userManagement.UserList;
    
    if(!utilsfunction.checkParamNull(deleteUserName)) {
        Log.Error(`Please input valid deleteusername=${deleteUserName}`);
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }

    let ret =  finditeminlist.isItemInListReturnIndex(deleteUserName, globalconstant.obj.userNameColumn, userList);
  
    if (!strictEqual(ret, -1)) {
        userList.ClickCell(ret, globalconstant.obj.userNameColumn);
        userManagement.pushButton_DelUser.ClickButton();
        if (indel.user_delete_current_pop.Exists) {
            indel.user_delete_current_pop.qt_msgbox_buttonbox.buttonOk.ClickButton();
            Log.Error(`delete current user`);
            Runner.Stop(true);
        }
        aqObject.CheckProperty(indel.user_delete_popup, "Exists", cmpEqual, true);
        if (isDel) {
            indel.user_delete_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
            indel.dirtyData.delete(globalconstant.obj.user, deleteUserName);
        } else {
            indel.user_delete_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
        }
    } else {
        Log.Warning(`can not find user to delete, deleteusername=${deleteUserName}`);
    }
}

module.exports.addUser = addUser;
module.exports.addUserThenCancel = addUserThenCancel;
module.exports.editUser = editUser;
module.exports.deleteUser = deleteUser;
module.exports.deleteUserThenCancel = deleteUserThenCancel;