var utilsfunction = require("utilsfunction");

function addtargetpoint(x, y) {
    LLPlayer.MouseDown(MK_LBUTTON, x, y, 0);
    LLPlayer.MouseDown(MK_LBUTTON, x, y, 0);
    utilsfunction.delay(1000);
    LLPlayer.MouseUp(MK_LBUTTON, x, y, 0);

    //fix when machine is incorrect
    //there is other popup afterward, so fix machine
    //if (indel.plan_irradiatingtime_popup.Exists) {
    //    indel.plan_irradiatingtime_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();   
    //}
    utilsfunction.delay(10000);
}

module.exports.addtargetpoint = addtargetpoint;