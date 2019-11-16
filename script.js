let buscador = document.querySelector("#busqueda input[type=search]");
let btn = document.querySelector("#busqueda button");
let add = 0;
let mas = document.querySelector(".mas");
let resultados = {};
let conteudo = "" ;

buscador.addEventListener("keyup",(e) => {

    if (e.key == "Enter") {
        primero();
    }
})

btn.addEventListener("click", primero);

function primero() {

    conteudo = buscador.value;
    add = 0;

    const contenedor = document.querySelector("#resultados");
    contenedor.innerHTML = "";
    search();
}

function search() {

    let url = "http://api.giphy.com/v1/gifs/search?api_key=CoGMIvpPxYlGK6JvJDyJoqYksgDZ5kwG&limit=10&offset=" + add +"&q=" + encodeURI(conteudo);

    console.log(url);
    buscador.value = "";

    add = add + 10;   

    fetch(url).then((response) => response.json()).then((data) => {
        resultados = data.data
        respuesta();
    });
}

function respuesta() {

    const contenedor = document.querySelector("#resultados");
    let mas = document.querySelector("#more");
    if (mas !== null ) { contenedor.removeChild(mas) }
    mas = document.createElement("button");
    mas.textContent = "Carregar Mais";
    mas.id = "more";

    for (let item of resultados) {
        let img = document.createElement("img");
        img.src = item.images.original.url;

        contenedor.appendChild(img);
        contenedor.appendChild(mas);

        mas.addEventListener("click", search);

    }
};


