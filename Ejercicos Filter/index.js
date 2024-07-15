function  filtrarCervezas(listaCervezas, textoIncluidoEnNombre, ibuElegido){
    let cervezasFiltradas = listaCervezas.filter(creveza=>creveza.name.includes(textoIncluidoEnNombre)&& ibuElegido > creveza.ibu)
    return cervezasFiltradas;

}


console.log(filtrarCervezas(cervezas, "a", 10))


