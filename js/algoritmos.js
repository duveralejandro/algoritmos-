function suma() {
    let a = 0;
    let b = 0;
    let suma = 0;

    a = parseInt(prompt('Ingrese el Primer valor'));
    b = parseInt(prompt('Ingrese el segundo valor'));

    suma = a + b;

    alert('El resultado de la suma es: ' + suma);
}

function operacionesBasicas() {
    let a = 0;
    let b = 0;
    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;

    a = parseInt(prompt('Ingrese el primer valor'));
    b = parseInt(prompt('Ingrese el segundo valor'));

    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    alert('El resultado de la suma es: ' + suma);
    alert('El resultado de la resta es: ' + resta);
    alert('El resultado de la multiplicacion es: ' + multiplicacion);
    alert('El resultado de la division es: ' + division);
}

function mayorDeDosNumeros() {
    let a = 0;
    let b = 0;

    a = parseInt(prompt('Ingrese el primer valor'));
    b = parseInt(prompt('Ingrese el segundo valor'));

    if(a === b){
        alert('Ambos valores son iguales');
    }
    if(a > b){
        alert('El numero mayor es: ' + a);
    }
    else{
        alert('El numero mayor es: ' + b);
    }
}

function menorDeTresNumeros() {
    let a = 0;
    let b = 0;
    let c = 0;

    a = parseInt(prompt('Ingrese el primer valor'));
    b = parseInt(prompt('Ingrese el segundo valor'));
    c = parseInt(prompt('Ingrese el tercer valor'));

    if(a === b || a === c || b === c){
        alert('Los tres valores son iguales');
    }
    else if(a < b && a < c){
        alert('El numero menor es: ' + a);
    }
    else if(b < a && b < c){
        alert('El numero menor es: ' + b);
    }
    else if(c < a && c < b){
        alert('El numero menor es: ' + c);
    }
}

function numeroParImpar() {
    let numero = 0;
    numero = prompt('Ingrese el Numero');
    if(numero % 2 === 0){
        alert('El numero ' + numero + ' Es par');
    }
    else{
        alert('El numero ' + numero + ' Es impar');
    }
}

function numeroCuadrado() {
    let a = 0;
    let numeroCuadrado = 0;
    
    a = parseInt(prompt('Ingrese el numero'));

    numeroCuadrado = a * a;

    alert('El cuadrado de ' + a + ' Es: ' + numeroCuadrado);
}

function areaTriangulo() {
    let base = 0;
    let altura = 0;
    let area = 0;

    base = parseInt(prompt('Ingrese la base del triangulo'));
    altura = parseInt(prompt('Ingrese la altura del triangulo'));
    
    area = (base * altura) / 2;

    alert('El area del triangulo es: ' + area);
}

function metrosCentimetros() {
    let metros = 0;
    let centimetros = 0;
    
    metros = parseInt(prompt('Ingrese el valor en metros'));

    centimetros = metros * 100;

    alert('El valor en centimetros es: ' + centimetros);

}

function añoNacimiento() {
    let añoActual = 0;
    let edad = 0;
    let añoNacimiento = 0;
    
    añoActual = parseInt(prompt('Ingrese el año actual'));
    edad = parseInt(prompt('Ingrese la edad'));

    añoNacimiento = añoActual - edad;

    alert('El año de nacimiento del usuario es: ' + añoNacimiento);
}

function inversionCapital() {
    let capital = 0;
    let años = 0;
    let ganacia = 0;
    let gananciaTotal = 0;

    capital = parseInt(prompt('Ingrese el capital invertido'));
    años = parseInt(prompt('Ingrese el numero de años a calcular'));

    gananciaTotal = 0.017 * 12 / 100;
    ganacia = (capital * gananciaTotal) * 12;
    ganacia = ganacia + capital;

    alert('Interes Recibido: ' + ganacia);
}

function colegioABC() {
    let nombre = '';
    let primeraNota = 0;
    let segundaNota = 0;
    let terceraNota = 0;
    let cuartaNota = 0;
    let quintaNota = 0;
    
    let suma = 0;
    let promedio = 0;
    nombre = prompt('Ingrese el nombre del estudiante');

    primeraNota = parseFloat(prompt('Ingrese la primera nota'));
    segundaNota = parseFloat(prompt('Ingrese la segunda nota'));
    terceraNota = parseFloat(prompt('Ingrese la tercera nota'));
    cuartaNota = parseFloat(prompt('Ingrese la cuarta nota'));
    quintaNota = parseFloat(prompt('Ingrese la quinta nota'));
    
    suma = primeraNota + segundaNota + terceraNota + cuartaNota + quintaNota;
    alert('La suma de las notas es: ' + suma);
    promedio = suma / 5;

    if(promedio > 3.0){
        alert('Aprobo la materia, la nota de ' + nombre + ' Es: ' + promedio);
    }
    else{
        alert('No aprobo la materia, la nota de ' + nombre + ' Es: ' + promedio);
    }
}

function fruteria() {
    var  k = 0 ;
    var  td = 0 ;
    var  d = 0 ;
    var  t = 0 ;
 
    k = parseInt ( prompt ( "Ingrese los kilos comprados" ) ) ;
    t = 4500 * k ;
    if ( k <= 2 ){
        alert ( "No tiene descuento" ) ;
        alert ( "Su total a pagar es: "  +  t ) ;
        alert( "Gracias por su compra, vuelva pronto" ) ;
    }
    if ( ( k > 2 ) && ( k <= 5 ) ){
        alert ( "Tiene un descuento del 10%" ) ;
        d = 10 * t / 100 ;
        td = t - d ;
        alert ( "Su total a pagar es: "  +  td ) ;
        alert ( "Gracias por su compra, vuelva pronto" ) ;
    }
    if ( ( k > 5 ) && ( k <= 10 ) ){
        alert ( "Tiene un descuento del 15%" ) ;
        d = 15 * t / 100 ;
        td = t - d ;
        alert ( "Su total a pagar es: "  +  td ) ;
        alert ( "Gracias por su compra, vuelva pronto" ) ;
    }
    if ( k >= 10 ){
        alert ( "Tiene un descuento del 20%" ) ;
        d = 20 * t / 100 ;
        td = t - d ;
        alert ( "Su total a pagar es: "  +  td ) ;
        alert ( "Gracias por su compra, vuelva pronto" ) ;
    }
       
}
