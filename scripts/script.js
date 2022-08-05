const medallas_url = "https://danikho2020.github.io/json/medallas.json";

medallero = {
    datos : false,
    1: './img/oro.png',
    2: './img/plata.png',
    3: './img/bronce.png',
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cargar").addEventListener("click", function () {
        if (medallero.datos){
            alert('Los datos ya han sido cargados');
            return
        }

        fetch(medallas_url)
        .then(res => res.json())
        .then(res => {
            medallero.datos = true;
            for (let medalla of res) {
                let row = `
                            <tr>
                                <td>`+ medalla.anio + `</td>
                                <td>`+ medalla.sede + `</td>
                                <td>`+ medalla.deporte + `</td>
                                <td><img src="${medallero[medalla.posicion]}" style='width: 1rem'></td>
                            </tr>
                        `;
                document.getElementById("data").innerHTML += row;
            }

            
        })


        /* 
            Escribe aquí el código necesario para lograr el comportamiento esperado
         */

    });
});
