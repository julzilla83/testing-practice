const capitalize = require("./capitalize");

test('Capitalize first letter of a word', ()=>{
    expect(capitalize("julius")).toBe("Julius");
})