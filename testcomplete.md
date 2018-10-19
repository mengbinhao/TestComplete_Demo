#### 1. TC12

1.  [doc](https://support.smartbear.com/testcomplete/docs/)     [video](https://support.smartbear.com/testcomplete/videos/?showvideo=desktop-tour)    [qt-module](https://support.smartbear.com/downloads/testcomplete/qt-modules/)

2.  record keyword test and script test

3.  copy TC_12_50_4142_Qt_4_8_0_Support for supporting other version of QT, TC12 default only supports QT5.0

4.  Knowledge point

    -   test set/suite  (stop on error、count、timeout、indent level、group)
    -   parameter
    -   script invoke script / keywordtests and  keywordtests invoke   keywordtests / script
    -   store value for use
        -   create variable
        -   operation set variable
        -   add checkpoint
    -   extend find (drag to parent)
    -   edit object properties
        -   nameMapping UI
    -   run in different environment
    -   statement (eg: skip null value)
    -   dynamic property (eg : *)
    -   advance -> events (eg : handle exeption popup)
    -   setText or keys
    -   add new object to current project (tool -> current project  - > object mapping)
    -   make data loop / data-driven loop

5.  configure

    -   diable stop on error    [see doc](https://support.smartbear.com/testcomplete/docs/testing-with/running/control-test-flow/overview.html?q=stop%20on%20error)
    -   diable error dialog
        -   toos -> current project properties -> playback  (minimize testcomplete and others...)
    -   enable / disable debug

6.  write script (some build-in objects)

    ```
    aqConvert
    aqDateTime
    aqString
    aqUtils.delay(seconds)

    Log.Error("Message Text 1", "Extended Message Text 1");
    Log.Warning("Message Text 2", "Extended Message Text 2");
    Log.Message("Message Text 3", "Extended Message Text 3 ");

    //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
    Runner.Stop(true);

    Sys
    Process
    Window
    Desktop
    LLPlayer  control mouse

    aqFileSystem
    aqFolderInfo
    aqEnvironment
    Picture
    RegExpr

    ```

7.  integrated with jenkins

8.  notes

    ```
    //Will continue excute if does not pass
    //so need to handle below code
    aqObject.CompareProperty(ret, cmpNotEqual, -1, true, 3);

    //Runner.Stop(true) do not pass globle param (like indel), after cases all fail
    Runner.Stop(true);
    ```