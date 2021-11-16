// Variables
let cliente;
let items = [];
let pedido;
let tipoVino
let cantidadTotalVinos;
let cantidadVinoJoven;
let cantidadVinoReserva;
let cantidadVinoGranReserva;
let precioTotal;
const PRECIO_VINO_JOVEN = 350;
const PRECIO_VINO_RESERVA = 550;
const PRECIO_VINO_GRAN_RESERVA = 850;
const PRECIO_VINO_JOVEN_BLANCO = 250;
const PRECIO_VINO_RESERVA_BLANCO = 450;
const PRECIO_VINO_GRAN_RESERVA_BLANCO = 750;
let generadorIdClientes = 1;
let generadorIdPedidos = 1;

// Clases
class Cliente {
    constructor(idCliente, nombre, apellido, email, direccion) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
    }
}

class Vino {
    constructor(tipo, costo, año, bodega) {
        this.tipo = tipo;
        this.costo = costo;
 //       this.cepa = cepa;
   //     this.año = año;
     //   this.bodega = bodega;
        
        
    }
}

class Pedido {
    constructor(idCliente, numeroPedido, items, direccionEntrega) {
        this.idCliente = idCliente;
        this.numeroPedido = numeroPedido,
            this.items = items ? items : [];
        this.direccionEntrega = direccionEntrega;
    }

    calcularCostoPedido() {
        const costoPedido = this.items.reduce((acum, item) => acum + item.costo, 0);
        return costoPedido;
        
    }
}

// Funciones

function altaCliente() {
    const nombreCliente = prompt('Vamos a tomar sus datos para procesar el pedido y su entrega.\nPor favor ingrese su nombre:');
    const apellidoCliente = prompt('Ingrese su apellido:');
    const emailCliente = prompt('Ingrese su email:');
    const direccionCliente = prompt('Ingrese la direccion de la entrega del pedido:');

    cliente = new Cliente(generadorIdClientes, nombreCliente, apellidoCliente, emailCliente, direccionCliente);

    generadorIdClientes++;
}

//function solicitarTipoVino(); // Funcion para determinar si tinto o blanco.

function solicitarCantidades() {
    tipoVino = prompt('¿Va a llevar blanco o tinto?');
    cantidadVinoJoven = parseInt(prompt('¿Cuantos Vinos Jovenes?'));
    cantidadVinoReserva = parseInt(prompt('¿Cuantos Vinos Reserva?'));
    cantidadVinoGranReserva = parseInt(prompt('¿Cuantos Vinos Gran Reserva?'));
 
    if (cantidadVinoJoven > 0) {
        for (let i = 0; i < cantidadVinoJoven; i++) {
           if (tipoVino.toLowerCase() == "tinto") {
            items.push(new Vino('Vino Tinto Joven', PRECIO_VINO_JOVEN));
        }
        else {
        items.push(new Vino('Vino Blanco Joven', PRECIO_VINO_JOVEN_BLANCO));
    }
        }
    }
    if (cantidadVinoReserva > 0) {
        for (let i = 0; i < cantidadVinoReserva; i++) {
           if (tipoVino.toLowerCase() == "tinto") {
            items.push(new Vino('Vino Tinto Reserva', PRECIO_VINO_RESERVA));
        }
        else {
        items.push(new Vino('Vino Blanco Reserva', PRECIO_VINO_RESERVA_BLANCO));
    }
        }
    }

    if (cantidadVinoGranReserva > 0) {
        for (let i = 0; i < cantidadVinoGranReserva; i++) {
            if (tipoVino.toLowerCase() == "tinto") {
            items.push(new Vino('Vino Tinto Gran Reserva', PRECIO_VINO_GRAN_RESERVA));
        }
        else {
        items.push(new Vino('Vino Blanco Gran Reserva', PRECIO_VINO_GRAN_RESERVA_BLANCO));
    }
    }
    }

    cantidadTotalVinos = items.length;
}



function armarPedido() {
    pedido = new Pedido(cliente.idCliente, generadorIdPedidos, items, cliente.direccion);
    precioTotal = pedido.calcularCostoPedido();
    generadorIdPedidos++;
    return precioTotal;
}

function informarEntrega(costo) {
    console.log(`
    Hola ${cliente.nombre}!\n
    Confirmamos tu pedido (nro° ${pedido.numeroPedido}) es:\n
    Vinos Jovenes (${cantidadVinoJoven})\n
    Vinos Reserva (${cantidadVinoReserva})\n
    Vinos Gran Reserva (${cantidadVinoGranReserva})\n
    Total (${cantidadTotalVinos}) vinos\n
    El costo total es de $${costo} y tu pedido estara listo en 72 hs hábiles.\n
    Te lo llevaremos a la direccion que nos indicaste: ${cliente.direccion}.\n
    Muchas gracias por tu compra!`);
}

// Main

altaCliente();
solicitarCantidades();
informarEntrega(armarPedido());
