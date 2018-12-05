var utilsfunction = require("utilsfunction");
var userfunction = require("userfunction");

function addUser(newUserName, newUserPassword, newUserConfirmPassword, userType, indel) {
    _addUserOrCancel(newUserName, newUserPassword, newUserConfirmPassword, userType, indel, true);
}

function cancelUser(newUserName, newUserPassword, newUserConfirmPassword, userType, indel) {
    _addUserOrCancel(newUserName, newUserPassword, newUserConfirmPassword, userType, indel, false);
}

function _addUserOrCancel(newUserName, newUserPassword, newUserConfirmPassword, userType, indel, isAdd) {
    if(!utilsfunction.paramCheck(newUserName,newUserPassword)) {
        Log.Error("Please input valid newusername or newuserpassword");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    _fillUserInfo(newUserName, newUserPassword, newUserConfirmPassword, userType, indel);
    
    if (isAdd) {
      indel.new_user.pushButton_OK.ClickButton()
    } else {
       indel.new_user.pushButton_Cancel.ClickButton()
    }
}

function _fillUserInfo() {
    indel.user_management.pushButton_NewUser.ClickButton();
    //input user info
    indel.new_user.lineEdit_UserName.Keys(newUserName);
    indel.new_user.lineEdit_Password.Click();
    indel.new_user.lineEdit_Password.Keys(newUserPassword);
    indel.new_user.lineEdit_PasswordConfirm.Click();
    indel.new_user.lineEdit_PasswordConfirm.Keys(newUserConfirmPassword ? newUserConfirmPassword : newUserPassword);
    
    if (userType && userfunction.getUserType().includes(userType)) {
        indel.new_user.comboBox_UserType.ClickItem(userType);
    }
}


module.exports.addUser = addUser;
module.exports.cancelUser = cancelUser;