const createCalculator = require("./calculator")

const calculator = createCalculator();

test ("Add 2 numbers using calculator object", ()=>{
    expect(calculator.add(12,45)).toBe(57);
})

test ("Subtract 2 numbers using calculator object", ()=>{
    expect(calculator.subtract(98,45)).toBe(53);
})

test ("Multiply 2 numbers using calculator object", ()=>{
    expect(calculator.multiply(98,45)).toBe(4410);
})

test ("Divide 2 numbers using calculator object", ()=>{
    expect(calculator.divide(98,45)).toBeCloseTo(2.17777777777777);
})