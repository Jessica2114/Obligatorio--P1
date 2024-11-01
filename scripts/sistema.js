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

precargarClientes(){
    let clienteUno = new Cliente("001","Jessica","Fripp","jfripp","jfripp.1","4306-0711-5555-3969","123",15000,0)
    let clienteDos = new Cliente("002","Lucia","Fuentes","lfuentes","lfuentes.1","4306-0711-5555-3970","123",15000,0)
    let clienteTres = new Cliente()
    
    this.clientes.push(clienteUno,clienteDos);
}
// (id,nombre,apellido,nombreUsuario,contrasena,numTarjeta,cvc,saldoInicial,millas)


generarReserva () {

}

procesarReserva (){

}

agregarDestino(){

}

modificarDestino(){

}
registrarCliente (){

}








