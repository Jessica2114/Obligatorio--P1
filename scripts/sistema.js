class Sistema{
    constructor(){
        this.clientes = [];
        this.administradores = []; 
        this.reservas = []; 
        this.destinos = []; 
        this.precargarClientes(); 
        this.precargarDestinos(); 
        this.precargarAdmins(); 
        this.usuarioLogueado = null;

    }
//METODOS
    precargarClientes() {
        let clienteUno = new Cliente("001","Jessica","Fripp","jfripp","123","4306-0711-5555-3969","123",15000,0)
        let clienteDos = new Cliente("002","Lucia","Fuentes","lfuentes","123","4306-0711-5555-3970","123",15000,0)
        //Agregar mas clientes 
        
        this.clientes.push(clienteUno,clienteDos);
    }

    precargarAdmins(){
        let adminUno = new Administrador("mickey","123"); 
        let adminDos = new Administrador("lucas", "123")

        this.administradores.push(adminUno,adminDos)
    }
    precargarDestinos(){
        let destinoUno = new Destino 
    }

    // nombre,descripcion,precioPersona,imagen,cupos,estado,enOferta

    // FUNCIONES

    /* LOGIN */   
    login(nombreUsuario, contrasenia, tipoUsuario) {
        let usuario = null;
        let i = 0;
        let listaUsuarios = null;

        if (tipoUsuario === "C") {
            listaUsuarios = this.clientes;
        } else if (tipoUsuario === "A") {
            listaUsuarios = this.administradores; 
        } 

        while (i < listaUsuarios.length && usuario == null) {
            let usuarioActual = listaUsuarios[i];
            
            if (usuarioActual.nombreUsuario === nombreUsuario && usuarioActual.contrasenia === contrasenia) {
                usuario = usuarioActual;
                this.usuarioLogueado = usuarioActual;
                console.log("Usuario logueado:", usuario);
            }
            i++;
        }
        return usuario; 
    }

    cerrarSesion(){
        this.usuarioLogueado = null; 
    } 
      
    registrarCliente (id,nombreCliente,apellidoCliente,nombreUsuarioCliente,contrasenia,numTarjeta,cvc,saldo,millas){
        let seCreoElCliente = false;
        let clienteEsUnico = this.clienteEsUnico(nombreUsuarioCliente)
        if(clienteEsUnico){
            let cliente = new Cliente(id,nombreCliente,apellidoCliente,nombreUsuarioCliente,contrasenia,numTarjeta,cvc,saldo,millas);
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

}

