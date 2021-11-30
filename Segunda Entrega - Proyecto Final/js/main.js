// Variables
let cliente;
let items = [];
let pedido;
let tipoVino;
let cantidadTotalVinos;
let cantidadVinoJoven;
let cantidadVinoReserva;
let cantidadVinoGranReserva;
let precioTotal;
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
}
*/
let nombreusuario = localStorage.getItem("nombreusuario");
if (!nombreusuario) {
nombreusuario = prompt  ("Ingrese su nombre de Usuario")
localStorage.setItem ("nombreusuario", nombreusuario)
} 

let bienvenida = document.getElementById ("bienvenida")
 bienvenida.innerHTML = `<h3>Bienvenido: ${nombreusuario} </h3>`;

class Vino {
    constructor(marca, tipo, varietal, precio, img, stock, cantidad) {
        this.marca = marca;
        this.tipo = tipo;
        this.varietal = varietal;
        this.precio = precio;
        this.img = img;
        this.stock=stock;
        this.cantidad= cantidad || 0
    }
        aumentarCantidad(){
                this.cantidad++
        }
 
}

/*class Pedido {
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
}*/


const carrito = []
const vinos = [
         {id:1 , marca: "Fabre Montayou", tipo: "Tinto", varietal: "Cabernet Franc", precio: 600, img:"https://www.espaciovino.com.ar/media/default/0001/55/thumb_54558_default_medium.jpeg", stock: 10 },
         {id:2 , marca: "Trumpeter", tipo: "Tinto", varietal: "Malbec", precio:700, img: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Malbec_p7xpdj.jpg", stock: 12  },
         {id:3 , marca: "Zuccardi", tipo: "Blanco", varietal: "Chardonnay", precio:750, img: "https://cepadevinos.com/wp-content/uploads/2017/07/Zuccardi_Q_Chardonnay_ckximn.jpg", stock: 8 },
         {id:4 , marca: "Rutini", tipo: "Blanco", varietal: "Savignon Blanc", precio:800, img: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62009_default_medium.jpeg", stock: 9 },
         {id:5 , marca: "Nicasia", tipo: "Tinto", varietal: "Blend", precio:650, img: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52948_default_big.jpeg", stock: 13 },
         {id:6 , marca: "Piattelli", tipo: "Tinto", varietal: "Tannat", precio:700, img: "https://www.ampelos.com.ar/wp-content/uploads/2020/07/vino-ampelos-piattelli-malbec-tannat.png", stock: 6 },
         {id:7 , marca: "Luigi Bosca", tipo: "Blanco", varietal: "Chardonnay", precio:700, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/luigi-chard-11-de6b70561d236d428416154064437748-640-0.png", stock: 9 },
         {id:8 , marca: "Dv Catena", tipo: "Tinto", varietal: "Blend", precio:680, img: "https://http2.mlstatic.com/D_NQ_NP_906334-MLA32374805116_092019-O.jpg", stock: 5 }
];

for (const vino of vinos) {
      let contenedor = document.createElement("div")

      contenedor.innerHTML = `
                             <div class="single-product">
                             <h3> ID: ${vino.id} </h3>
                             <p> <b>Marca:</b> ${vino.marca}</p>
                                    <p><b>Tipo:</b> ${vino.tipo}</p> 
                                    <p><b>Varietal:</b> ${vino.varietal}</p>
                                <div class="product-f-image">    
                                <img src="${vino.img}" width= "150px"> 
                                    <div class="product-hover">
                                        <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                `
      /*<h3> ID: ${vino.id} </h3>
      <img src="${vino.img}" width= "150px"> 
      <p> <b>Marca:</b> ${vino.marca}</p>
      <p><b>Tipo:</b> ${vino.tipo}</p> 
      <p><b>Varietal:</b> ${vino.varietal}</p>
      <b> $ ${vino.precio} </b>
      <button> Agregar al carrito 🛒</button>
      <hr> 
      `*/
      ;
      /*clase.append(contenedor)
      document.getElementById(`${vino.id}`).addEventListener('click', () => comprarVinos(vino))
      document.body.appendChild(contenedor);*/
}

function comprarVinos(producto){
    let compra = carrito.find(el=> el.name === poducto.name)
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

/*function informarEntrega(costo) {
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
}*/

// Main

//altaCliente();
//solicitarCantidades();
//informarEntrega(armarPedido());
