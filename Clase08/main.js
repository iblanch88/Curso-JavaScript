let nombreusuario = localStorage.getItem("nombreusuario")
if (!nombreusuario) {
nombreusuario = prompt  ("Ingrese su nombre de Usuario")
localStorage.setItem ("nombreusuario", nombreusuario)
} 

let biendenida = document.getElementById ("bienvenida")
 bienvenida.innerHTML = `<h3>Bienvenido: ${nombreusuario}</h3>`;

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