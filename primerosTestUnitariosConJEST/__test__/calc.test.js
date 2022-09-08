const calc = require('../calc');

describe('Puebas de sumas', () => {  // con 'describe' podemos agrupar los casos de prueba para tener mejor organizacion

    test('Suma de 2 numeros', () =>{
        expect(calc.suma(2,5)).toBe(7)
    })
    test('Suma de 0', () =>{
        expect(calc.suma(0,0)).toBe(0)
    })
    test('Suma de nulls', () =>{
        expect(calc.suma(null,null)).toBe(0)
    })
    test('Suma de texto/letras', () =>{
        expect(calc.suma('a','b')).toBe(0)
    })


})


test('Resta de 2 numeros', () =>{
    expect(calc.resta(2,2)).toBe(0)
})

test('Multiplicacion de 2 numeros', () =>{
    expect(calc.multiplicacion(2,3)).toBe(6)
})

test('Division de 2 numeros', () =>{
    expect(calc.division(2,2)).toBe(1)
})
