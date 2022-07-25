const ceasarCipher = require("./ceasarCipher");

test ("Encrypt a sentence using ceasarCipher algo", ()=>{
    expect(ceasarCipher("Fire in the hole!&*()", 10)).toBe("Psbo sx dro ryvo!&*()")
})

test ("Encrypt a sentence using ceasarCipher algo", ()=>{
    expect(ceasarCipher("Let me out!", 7)).toBe("Sla tl vba!")
})

test ("Encrypt a sentence using ceasarCipher algo", ()=>{
    expect(ceasarCipher("What is the Caesar cipher? (Definition)", 15)).toBe("Lwpi xh iwt Rpthpg rxewtg? (Stuxcxixdc)")
})