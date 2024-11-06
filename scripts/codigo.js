let sistema = new Sistema();

// EVENTOS CLICK
document.querySelector("#btnLoginUsuario").addEventListener("click", login);
document.querySelector("#btnRegistroUsuario").addEventListener("click",registrar);

/* REGISTRO */

function registrar () {
    let id = "00" + (sistema.clientes.length); 
    let nombreCliente = document.querySelector("#txtNombreCliente").value; 
    let apellidoCliente = document.querySelector("#txtApellidoCliente").value; 
    let nombreUsuarioCliente = document.querySelector("#txtNombreUsuario").value; 
    let contrasenia = document.querySelector("#txtContrasenaRegistro").value; 
    let numTarjeta = document.querySelector("#txtNumeroTarjeta").value;
    let cvc = document.querySelector("#txtNumeroCVC").value; 
    let saldo = 150000;
    let millas = 0; 

    

    sistema.registrarCliente(id,nombreCliente,apellidoCliente,nombreUsuarioCliente,contrasenia,numTarjeta,cvc,saldo,millas);
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
        pMostrarMensajeLogin.textContent = "Información inválida: Usuario no encontrado";
    }
}










