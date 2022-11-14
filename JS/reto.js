function addElemento(input, input2) {

    if (input == "" || input2 == "") {
        var capa = document.getElementById("capa");
        var h2 = document.createElement('h2')
        h2.innerHTML = "Ingrese parametros en los dos"
        capa.appendChild(h2);
        document.getElementById("mov").href = 'CSS/reto.css';
    } else {
        location.reload()
    }
}