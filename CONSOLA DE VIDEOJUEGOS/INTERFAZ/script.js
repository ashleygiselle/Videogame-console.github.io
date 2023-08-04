function cifrarMensaje() {
    let diccionario = "abcdefghijklmnopqrstuvwxyz";
    let mensajeOriginal = document.getElementById("mensaje").value.toLowerCase();
    let posiciones = "";

    for (let i = 0; i < mensajeOriginal.length; i++) {
        let letraOriginal = mensajeOriginal[i];
        let posicionEnAbecedario = diccionario.indexOf(letraOriginal);
        if (posicionEnAbecedario !== -1) {
            posiciones += (posicionEnAbecedario) + " ";
        } else {
            posiciones += " ";
        }
    }

    document.getElementById("posiciones").value = posiciones.trim();
}
