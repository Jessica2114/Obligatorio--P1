let sistema = new Sistema();

// EVENTOS CLICK
document.querySelector("#btnLoginUsuario").addEventListener("click", login);
document.querySelector("#btnRegistroUsuario").addEventListener("click",registrar);
document.querySelector("#bntAgregarDestino").addEventListener("click",agregarDestino);
document.querySelector("#btnMostrarRegistro").addEventListener("click",mostrarRegistro); 

// OCULTAR / MOSTRAR

let btnSecciones = document.querySelectorAll(".btnSeccion")
for(let boton of btnSecciones){
    boton.addEventListener("click", mostrarSeccion)
}

let btnCerrarSesion  = document.querySelectorAll(".btnCerrarSesion")
for(let boton of btnCerrarSesion){
    boton.addEventListener("click",cerrarSesion)
}
function mostrarSeccion(){
    ocultarSecciones();
    let idSeccion = this.getAttribute("data-refSec")
    document.querySelector(`#${idSeccion}`).style.display = "block"
}

ocultarSecciones();
ocultarSeccionesNav();  

function mostrarRegistro() {
    cambiarDisplayClase("preLogin","none");
    cambiarDisplayClase("formRegistro","block");
    
}

function ocultarSecciones(){
    let secciones = document.querySelectorAll(".seccion")
    for(let seccion of secciones){
        seccion.style.display = "none"
    }
}

function ocultarSeccionesNav(){
    let secciones = document.querySelectorAll(".seccionNav")
    for(let seccion of secciones){
        seccion.style.display = "none"
    }
}

function cambiarDisplayClase(clase,display){
    let sec = document.querySelectorAll(`.${clase}`)
    for(let s of sec){
        s.style.display = display
    }
}

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
        cambiarDisplayClase("vistaCliente","block");
        cambiarDisplayClase("vistaAdmin","none"); 
        cambiarDisplayClase("preLogin","none"); 
        cambiarDisplayClase("formRegistro","none");
        
    } else if (usuarioLogin != null && tipoUsuario === "A") {    
        cambiarDisplayClase("vistaCliente","none");
        cambiarDisplayClase("vistaAdmin","block");
        cambiarDisplayClase("preLogin","none");
        cambiarDisplayClase("formRegistro","none");
        
    } else {
        pMostrarMensajeLogin.innerHTML = "Información inválida: Usuario no encontrado";
    }
}

function cerrarSesion(){
    cambiarDisplayClase("preLogin","block");
    cambiarDisplayClase("formRegistro","none");
    ocultarSecciones();
    ocultarSeccionesNav() 
    sistema.cerrarSesion();
} 


// DESTINOS //

function agregarDestino (){
    let nombreNuevoDestino = document.querySelector("#txtNombreNuevoDestino").value; 
    let descripcionNuevoDestino = document.querySelector("#txtDescripcionNuevoDestino").value; 
    let precioPorPersonaNuevoDestino = Number(document.querySelector("#txtPrecioPorPersonaNuevoDestino").value); 
    let img = document.querySelector("#imgNuevoDestino").files[0].name; 
    let cuposNuevoDestino = Number(document.querySelector("#txtCuposNuevoDestino").value);
    let estadoDestino = "Activo";
    let enOfertaNuevoDestino =  document.querySelector("#slcEnOfertaNuevoDestino").value; 
    let mensajeAgregarDestino = document.querySelector("#pMensajeAgregarDestino")
    

    let seCreoDestino = sistema.agregarDestino(nombreNuevoDestino,descripcionNuevoDestino,precioPorPersonaNuevoDestino,img,cuposNuevoDestino,estadoDestino,enOfertaNuevoDestino);

    if(seCreoDestino){
        mensajeAgregarDestino.innerHTML = "Se creó el destino"
    }else{
        mensajeAgregarDestino.innerHTML = "No se creó el destino"
    }
}

//nombre,descripcion,precioPersona,imagen,cupos,estado,enOferta







