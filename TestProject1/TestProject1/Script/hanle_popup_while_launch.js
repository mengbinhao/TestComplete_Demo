﻿var variableutils = require("variableutils");
//TestComplete does not handle unexpected windows if they are implemented as windowless objects.

function GeneralEvents_OnUnexpectedWindow(Sender, Window, LogParams) {
    Log.Message('GeneralEvents_OnUnexpectedWindow');
}