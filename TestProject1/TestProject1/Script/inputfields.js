function inputfields(login,username, password) {
  login.lineEdit_Username.Click();
  login.lineEdit_Username.Keys(username);
  login.lineEdit_Password.Click();
  login.lineEdit_Password.Keys(password);
  login.pushButton.ClickButton();
}

module.exports.inputfields = inputfields;