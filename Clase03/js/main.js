texto = prompt("INGRESE UNA FRUTA:");

while(texto != "fin") {
    switch(texto) {

        case "manzana" :
            console.log("El kilo de Manzanas $150")
        break;

        case "banana" :
             console.log("Promoción 2 Kg de $200")
        break;

        case "pera":
            console.log("El kilo de Pera  $120")
        break;

        case "sandia" :
            console.log("El kilo de Sandia  $100")
        break;

        case "frutilla" :
            console.log("SUPER PROMO: 2 KG de FRUTILLA  $450")
        break;
        
        default:
            console.log ("NO TENEMOS " + texto)
            break;
        
    }

     texto = prompt("INGRESE OTRA FRUTA:")


}
 console.log("GRACIAS POR SU VISITA")


  
