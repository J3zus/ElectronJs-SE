//Funcion para manipular nuestros datos obtenidos del archivo.html
var GetData = function(){
    
    //Obtener las variables
    var EstaturaF = parseFloat(document.getElementById('estatura').value);
    var PesoF = parseFloat(document.getElementById('peso').value);

    
    //Operaciones
    //IMC= Peso/Estatura^2
    var IMC = PesoF/(Math.pow(EstaturaF, 2)); //Math.pow se ocupa para realizar la operacion de elevacion a un numero.

    //Mandar a etiquetas(labels)
    document.getElementById('resultado').innerHTML = IMC.toFixed(1);
}

//Funcion para limpiar datos
var ClearData = function(){
    document.getElementById('resultado').innerHTML = 0;
    document.getElementById('estatura').value = "";
    document.getElementById('peso').value = "";

    //Dar focus a primera caja de texto
    document.getElementById('estatura').focus();
}