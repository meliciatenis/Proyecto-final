let buscador = document.querySelector("#busqueda input[type=search]");
let btn = document.querySelector("#busqueda button");
let resultados = {};

btn.addEventListener("click", search)

function search() {

    let url = "http://api.giphy.com/v1/gifs/search?api_key=CoGMIvpPxYlGK6JvJDyJoqYksgDZ5kwG&limit=10&q=" + encodeURI(buscador.value);

    console.log(url);
    buscador.value = "";

    fetch(url).then((response) => response.json()).then((data) => {
        resultados = data.data
        respuesta();
    });
}

function respuesta() {

    const contenedor = document.querySelector("#resultados");

    for (let item of resultados) {
        let img = document.createElement("img");
        img.src = item.images.original.url;

        contenedor.appendChild(img);

    }
};
