let sistema = new Sistema();

// EVENTOS CLICK
document.querySelector("#btnLoginUsuario").addEventListener("click", login);
document.querySelector("#btnRegistroUsuario").addEventListener("click",registrar);


// MOSTRAR / OCULTAR 

/* REGISTRO */

function registrar () {
    let id = sistema.clientes.length; 
    let nombreCliente = document.querySelector("#txtNombreCliente").value; 
    let apellidoCliente = document.querySelector("#txtApellidoCliente").value; 
    let nombreUsuarioCliente = document.querySelector("#txtNombreUsuario").value; 
    let contrasenia = document.querySelector("#txtContrasenaRegistro").value; 
    let numTarjeta = Number(document.querySelector("#txtNumeroTarjeta").value); 
    let cvc = Number(document.querySelector("#txtNumeroCVC").value); 
    let saldo = 150000;
    let millas = 0; 

    let pMostrarMensajeRegistro = document.querySelector("#pMostrarMensajeRegistro");

    // Validación password
    let i = 0; 
    let letraMayus = false; 
    let letraMinus = false; 
    let contNumero = false; 
    let contraseniaValida = false; 
    while (i<contrasenia.length){
        if(contrasenia.charAt(i) === contrasenia.charAt(i).toUpperCase()){
            letraMayus = true; 
        }
        if(contrasenia.charAt(i) === contrasenia.charAt(i).toLowerCase()){
            letraMinus = true; 
        }
        if(contrasenia.charAt(i) === !isNaN(contrasenia.charAt(i))){
            contNumero = true; 
        }
    i++;
    }
    if(letraMayus && letraMinus && contNumero){
        contraseniaValida = true; 
    }
    
    //  Validación CVC 

    let textoCvc = ""
    textoCvc += cvc
    let caracteresNumericos = 0;
    for(let i = 0; i < textoCvc.length; i++){
            if(!isNaN(textoCvc.charAt(i))){
                caracteresNumericos++;
            }
    }

    if(caracteresNumericos === 3 && texto.length === 3){
        textCvcCorrecto = true;
    }
    
    if(contraseniaValida && textCvcCorrecto){
        sistema.registrarCliente(id,nombreCliente,apellidoCliente,nombreUsuarioCliente,contrasenia,numTarjeta,cvc,saldo,millas);
        console.log("Usuario registrado")
    }else {
        pMostrarMensajeRegistro.innerHTML = "Datos incorrectos"; 
    }

    
}


// LOGIN 

function login() {
    let nombreUsuario = document.querySelector("#txtUsuario").value;
    let contrasenia = document.querySelector("#txtContrasenia").value;
    let tipoUsuario = document.querySelector("#slcOpciones").value;
    let pMostrarMensajeLogin = document.querySelector("#pMostrarMensajeLogin");

    let usuarioLogin = sistema.login(nombreUsuario, contrasenia, tipoUsuario);

    if (usuarioLogin != null && tipoUsuario === "C") {   
        // MOSTRAR VISTA CLIENTE    
    } else if (usuarioLogin != null && tipoUsuario === "A") {    
         // MOSTRAR VISTA ADMIN   
    } else {
        pMostrarMensajeLogin.innerHTML = "Información inválida: Usuario no encontrado";
    }
}










