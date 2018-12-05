function checkNewInput(str, length, inputField, cmp) {
    __newInputOrEditInput(str, length, inputField, cmp, false);
}

function checkEditInput(str, length, inputField, cmp) {
    __newInputOrEditInput(str, length, inputField, cmp, true);
}


function __newInputOrEditInput(str, length, inputField, cmp, isEdit) {
    if (isEdit) {
        inputField.clear();
    }
    let ret = __makeInput(str, length);
    inputField.Keys(ret);
    aqObject.CheckProperty(inputField, "wText", cmp, ret);
    inputField.clear()
}

//len have to less than input length
function __makeInput(input, len) { 
    let res = "",
        inputArr = input.split('');

    if (len > input.length) {
        return res;
    }

    for(let i = 0; i < len ; i ++) {
        let num = Math.floor(Math.random() * (input.length - (i + 1)))
        res += inputArr[num];
        inputArr.splice(num, 1);
    }
    return res;
}

module.exports.checkNewInput = checkNewInput;
module.exports.checkEditInput = checkEditInput;