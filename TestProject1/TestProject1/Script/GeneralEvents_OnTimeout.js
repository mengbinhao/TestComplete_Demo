function GeneralEvents_OnTimeout(Sender, Params)
{
    Log.Warning(`GeneralEvents_OnTimeout`);
    let indel = Project.Variables.indel;
    if (Sys.waitProcess(indel.procesName).Exists) {
        Log.Warning(`---------GeneralEvents_OnTimeout`);
        //force kill app process
        Sys.Process(indel.procesName).Terminate();
        utilsfunction.delay(60000);
    }
}