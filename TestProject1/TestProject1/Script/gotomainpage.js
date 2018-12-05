var utilsfunction = require("utilsfunction");

//from patient detail to main
function gotoMainPage(isSavePatient = false, isFinish = false, isSavePlan = false) {
    let indel = Project.Variables.indel;
    
    indel.IntergratedGamaClass.Close();    
     
    
    if (indel.stackedWidget.PlanGUI.Visible || !indel.groupBox.frame.pushButton_Logout.Visible) {
        handler(indel, isSavePatient, isFinish, isSavePlan);
    }

    //click cancel go to main UI
    indel.quit_popup.qt_msgbox_buttonbox.buttonCancel.ClickButton();
}

function handler(indel, isSavePatient, isFinish, isSavePlan) {
    if (indel.patient_update_popup.Exists) {
        let btnBox = indel.patient_update_popup.qt_msgbox_buttonbox;
        isSavePatient ? btnBox.buttonYes.ClickButton() : btnBox.buttonNo.ClickButton();
        utilsfunction.delay(10000);
    }
    
    while (indel.contour_skin_incomplete_popup.Exists) {
        indel.contour_skin_incomplete_popup.qt_msgbox_buttonbox.buttonYes.ClickButton();
    }
    
    utilsfunction.delay(5000);
    
    if (indel.plan_want_save_popup.Exists) {
        let btnBox = indel.plan_want_save_popup.qt_msgbox_buttonbox;
        isSavePlan ? btnBox.buttonYes.ClickButton() : btnBox.buttonNo.ClickButton();
    }
    
    if (indel.plan_finished_popup.Exists) {
        let btnBox = indel.plan_finished_popup.qt_msgbox_buttonbox;
        isFinish ? btnBox.buttonYes.ClickButton() : btnBox.buttonNo.ClickButton();
    }
    
    if (indel.plan_finished_popup.Exists) {
        let btnBox = indel.plan_finished_popup.qt_msgbox_buttonbox;
        isFinish ? btnBox.buttonYes.ClickButton() : btnBox.buttonNo.ClickButton();
    }
    
    if (isSavePlan) {
        //Here has a bug, use while loop
        //Here has a bug, use while loop
        while (indel.plan_save_popup.Exists) {
            indel.plan_save_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
        }
    }
}

module.exports.gotoMainPage = gotoMainPage;