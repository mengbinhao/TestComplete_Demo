//USEUNIT launch
function test() {
  Log.Message("test output")
}

function launch_handle_exception(username, password)
{
  if(Aliases.INDELP_1.logonClass.Exists == false)
  {
    //Runs a script routine.
    startup();
  }
  else
  {
    //Closes the specified Window object.
    Aliases.INDELP_1.logonClass.Close();
    //Runs a script routine.
    startup();
  }
}