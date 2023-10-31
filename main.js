// PUNTOS A EVALUAR //

/* CREAR UN ALGORITMO CON UNA CONDICIONAL
    CREAR UN ALGORITMO UTILIZANDO UN CICLO
    ARMAR UN SIMULADOR INTERACTIVO, LA ESTRUCTURA FINAL DEL PROYECTO INTEGRADOR

    - CONSIGNA: Con los conocimientos vistos hasta el momento,
    empezaras a armar la estructura inicial de tu proyecto integrador.
    A partir de los ejemplos mostrados la primera clase, deberás:
        -  Pensar el alcance de tu proyecto
        -  Armar la estructura HTML del proyecto.
        -  Incorporar lo ejercitado en clases anteriores, algoritmo condicional y algoritmo de ciclo.
        -  Utiliza funciones para realizar esas operaciones.

    - FORMATO: - Página HTML y código fuente en JS.
        Debe identificar el apellido del alumno en el nombre del archivo comprimido por:
        "PreEntrega1-Baranda".

        */

    function claseDeFutbol (){ 
        let intentosNumero = 3;
        let intentosFutbolista = 5;
        let intentosBalon = 2;

        while (intentosNumero > 0) {
            let numeroIngresado = parseInt(prompt(`¿Cuál es el numero destinado a ser el más usado e importante en el fútbol? (Tienes ${intentosNumero} intentos): `));
            if (numeroIngresado === 10) {
                alert("¡Correcto genio! ¿Deseas seguir?")
                break;
            }
            intentosNumero--;
        }

        if (intentosNumero >0) {
            while (intentosFutbolista >0) {
                let respuestaFutbolista = prompt(`¿Quién crees que ha sido el mejor 10 de todos los tiempos? (Tienes ${intentosFutbolista} intentos restantes): `);
                if (respuestaFutbolista.toLowerCase() === "lionel messi") {
                    alert("¡Correcto! Lionel Messi es el mejor futbolista de todos los tiempos. ¿Deseas seguir?");
                    break;
                }
                intentosFutbolista--;
            }

            if (intentosBalon >0) {
                while (intentosBalon >0) {
                    let respuestaBalon = parseInt(prompt(`¿Sabes cuantos Balones de Oro tiene Lionel Messi? (Tienes ${intentosBalon} intentos restantes): `));
                    if (respuestaBalon === 8) {
                        alert("¡Correcto! Lionel Messi ganó ayer su 8vo Balon de Oro");
                        break;
                    }
                    intentosBalon--;
                }
            }
        }

        if (intentosNumero === 0) {
            alert("¡Has agotado tus intentos, debes ver mas futbol!");
            console.error("El usuario no sabe de numeros en el fútbol")
        } else if (intentosFutbolista === 0) {
            alert("Has agotado tus intentos para adivinar el mejor futbolista, te falta ver un poco más de futbol")
            console.error("El usuario sabe de numeros pero no de jugadores");
        } else if (intentosBalon === 0) {
            alert("Sabes mucho de fútbol, aunque no lo suficiente")
            console.error("El usuario no sabe cuantos Balones de Oro ha ganado Messi");
        }
    }

    claseDeFutbol()