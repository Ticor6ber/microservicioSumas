const display = document.getElementById('resultado');

// SUMA CON PATH PARAMS
function sumaPath() {

    const n1 = document.getElementById('numA').value;
    const n2 = document.getElementById('numB').value;

    fetch(`https://microserviciosumas.onrender.com/sumar/${n1}/${n2}`)
        .then(res => res.json())
        .then(data => {
            display.innerText = "Resultado: " + data.resultado;
        })
        .catch(error => {
            display.innerText = "Error al conectar con el microservicio";
        });

}


// SUMA CON QUERY PARAMS
function sumaQuery() {

    const n1 = document.getElementById('numA').value;
    const n2 = document.getElementById('numB').value;

    fetch(`https://giving-clarity-production.up.railway.app/sumar?a=${n1}&b=${n2}`)
        .then(res => res.json())
        .then(data => {
            display.innerText = "Resultado: " + data.resultado;
        })
        .catch(error => {
            display.innerText = "Error al conectar con el microservicio";
        });

}


// SUMA CON BODY PARAMS
function sumaBody() {

    const n1 = document.getElementById('numA').value;
    const n2 = document.getElementById('numB').value;

    fetch("https://microserviciosumasbody.onrender.com/sumar", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            a: n1,
            b: n2
        })

    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    })
    .catch(err => {
        document.getElementById("resultado").innerText = "Error en microservicio";
    });

}
