function seriesPar(){
    var serie="Resultado:";
    var serie;
    var i=2;
    while(i<=100){
        serie+=`${i} `;
        document.getElementById("resultado").innerHTML=serie;
        i=i+2;
    }
}
function hola(){
   // const patron= /hola/;
    const patron= /^[0-9]+$/;
    let dato;
    do {
        dato=prompt('Ingresa el valor: ');
    } while (!patron.test(dato)); 
    alert("Expresión valida");
}
//Creando funciones
function suma(a,b){
    resultado=a+b;
    return resultado;
}
function resta(a,b){
    resultado=a-b;
    return resultado;
}
function multiplicación(a,b){
    resultado=a*b;
    return resultado;
}
function división(a,b){
    resultado=a/b;
    return resultado;
}
function potencia(a,b){
    resultado=a**b;
    return resultado;
}
function residuo(a,b){
    resultado=a%b;
    return resultado;
}
//Llamanda de funciones
potencia(36,2);
document.getElementById("resultado").innerHTML=resultado;
console.log(resultado);
