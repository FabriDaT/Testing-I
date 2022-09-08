function suma(a,b){
    if (!Number.isFinite(a) || !Number.isFinite(b)
    ) {
        return 0;
    } else{
        return a+b;
    }
        
}


function resta(a,b){
    return a-b;
}

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

//console.assert(suma(2,2)==4, "Error, el resultado esperado es 4")  //Casos de prueba, puedo tener muchos..
//console.assert(suma(0,0)==0, "Error, el resultado esperado es 0")

module.exports = {suma, resta, multiplicacion, division};