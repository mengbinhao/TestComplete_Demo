var indelplanUI = require("indelplanUI");

function logout() {
    let indel = Project.Variables.indel;
    
    if (Sys.Process(indel.procesName).Exists && indel.intergratedGamaClass.Exists) {
        indel.intergratedGamaClass.Activate();
        let pushbuttonlogout = indel.patientManagementWidget.groupBox.frame.pushButton_Logout;
        pushbuttonlogout.ClickButton();
        aqObject.CheckProperty(pushbuttonlogout, "Visible", cmpEqual, false);
    }
}

module.exports.logout = logout;