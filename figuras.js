//CUADRADO

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado* lado;
}

//TRIANGULO 
function perimetroTriangulo(lado1,lado2,lado3){
    const perimetro=lado1+lado2+lado3;
    return perimetro;
}
function areaTriangulo(lado1,lado2,lado3){
    const perimetro = perimetroTriangulo(lado1,lado2,lado3);
    const s = perimetro/2;
    const area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3));
    return area;
}

//FUNCIONES PARA BOTONES

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value=input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = +document.getElementById("Inputlado1").value;
    const lado2 = +document.getElementById("Inputlado2").value;
    const lado3 = +document.getElementById("Inputlado3").value;
    const perimetro = perimetroTriangulo(lado1,lado2,lado3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const lado1 = +document.getElementById("Inputlado1").value;
    const lado2 = +document.getElementById("Inputlado2").value;
    const lado3 = +document.getElementById("Inputlado3").value;
    const area = areaTriangulo(lado1,lado2,lado3);
    alert(area);
}

function PrecioDesc(precio,descuento){
    const PrecDesc= (precio*(100-descuento))/100;
    return PrecDesc;   

}

function calcularPrecioDesc(){
    const precio = +document.getElementById("InputPrecio").value;
    const descuento= +document.getElementById("InputDescuento").value;
    
    const P = PrecioDesc(precio,descuento);

    alert(P);
}