/*Recibir el id del formulario para poder manipular */
const FRM_CALCULAR = document.querySelector("#frmCalcula");

/*Genereamos el evento del formulario por el medio del boton submit*/
FRM_CALCULAR.addEventListener("submit",calculoController);

function calculoController(event){
    event.preventDefault();
    //recibir datos de cajsa de texto
    let numeroIngresado = parseInt(document.querySelector("#txtNumero").value);
    let numeroIngresadoInput = document.querySelector("#txtNumero");
    // Validar si la caja de texto está vacía
    if (numeroIngresadoInput.value.trim() == "") {
        alert("Por favor, ingrese un valor.");
        return;  // Detener la ejecución si está vacía
    }
    //imprimir resultados TDA
   
    let imprimirRes = document.getElementById("resultado");
    imprimirRes.textContent = numeroTDA(numeroIngresado);
}
const numeroTDA =(numeroIngresado) =>{  
    if(numeroIngresado <= 0){
        return [];
    } else if(numeroIngresado == 1){
        return [0];
    }
    else if (numeroIngresado == 2){
        return [0,1];
    }else {
        var numArray = numeroTDA(numeroIngresado - 1);
        numArray.push(numArray[numArray.length-1]+numArray[numArray.length-2]);
        return numArray;
    }
    

}
