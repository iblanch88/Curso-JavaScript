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
/*class Cliente {
    constructor(idCliente, nombre, apellido, email, direccion) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
    }
}*/

let nombreusuario = localStorage.getItem("nombreusuario")
if (!nombreusuario) {
nombreusuario = prompt  ("Ingrese su nombre de Usuario")
localStorage.setItem ("nombreusuario", nombreusuario)
} 

let biendenida = document.getElementById ("bienvenida")
 bienvenida.innerHTML = `<h3>Bienvenido: ${nombreusuario}</h3>`;

class Vino {
    constructor(tipo, costo, año, bodega) {
        this.marca = marca;
        this.tipo = tipo;
        this.varietal = varietal;
        this.precio = precio;
        this.img = img;
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

/*function altaCliente() {
    const nombreCliente = prompt('Vamos a tomar sus datos para procesar el pedido y su entrega.\nPor favor ingrese su nombre:');
    const apellidoCliente = prompt('Ingrese su apellido:');
    const emailCliente = prompt('Ingrese su email:');
    const direccionCliente = prompt('Ingrese la direccion de la entrega del pedido:');

    cliente = new Cliente(generadorIdClientes, nombreCliente, apellidoCliente, emailCliente, direccionCliente);

    generadorIdClientes++;
}*/

//function solicitarTipoVino(); // Funcion para determinar si tinto o blanco.

/*function solicitarCantidades() {
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
}*/



/*function armarPedido() {
    pedido = new Pedido(cliente.idCliente, generadorIdPedidos, items, cliente.direccion);
    precioTotal = pedido.calcularCostoPedido();
    generadorIdPedidos++;
    return precioTotal;
}*/


const carrito = []
const vinos = [
         {id:1 , marca: "Fabre Montayou", tipo: "Tinto", varietal: "Cabernet Franc", precio: 600, img:"https://www.espaciovino.com.ar/media/default/0001/55/thumb_54558_default_medium.jpeg" },
         {id:2 , marca: "Trumpeter", tipo: "Tinto", varietal: "Malbec", precio:700, img: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Malbec_p7xpdj.jpg"  },
         {id:3 , marca: "Zuccardi", tipo: "Blanco", varietal: "Chardonnay", precio:750, img: "https://cepadevinos.com/wp-content/uploads/2017/07/Zuccardi_Q_Chardonnay_ckximn.jpg" },
         {id:4 , marca: "Rutini", tipo: "Blanco", varietal: "Savignon Blanc", precio:800, img: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62009_default_medium.jpeg" },
         {id:5 , marca: "Nicasia", tipo: "Tinto", varietal: "Blend", precio:650, img: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52948_default_big.jpeg" },
         {id:6 , marca: "Piattelli", tipo: "Tinto", varietal: "Tannat", precio:700, img: "https://www.ampelos.com.ar/wp-content/uploads/2020/07/vino-ampelos-piattelli-malbec-tannat.png" },
         {id:7 , marca: "Luigi Bosca", tipo: "Blanco", varietal: "Chardonnay", precio:700, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/luigi-chard-11-de6b70561d236d428416154064437748-640-0.png" },
         {id:8 , marca: "Dv Catena", tipo: "Tinto", varietal: "Blend", precio:680, img: "https://http2.mlstatic.com/D_NQ_NP_906334-MLA32374805116_092019-O.jpg" }
];

for (const vino of vinos) {
      let contenedor = document.createElement("div")

      contenedor.innerHTML = `
      <h3> ID: ${vino.id} </h3>
      <img src="${vino.img}" width= "150px"> 
      <p> <b>Marca:</b> ${vino.marca}</p>
      <p><b>Tipo:</b> ${vino.tipo}</p> 
      <p><b>Varietal:</b> ${vino.varietal}</p>
      <b> $ ${vino.precio} </b>
      <button> Agregar al carrito 🛒</button>
      <hr> 
      `
      ;
                
    document.body.appendChild(contenedor);
}

function comprarVinos(producto){
    let compra = carrito.find(el=> el.name === producto.name)
    if(compra){
        if(compra.cantidad < producto.stock){
            compra.aumentarCantidad();
        }else{
            alert('no hay mas stock')
        }
    }else{
        carrito.push(producto);
        producto.aumentarCantidad();
    }
    let total = 0;
    for(let i=0; i<carrito.length;i++){
        total += carrito[i].cantidad;
    }
    const contador = document.getElementById('product-count');
    contador.innerHTML = total;
    localStorage.setItem('carrito', JSON.stringify(carrito));
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

//altaCliente();
//solicitarCantidades();
//informarEntrega(armarPedido());
