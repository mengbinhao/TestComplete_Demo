var utilsfunction = require("utilsfunction");

function addtargetpoint(x, y) {
    LLPlayer.MouseDown(MK_LBUTTON, x, y, 0);
    LLPlayer.MouseDown(MK_LBUTTON, x, y, 0);
    utilsfunction.delay(1000);
    LLPlayer.MouseUp(MK_LBUTTON, x, y, 0);
    utilsfunction.delay(10000);
}

module.exports.addtargetpoint = addtargetpoint;