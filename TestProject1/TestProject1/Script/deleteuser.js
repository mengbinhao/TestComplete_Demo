var utilsfunction = require("utilsfunction");
var findItemInList = require("findItemInList");

function deleteUser(deleteusername, indel) {
    let field = 'User Name',
        usernamage = indel.user_management,
        userlist = usernamage.UserList;
    
    if(!utilsfunction.paramCheck(deleteusername)) {
        Log.Error("Please input valid deleteusername");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }

    let ret =  findItemInList.isItemInListReturnIndex(deleteusername, field, userlist);
  
    if (!strictEqual(ret, -1)) {
        userlist.ClickCell(ret, field);
        usernamage.pushButton_DelUser.ClickButton();
        indel.delete_user_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
    }
}

module.exports.deleteUser = deleteUser;