let iva= parseInt (prompt("INGRESE EL IVA:"))
let costoproducto= parseInt (prompt("INGRESE EL COSTO DEL PRODUCTO:"))

function precioproducto (costoproducto, iva){
    let preciofinal= costoproducto*(iva/100 +1)
    return preciofinal;
}

console.log("EL IVA DE ESTE PRODUCTO ES:",  iva , "%" , " Y SU PRECIO FINAL:" , precioproducto(costoproducto,iva))
