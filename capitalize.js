function capitalize(str){
    let str_array = str.split("");
    const [first, ...rest] = str_array;
    return [first.toUpperCase(), rest.join("")].join("");
}

module.exports = capitalize;