// mi clase constructora
class Robot{
    constructor(id,name,username,email,stock,cantidad){
        this.id=id;
        this.name=name;
        this.username=username;
        this.email=email;
        this.stock=stock;
        this.cantidad= cantidad || 0
    }
    aumentarCantidad(){
        this.cantidad++
    }
}

// Mi array que va a contener todos mis robots
const robots =[];
const carrito=[];

// Creo a cada uno de mis robots
const robot1 = new Robot(1,"Leanne Graham","Bret","Sincere@april.biz",5);
const robot2 = new Robot(2,"Ervin Howell","Antonette","Shanna@melissa.tv",3);
const robot3 = new Robot(3,"Clementine Bauch","Samantha","Nathan@yesenia.net",4);
const robot4 = new Robot(4,"Patricia Lebsack", "Karianne","Julianne.OConner@kory.org",1);
const robot5 = new Robot(5,"Chelsey Dietrich","Kamren","Lucio_Hettinger@annie.ca",7);
const robot6 = new Robot(6,"Mrs. Dennis Schulist","Leopoldo_Corkery","Karley_Dach@jasper.info",1);
const robot7 = new Robot(7,"Kurtis Weissnat","Elwyn.Skiles","Telly.Hoeger@billy.biz",5);
const robot8 = new Robot(8,"Nicholas Runolfsdottir V","Maxime_Nienow","Sherwood@rosamond.me",5);
const robot9 = new Robot(9,"Glenna Reichert","Delphine","Chaim_McDermott@dana.io",2);
const robot10 = new Robot(10,"Clementina DuBuque","Moriah.Stanton","Rey.Padberg@karina.biz",5)

//Cargo el array con mis robots
robots.push(robot1,robot2,robot3,robot4,robot5,robot6,robot7,robot8,robot9,robot10);

//Aca voy a empezar a mostrar mis robots en el html
//Para eso voy a enumerar los pasos así no nos perdemos

//1- Seleccionar el tag HTML a donde voy a insertarle cada uno de mis robotitos
const clase= document.getElementById('robots')

//2- Recorrer el array de robots y luego empezar a jugar, estar atentos a los comentarios dentro del recorrido que voy haciendo
// uso for of, pueden usar el clásico for si quieren es lo mismo
for(const robot of robots){
    //2- Crear un nuevo tag html, para que este tenga todos mis estilos de bootstrap, este va a ser un div ;)
    // Este se va a crear por cada elemento de mi array, por ende se van a crear 10 divs dentro de robots.
    const contenedor = document.createElement('div')
    // A este div le voy a poner una clase
    contenedor.className='card'
    // Y ahora voy a cargar para que se vean :D Voy a utilizar backtips para poder usar javascript dentro del string
    contenedor.innerHTML=`
                        <img src=https://robohash.org/${robot.id}?200x200 class="card-img-top" alt=${robot.name}>
                        <div class="card-body">
                            <h5 class="card-title">${robot.username}</h5>
                            <p class="card-text">Email: ${robot.email}</p>
                            <button id=${robot.id} class="btn btn-primary comprar">Comprar</button>
                        </div>`
    // Luego le agrego al div grandote que declaramos primero que este div va a ser su hijo!
    clase.append(contenedor)
    document.getElementById(`${robot.id}`).addEventListener('click', () => comprarRobot(robot))
}

// Aca yo compro mi producto
// 1- Declarar la funcion 
// 2- Voy a verificar si mi produco existe ya previamente en el carrito
// 3- Si existe solamente voy a aumentar la cantidad de mi producto
// 4- Si no existe, voy a pushear por primera vez mi producto
// 5- Una vez hecho todo el proceso, procedemos a calcular el total de los productos que contiene el carrito.
// Esto lo hago recorriendo el array de carrito, revisando uno por uno mis productos y su respectiva cantidad.

function comprarRobot(producto){
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
    const contador = document.getElementById('contador');
    contador.innerHTML = total;
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Primero guardamos lo que exista en el localStorage y lo guardamos en una variable
// Segundo verificamos si algo existe, puede que sea la primera vez que el usuario ingresa
// Tercero, recorremos esta variable que creamos mediante un for
// Cuarto, dentro del recorrido de esta variable, vamos a pushear al carrito lo que ya exista.
// TAREA:
// Quinto, volver a cargar la cantidad, los pasos son exáctamente los mismos que en la función anterior para calcular el total ;)
function cargarLocalStorage(){
    let carro = JSON.parse(localStorage.getItem('carrito'))
    if(carro){
        for(let i = 0; i < carro.length; i++){
            carrito.push(new Robot(carro[i].id, carro[i].name, carro[i].username, carro[i].stock, carro[i].cantidad))
        }
    }
}