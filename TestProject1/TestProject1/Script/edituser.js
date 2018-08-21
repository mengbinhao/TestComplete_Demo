var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");
var userfunction = require("userfunction");
var findItemInList = require("findItemInList");

function editUser(editusername,edituserpassword,editusertype)
{
    let field = 'User Name';
    let wantField = 'User Type';
    let indel = Project.Variables.indel;

    if(!utilsfunction.paramCheck(edituserpassword,editusertype)) {
        Log.Error("Please input valid edituserpassword or usertype");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }

    indel.patientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
  
    let userlist = indel.user_management.UserList;
    
    let ret =  findItemInList.isItemInListReturnIndex(editusername, field, userlist);
    
    //Will continue excute if does not pass
    //so need to hanle below code
    aqObject.CompareProperty(ret, cmpNotEqual, -1, true, 3);

    if (!strictEqual(ret, -1)) {
        userlist.ClickCell(ret, field);
    
        let edit_user = indel.new_user;
        indel.user_management.pushButton_EditUser.ClickButton();
        edit_user.lineEdit_Password.Click();
        edit_user.lineEdit_Password.Clear();
        edit_user.lineEdit_Password.Keys(edituserpassword);
        edit_user.lineEdit_PasswordConfirm.Click();
        edit_user.lineEdit_PasswordConfirm.Clear();
        edit_user.lineEdit_PasswordConfirm.Keys(edituserpassword);
    
        if (userfunction.getUserType().includes(editusertype)) {
            edit_user.comboBox_UserType.ClickItem(editusertype);
        }
    
        edit_user.pushButton_OK.ClickButton();
    
        //Research the row index, maybe the sequence changes
        ret =  findItemInList.isItemInListReturnIndex(editusername, field, userlist);
    
        ret =  findItemInList.findFieldValue(ret, wantField, userlist);
    
        aqObject.CompareProperty(ret, cmpEqual, editusertype, true, 3); 
    }
    
    indel.user_management.pushButton_Exit.ClickButton();
}