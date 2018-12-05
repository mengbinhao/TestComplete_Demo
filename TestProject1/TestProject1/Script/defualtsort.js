var login = require("login");
var exitwithlogic = require("exitwithlogic");
var logout = require("logout");
var launchwithlogic = require("launchwithlogic");

function defualtsort(username, password) {
    let indel = Project.Variables.indel;
    launchwithlogic.launchWithlogic();
    login.login(username, password);

    aqObject.CheckProperty(indel.PatientManagementWidget.groupBox.groupBox_2.radioButton_AllDate, "checked", cmpEqual, true);
    
    logout.logout();
    exitwithlogic.exitWithLogic()
}


