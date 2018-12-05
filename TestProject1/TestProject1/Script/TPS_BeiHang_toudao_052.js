var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");
var inputrelated = require("inputrelated");
var globalconstant = require("globalconstant");
var userutils = require("userutils");
var finditeminlist = require("finditeminlist");

function deleteUser(loginUserName, loginPassword, newUserName, newUserPassword, newUserType) {    
    let indel = Project.Variables.indel,
        userManagemant = indel.user_management,
        userList = userManagemant.userList;

    launchwithlogic.launchWithLogic();
    login.login(loginUserName, loginPassword);
    
    indel.PatientManagementWidget.groupBox.frame.pushButton_UserManage.ClickButton();
    
    //add new user first
    userutils.addUser(indel, newUserName, newUserPassword, null, newUserType);

    let ret =  finditeminlist.isItemInListReturnIndex(newUserName, globalconstant.obj.userNameColumn, userList);
    
    if (!strictEqual(ret, -1)) {
        let count = userList.wRowCount;
        userutils.deleteUser(indel, newUserName);
        aqObject.CompareProperty(userList.wRowCount, cmpEqual, count - 1, true, 3);
     } else {
         Log.Error(`${Project.TestItems.Current.Name} can not find user to operation`);
     }

    userManagemant.pushButton_Exit.ClickButton();
    
    logout.logout();
    exitwithlogic.exitWithLogic()

}
