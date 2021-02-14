var botonXhr = document.getElementById("XHR");
var botonFetch = document.getElementById("FETCH");
var botonJquery = document.getElementById("JQUERY");

botonFetch.addEventListener("click",mostrarTienda);
botonXhr.addEventListener("click",mostrarTienda);
botonJquery.addEventListener("click",mostrarTienda);

function mostrarTienda()
{
    borrar();
    cargandoHtml();
}

function borrar()
{
    document.querySelector("main").remove();
    document.querySelector("body").style.backgroundColor = "silver";

    let simbolo = document.createElement("i");

    simbolo.setAttribute("class","fas fa-donut-large");
    document.getElementById("loading").appendChild(simbolo);
}

function cargandoHtml()
{
    document.querySelector("body").style.backgroundColor = "white";
    let nuevaEmpresa = document.createElement("p");
    nuevaEmpresa.innerText = "Nueva Empresa";
    nuevaEmpresa.addEventListener("click",mostrarCamposNE);
    document.getElementById("opciones").appendChild(nuevaEmpresa);
}


function mostrarCamposNE()
{
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.getElementById("NuevaEmpresa").appendChild(clon);
    
}

