const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function ceasarCipher(text, shift){
    let alphaIndex;
    let cipheredText = "";
    const textArray = text.split("");
    for (let i=0; i<textArray.length; i++){
        if (!checkIfSpecialChar(textArray[i])){
                cipheredText = cipheredText + textArray[i];
            }

        for (let j=0; j<alphabet.length; j++){
            if (textArray[i].toLowerCase() === alphabet[j]){
                alphaIndex = j+1;
                if (textArray[i] === textArray[i].toUpperCase()) {
                    cipheredText = cipheredText + returnChipered(alphaIndex, shift).toUpperCase();
                } else {
                    cipheredText = cipheredText + returnChipered(alphaIndex, shift);
                }
            }
        }
    }
    return cipheredText;
}

function returnChipered(index, shift){
    let newIndex = (index + shift) % 26;
    return alphabet[newIndex-1];
}

function checkIfSpecialChar(char){
    return alphabet.indexOf(char.toLowerCase()) > -1;
}

module.exports = ceasarCipher;