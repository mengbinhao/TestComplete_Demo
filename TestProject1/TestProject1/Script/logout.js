function logout() {
    let indel = Project.Variables.indel;
    
    if (Sys.Process(indel.procesName).Exists && indel.IntergratedGamaClass.Exists) {
        indel.IntergratedGamaClass.Activate();
        let pushbuttonlogout = indel.PatientManagementWidget.groupBox.frame.pushButton_Logout;
        pushbuttonlogout.ClickButton();
        //aqObject.CheckProperty(pushbuttonlogout, "Visible", cmpEqual, false);
    }
}

module.exports.logout = logout;