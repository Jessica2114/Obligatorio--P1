class Sistema{
    constructor(){
        this.clientes = [];
        this.administradores = []; 
        this.reservas = []; 
        this.destinos = []; 
        this.precargarClientes(); 
        this.precargarDestinos(); 
        this.precargarAdmins();  
    }
}
// VARIABLES GLOBALES 

let datosDelUsuario = []; 

//METODOS
precargarClientes(){
    let clienteUno = new Cliente("001","Jessica","Fripp","jfripp","jfripp.1","4306-0711-5555-3969","123",15000,0)
    let clienteDos = new Cliente("002","Lucia","Fuentes","lfuentes","lfuentes.1","4306-0711-5555-3970","123",15000,0)
    //Agregar mas clientes 
    
    this.clientes.push(clienteUno,clienteDos);
}

precargarAdmins(){
    let adminUno = new Administrador("jfripp","pass123"); 
    let adminDos = new Administrador("lfuentes", "pass234")

    this.administradores.push(adminUno,adminDos)
}

// FUNCIONES

    /* LOGIN */   
    verificarUsuario(nombreUsuario, contrasenia, tipoUsuario) {
        let usuarioEncontrado = false;
        let usuarioEncontradoDatos = "";
        let i = 0;

    if(tipoUsuario === "C"){
        while (i < this.clientes.length && !usuarioEncontrado) {
            let cliente = this.clientes[i];
            if (cliente.nombreUsuario === nombreUsuario && cliente.contrasenia === contrasenia) {
                usuarioEncontrado = true;
                usuarioEncontradoDatos = cliente;
            }
            i++;
        }
    }else if (tipoUsuario === "A"){
        while (i < this.administradores.length && !usuarioEncontrado) {
            let cliente = this.administradores[i];
            if (cliente.nombreUsuario === nombreUsuario && cliente.contrasenia === contrasenia) {
                usuarioEncontrado = true;
                usuarioEncontradoDatos = cliente;
            }
            i++;
        }

    }
    if (usuarioEncontrado) {
            datosDelUsuario = usuarioEncontradoDatos;
            return true;
        } else {
            return false;
        }  
    
    }

    /* REGISTRAR */
registrarCliente (id,nombreCliente,apellidoCliente,nombreUsuarioCliente,contrasenaCliente,numTarjeta,cvc,saldo,millas){
    let seCreoElCliente = false;
    let clienteEsUnico = this.clienteUnico(nombreUsuarioCliente)
    if(clienteEsUnico){
        let cliente = new Cliente(id,nombreCliente,apellidoCliente,nombreUsuarioCliente,contrasenaCliente,numTarjeta,cvc,saldo,millas);
        this.clientes.push(cliente);
        seCreoElCliente = true; 
    }
    return seCreoElCliente; 
} 
clienteEsUnico(nombreUsuarioCliente){
    let unico = true;
    let i = 0;
    while(i<this.clientes.length && unico){
        if(this.clientes[i].nombreUsuario === nombreUsuarioCliente){
            unico = false;
        }
        i++;
    }
    return unico;
}


/* generarReserva () {

}

procesarReserva (){

}

agregarDestino(){

}

modificarDestino(){

}
 */








