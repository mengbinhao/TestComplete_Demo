﻿var indelplanUI = require("indelplanUI");
var launch = require("launch");
var utilsfunction = require("utilsfunction");

function launchWithLogic() {
    let indel = Project.Variables.indel;
    //Exists: true if the object exist in the system
    //Visible: specifies whether an onscreen object is visible to user
    if(indel.login.Exists == false) {
        launch.launch();
    } else {
        Sys.Process(indel.procesName).Close();
        //handle locate main UI
        if (indel.quit_popup.Exists) {
            indel.quit_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        } else if (indel.update_popup.Exists) {
            indel.update_popup.qt_msgbox_buttonbox.buttonNo.ClickButton();
            utilsfunction.delay(5000);
            indel.quit_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
        }

        utilsfunction.delay(3000);
        launch.launch();
    }
}

module.exports.launchWithLogic = launchWithLogic;