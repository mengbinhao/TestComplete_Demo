﻿//TestComplete does not handle unexpected windows if they are implemented as windowless objects.
function GeneralEvents_OnUnexpectedWindow(Sender, Window, LogParams) {
    Log.Warning(`GeneralEvents_OnUnexpectedWindow`);
    let indel = Project.Variables.indel;
    if (Sys.waitProcess(indel.procesName).Exists) {
        Log.Warning(`---------GeneralEvents_OnUnexpectedWindow`);
        //force kill app process
        Sys.Process(indel.procesName).Terminate();
        utilsfunction.delay(60000);
    }
}