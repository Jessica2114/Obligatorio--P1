let sistema = new Sistema();

/* REGISTRO */
let id = "00" + (sistema.clientes.length); 
let nombreCliente = document.querySelector("#txtNombreCliente").value; 
let apellidoCliente = document.querySelector("#txtApellidoCliente").value; 
let nombreUsuarioCliente = document.querySelector("#txtNombreUsuario").value; 
let contrasenaCliente = document.querySelector("#txtContrasenaRegistro").value; 
let numTarjeta = document.querySelector("#txtNumeroTarjeta").value;
let cvc = document.querySelector("#txtNumeroCVC").value; 
let saldo = 150000;
let millas = 0; 


sistema.registrarCliente(id,nombreCliente,apellidoCliente,nombreUsuarioCliente,contrasenaCliente,numTarjeta,cvc,saldo,millas);

// LOGIN 

let nombreUsuario = document.querySelector("#txtUsuario").value;
let contraseniaUsuario = document.querySelector("#txtContrasenia").value;
let tipoUsuario = document.querySelector("#slcOpciones").value;
let pMostrarMensajeLogin = document.querySelector("#pMostrarMensajeLogin").value;

let resultadoAcceso = sistema.verificarUsuario(nombreUsuario,contraseniaUsuario,tipoUsuario);

if(resultadoAcceso && tipoUsuario==="C"){
    // MOSTRAR VISTA CLIENTE 
}else if (resultadoAcceso && tipoUsuario==="A"){
    // MOSTRAR VISTA ADMINISTRADOR
}else {
    pMostrarMensajeLogin = "Información invalida: Usuario no encontrado"
}






