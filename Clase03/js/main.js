let texto = prompt("INGRESE UNA FRUTA:");

while(texto != "FIN") {
    switch(texto) {

        case "MANZANA" :
            console.log("El kilo de Manzanas esta $150")
        break;

        case "BANANA" :
             console.log("Promoción 2 Kg de $200")
        break;

        case "PERA":
            console.log("El kilo de Pera está $120")
        break;

        case "SANDIA" :
            console.log("El kilo de Sandía está $100")
        break;

        case "FRUTILLA" :
            console.log("SUPER PROMO: 2 KG de FRUTILLA está $450")
        break;
        
        default:
            console.log ("NO TENEMOS" + texto)
            break;
        
    }

    let texto = prompt("INGRESE OTRA FRUTA:")


}
 console.log("GRACIAS POR SU VISITA")


  
