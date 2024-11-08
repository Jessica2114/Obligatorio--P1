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
        mostrarTablaDestinos();
        
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

//<!--******************* CLIENTE******************** -->
function mostrarTablaDestinos(){
    document.querySelector("#tblMostrarDestinos").innerHTML = "";
    for(let i = 0; i < sistema.destinos.length; i++){
        let destino = sistema.destinos[i]
        let reservaYaExistente = sistema.validarReservaExistente(destino.nombre)
        if(destino.estado === "Activo" && destino.cupos > 0 && !reservaYaExistente){
            document.querySelector("#tblMostrarDestinos").innerHTML += `
            <tr>
                <td>${destino.nombre}</td>
                <td>${destino.descripcion}</td>
                <td>${destino.precioPersona}</td>
                <td>${destino.imagen}</td>
                <td>${destino.enOferta}</td>
                <td><input type="button" value="Reservar" class="btnReservarDestino" data-refSec="secReservarDestino" data-destinoNombre="${destino.nombre}"
                data-destinoDescripcion="${destino.descripcion}" data-destinoPrecio="${destino.precioPersona}" >
                </td>
            </tr>`
            botonesReservarDestino = document.querySelectorAll(".btnReservarDestino");
            for(boton of botonesReservarDestino){
            boton.addEventListener("click", mostrarConfirmacionReserva);
            }
        }else if(destino.estado === "Activo" && destino.cupos > 0 && reservaYaExistente){
        document.querySelector("#tblMostrarDestinos").innerHTML += `
            <tr>
                <td>${destino.nombre}</td>
                <td>${destino.descripcion}</td>
                <td>${destino.precioPersona}</td>
                <td>${destino.imagen}</td>
                <td>${destino.enOferta}</td>
                <td>YA RESERVADO</td>
            </tr>`
    }
}
    }

function mostrarConfirmacionReserva(){
    let nombre = this.getAttribute("data-destinoNombre");
    let descripcion = this.getAttribute("data-destinoDescripcion");
    let precio = this.getAttribute("data-destinoPrecio");


    document.querySelector("#nombreDestinoAReservar").innerHTML = nombre;
    document.querySelector("#descripcionDestino").innerHTML = descripcion;
    document.querySelector("#precioPorPersonaDestino").innerHTML = precio;


    ocultarSecciones()
    cambiarDisplayClase("confirmarReserva", "block")
    pasarDatos(nombre, descripcion, precio)


}

function pasarDatos(nombre, descripcion, precio){
    let nombre = nombre
    let descripcion = descripcion
    let precio = precio

    return nombre, descripcion, precio

}

document.querySelector("#btnConfirmarReservaDestino").addEventListener("click", confirmarReservaDestino);

function confirmarReservaDestino(){
    let idCliente = sistema.usuarioLogueado.id;
    let nombreDestino = document.querySelector("#nombreDestinoAReservar").value;
    let cuposReservados = Number(document.querySelector("#txtCantCupos").value);
    let precioPorPersona = Number(document.querySelector("#precioPorPersonaDestino").value);
    let montoTotal = cuposReservados * precioPorPersona;
    let formaPago = document.querySelector("#slcMetodoPago").value;
    let estadoReserva = "Pendiente";
    let millas = sistema.usuarioLogueado.millas

    let pMostrarMillas = document.querySelector("#cantMillasDisponibles");

    reservaConcretada = sistema.reservarDestino(idCliente, nombreDestino, cuposReservados, montoTotal, formaPago, estadoReserva)
    if(reservaConcretada){
        document.querySelector("#reservaConfirmada").innerHTML = `Su reserva se conretó con éxito`;
        document.querySelector("#btnConfirmarReservaDestino").setAttribute('disabled', 'disabled')
        mostrarTablaDestinos();

    }

    
}














































































// <!--******************* ADMINISTRADOR******************** -->

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







