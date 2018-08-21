var indelplanUI = require("indelplanUI");
var inputfields = require("inputfields");
var utilsfunction = require("utilsfunction");

function login(username, password) {
    let indel = Project.Variables.indel;
    
    if(!utilsfunction.paramCheck(username, password)) {
        Log.Error("Please input valid username or password");
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
        Runner.Stop(true);
    }
    
    inputfields.inputfields(indel.login, username, password);
  
    if (indel.user_logged_popup.Exists) {
        indel.user_logged_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
        utilsfunction.delay(60000);
        inputfields.inputfields(indel.login, username, password);
    }
  
    if (indel.user_non_normal_exit_popup.Exists) {
        indel.user_non_normal_exit_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
    }
    
    /*
    if (indel.data_save_pop.Exists) {
        indel.data_save_pop.qt_msgbox_buttonbox.buttonYes.ClickButton();
    }
    
    //Abort
    if (indel.ReloadClass.Exists) {
        indel.ReloadClass.pushButton_3.ClickButton();
    }
    */
    
    aqObject.CheckProperty(indel.patientManagementWidget.groupBox.frame.groupBox_3.label_UserName, "QtText", cmpEqual, "User Name: " + username);
}

module.exports.login = login;