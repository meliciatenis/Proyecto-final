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

    let url = "https://api.giphy.com/v1/gifs/search?api_key=CoGMIvpPxYlGK6JvJDyJoqYksgDZ5kwG&limit=20&offset=" + add +"&q=" + encodeURI(conteudo);

    console.log(url);
    buscador.value = "";

    add = add + 20;   

    fetch(url).then((response) => response.json()).then((data) => {
        resultados = data.data
        respuesta();
    });
}

function trocar(atual){ 

    if (document.getElementById(atual.srcElement.id).dataClickado == false) {
        document.getElementById(atual.srcElement.id).dataClickado = true ;
        document.getElementById(atual.srcElement.id).src = "cor1.png" ;
        base(atual.id) 
    }
    else {
        document.getElementById(atual.srcElement.id).dataClickado = false ;
        document.getElementById(atual.srcElement.id).src = "cor.png" ;
    }

}

function respuesta() {

    const contenedor = document.querySelector("#resultados");
    let mas = document.querySelector("#more");
    if (mas !== null ) { contenedor.removeChild(mas) }
    mas = document.createElement("img");
    mas.src = "arrow1.png"
    mas.id = "more";

    for (let item of resultados) {
        let img = document.createElement("img");
        img.src = item.images.fixed_width.url;
        img.style.position = "relative"

        let fav = document.createElement("img")
        fav.style.position ="absolute";
        fav.style.padding = "0";
        fav.style.zIndex = "2";
        fav.src = "cor.png" ;
        fav.id = "cor_" + item.id; 
        
        contenedor.appendChild(img);
        contenedor.appendChild(mas);
        contenedor.appendChild(fav);

        mas.addEventListener("click", search);
        fav.addEventListener("click", trocar);

    }
    let favFinal = document.querySelector("#resultados img:last-child")
    
    contenedor.removeChild(favFinal)
};

function base(atual) {
console.log(atual)
let item =  {
    "id" : "",
    "title" : "",
    "url" : ""
    }

//    fetch("gifs" , {
//         method:"post",
//         headers:{"Accept": "application/json, text/plain, */*",
//         "Content-Type" : "application/json"
//         },

//     body: JSON.stringify(item)
//     }).then(res => res.json())
//     .then(res => console.log(res));
}