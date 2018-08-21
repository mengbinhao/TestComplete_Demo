﻿var indelplanUI = require("indelplanUI");
var utilsfunction = require("utilsfunction");
var findItemInList = require("findItemInList");

function deleteUser(deleteusername) {
    let field = 'User Name';
    let indel = Project.Variables.indel;
    
    if(!utilsfunction.paramCheck(deleteusername)) {
        Log.Error("Please input valid deleteusername");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
  
    indel.patientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
  
    let userlist = indel.user_management.UserList;
  
    let count = userlist.wRowCount;
    
    let ret =  findItemInList.isItemInListReturnIndex(deleteusername, field, userlist);

    aqObject.CompareProperty(ret, cmpNotEqual, -1, true, 3);
  
    if (!strictEqual(ret, -1)) {
         userlist.ClickCell(ret, field);
  
        indel.user_management.pushButton_DelUser.ClickButton();

        indel.delete_user_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        
        aqObject.CheckProperty(indel.user_management.UserList, "wRowCount", cmpEqual, count - 1);
    }
   
    indel.user_management.pushButton_Exit.ClickButton();
}