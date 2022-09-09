
const { expect } = require('expect');
const { test } = require('picomatch');
const { describe } = require('yargs');
const { generateText, validateInput, createElement } = require('../util.js');

describe('Pruebas de salida de datos', () => {
    test('Salida con datos', () =>{
        const text = generateText('Daniel',30);
        expect(text).toBe('Daniel (30 years old)');
    });
      
    test('Salida con datos vacios', () =>{
        const text = generateText('',null);
        expect(text).toBe(' (null years old)');    
    });
    
    test('Salida sin datos', () =>{
        const text = generateText();
        expect(text).toBe('undefined (undefined years old)');    
    });
})

describe('Prueba de funcion ValidateInput', () => {
    test('Validate Input function TEXT',()=>{
        const text = validateInput('texto',true,false);
        expect(text).toBeFalsy();
    });
})
