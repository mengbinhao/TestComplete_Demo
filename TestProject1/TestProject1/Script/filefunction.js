var globalconstant = require("globalconstant");
//aqFile / aqFileSystem
//check whether the specified drive, folder or file exists.
function isExists(path, fileName) {
    if (!fileName) {
      return aqFileSystem.Exists(path) ? true : false;
    }
    return aqFileSystem.Exists(path + globalconstant.obj.backslash + fileName) ? true : false;
}

//create if not exist
function createFile(path, fileName) {
    if (!isExists(path, fileName)) {
        aqFile.Create(path + fileName);  
    }
}

//delete if exist
function deleteFile(path, fileName) {
    if (isExists(path, fileName)) {
        aqFile.Delete(path + fileName);  
    }
}

function createFolder(path) {
    if (!isExists(path, null)) {
        aqFileSystem.CreateFolder(path);  
    }
}

function deleteFolder(path, removeNonEmpty) {
    if (isExists(path, null)) {
        aqFileSystem.DeleteFolder(path, removeNonEmpty);  
    }
}

function readFile(path, fileName) {
    if (!isExists(path, fileName)) return;
    return aqFile.ReadWholeTextFile(path + fileName, aqFile.ctUTF8);
}

function readFileByLine(path, fileName) {
    let ret = globalconstant.obj.emptyStr;
    if (isExists(path, fileName)) return ret;
    let readFile = aqFile.OpenTextFile(path + fileName, aqFile.faRead, aqFile.ctUTF8);

    while(! readFile.IsEndOfFile()) {
        ret += readFile.ReadLine();
    }
    readFile.Close();
    return ret;
}

function appendTextToFile(path, fileName, text) {
    aqFile.WriteToTextFile(path + fileName, text, aqFile.ctUTF8);
}

module.exports.isExists = isExists;
module.exports.createFile = createFile;
module.exports.deleteFile = deleteFile;
module.exports.createFolder = createFolder;
module.exports.deleteFolder = deleteFolder;
module.exports.readFile = readFile;