const reverseString = require("./reverseString");

test("Reverse the order of letters in a string.", ()=>{
    expect(reverseString("Julius")).toBe("suiluJ");
})