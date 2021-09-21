const functions = require('../functions.js')

test('strip vowels from string', ()=> {
    expect(functions.vowelStrip('Hello')).toBe('Hll');
});

test('multiply 3 times 4', ()=>{
    expect(functions.multiply(3,4)).toBe(12);
});