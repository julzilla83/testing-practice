function reverseString(str){
    let str_array = str.split("");
    let newStr = "";
    for(let i=str_array.length-1; i>=0; i--){
        newStr = newStr + str_array[i];
    }
    return newStr;
}

module.exports = reverseString;