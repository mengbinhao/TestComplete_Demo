function addTargetarea(x1, y1, x2, y2, x3, y3, indel) {
    indel.ContourGUIClass.groupBox_5.pbManualSketch.ClickButton();
    clickPoint(x1, y1, x2, y2, x3, y3);
    indel.ContourGUIClass.canvas.C2DViewer.ClickR();

    LLPlayer.MouseWheel(1200, 1000);
  
    clickPoint(x1, y1, x2, y2, x3, y3);
    
    indel.ContourGUIClass.canvas.C2DViewer.ClickR();
    indel.ContourGUIClass.groupBox_5.Interpolate.ClickButton();

    if (indel.contour_interpolate_error_popup.Exists) {
       indel.contour_interpolate_error_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
       Log.Error(`addTargetarea failure`);
       Runner.Stop(true);
    }
    
    indel.ContourGUIClass.canvas.C2DViewer.ClickR();
    indel.ContourGUIClass.groupBox_5.Interpolate.ClickButton();
    
    if (indel.contour_interpolate_warning_popup.Exists) {
       indel.contour_interpolate_warning_popup.qt_msgbox_buttonbox.buttonOk.ClickButton();
       Log.Error(`addTargetarea failure`);
       Runner.Stop(true);
    }
}

function clickPoint(x1, y1, x2, y2, x3, y3) {
    LLPlayer.MouseDown(MK_LBUTTON, x1, y1, 1000);
    LLPlayer.MouseDown(MK_LBUTTON, x2, y2, 1000);
    LLPlayer.MouseDown(MK_LBUTTON, x3, y3, 1000);
    LLPlayer.MouseDown(MK_LBUTTON, x1, y1, 1000);
}

module.exports.addTargetarea = addTargetarea;