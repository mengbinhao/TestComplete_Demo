var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");
var userfunction = require("userfunction");

function addUser(newusername,newuserpassword,usertype) {
    let indel = Project.Variables.indel;

    if(!utilsfunction.paramCheck(newusername,newuserpassword)) {
        Log.Error("Please input valid newusername or newuserpassword");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }

    indel.patientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
  
    let count = indel.user_management.UserList.wRowCount;
  
    indel.user_management.pushButton_NewUser.ClickButton();
    //Add user
    indel.new_user.lineEdit_UserName.Keys(newusername);
    indel.new_user.lineEdit_Password.Click();
    indel.new_user.lineEdit_Password.Keys(newuserpassword);
    indel.new_user.lineEdit_PasswordConfirm.Click();
    indel.new_user.lineEdit_PasswordConfirm.Keys(newuserpassword);
    if (userfunction.getUserType().includes(usertype)) {
        indel.new_user.comboBox_UserType.ClickItem(usertype);
    }

    indel.new_user.pushButton_OK.ClickButton();
  
    aqObject.CheckProperty(indel.user_management.UserList, "wRowCount", cmpEqual, count + 1);

    indel.user_management.pushButton_Exit.ClickButton();
}