// Creo variables en las cuales no se va a borrar el contenido al ejecutar la funcion

let casilla=0;

// Esta variable verificara si se está mostrando la imagen (Perder)

let verificadorImagen=false;

// Esta variable verificara si se está mostrando la imagen (Ganar)

let verificadorImagen2=false;

// Creo las variables que almacenaran las imagenes le asigno la ruta y la id

let imagen= document.createElement("img");
imagen.src="../img/agujeronegro.jpg";
imagen.id="agujeronegro";

let ganador= document.createElement("img");
ganador.src="../img/ganador.jpg";
ganador.id="ganador";

// Esto actualiza el contenido del html

document.getElementById('botonlanzardados').addEventListener(lanzarDados());

// Funcion para lanzar dados

function lanzarDados() {

    // Generacion de los dados 

    let dado1 = Math.floor(Math.random() * 10);
    let dado2 = Math.floor(Math.random() * 10);
    let dado3 = Math.floor(Math.random() * 10);

    // Suma de los dados

    let suma1 = dado1 + dado2 + dado3;

    // Creo la variable galaxia la cual modificare más adelante

    let galaxia=0;

    // En caso de la suma ser mayor a 9 se suman los numero que la componen por separado

    if (suma1>9){

        let digito1 = Math.floor(suma1 / 10);
        let digito2 = suma1 % 10;

        galaxia=digito1+digito2;

    }else{
        galaxia=suma1;
    }

    
    // Si la distancia de la es mayor a 4 no se sumara

    if (galaxia<=4){

        // Lo suma a la variable casilla la cual no se va a borrar

        casilla=galaxia+casilla;

        // En caso de ser 31 volvera a la casilla 13

        if (casilla==31){

            // En caso de haber perdido (agujero negro) este if borra la imagen

            if(verificadorImagen){
                document.body.removeChild(imagen);
                verificadorImagen=false;
            }

             // En caso de haber ganado este if borra la imagen

            if(verificadorImagen2){
                document.body.removeChild(ganador);
                verificadorImagen2=false;
            }

            // Asigno la casilla a la que vuelves

            casilla=13;

            // Alerta por pantalla de lo que te ha pasado

            alert("Retrocediste debido a que te enconstraste a unos extraterrestres y acabaste en la casilla 13");

            // Esto actualiza el texto ( junto con el document.getElementById('botonlanzardados').addEventListener(lanzarDados()) )

            document.getElementById('d1').innerHTML = `El resultado del dado 1 es ${dado1}`;
            document.getElementById('d2').innerHTML = `El resultado del dado 2 es ${dado2}`;
            document.getElementById('d3').innerHTML = `El resultado del dado 3 es ${dado3}`;
    
            document.getElementById('s1').innerHTML = `El resultado de la suma de los dados es ${suma1}`;
            document.getElementById('c').innerHTML = `Sería la casilla ${galaxia}`;
            document.getElementById('gl').innerHTML = `Retrocediste a la Galaxia 364 (en la casilla ${casilla})`;

        // En caso de ser 33 perderas

        }else if (casilla==33){

            // En caso de haber perdido (agujero negro) este if borra la imagen

            if(verificadorImagen){
                document.body.removeChild(imagen);
                verificadorImagen=false;
            }

            // En caso de haber ganado este if borra la imagen

            if(verificadorImagen2){
                document.body.removeChild(ganador);
                verificadorImagen2=false;
            }

            // Alerta por pantalla de lo que te ha pasado

            alert("Perdiste debido a que caiste en la casilla 33 y allí un agujero negro, si quieres volver a jugar dale al boton");
            
            // Asigno la casilla a la que vuelves (Ya que perdiste)

            casilla=0;

            // Esto actualiza el texto ( junto con el document.getElementById('botonlanzardados').addEventListener(lanzarDados()) )
            // En este caso lo dejo en blanco para poner una imagen

            document.getElementById('d1').innerHTML = ` `;
            document.getElementById('d2').innerHTML = ` `;
            document.getElementById('d3').innerHTML = ` `;
            document.getElementById('s1').innerHTML = ` `;
            document.getElementById('c').innerHTML = ` `;
            document.getElementById('gl').innerHTML = ` `;

            // Muestro por pantalla la imagen de haber perdido

            document.body.appendChild(imagen);

            // Pongo la variable a verdadero para que al entrar luego se ejecute el if que la borra 

            verificadorImagen=true;

        // En caso de ser 42 ganaras

        }else if (casilla==42){

            // En caso de haber perdido (agujero negro) este if borra la imagen

            if(verificadorImagen){
                document.body.removeChild(imagen);
                verificadorImagen=false;
            }

            // En caso de haber ganado este if borra la imagen

            if(verificadorImagen2){
                document.body.removeChild(ganador);
                verificadorImagen2=false;
            }

            // Asigno la casilla a la que vuelves (Ya que ganaste)

            casilla=0;

            // Alerta por pantalla de lo que te ha pasado

            alert("¡GANASTE! Si quieres volver a jugar dale al boton");

            // Esto actualiza el texto ( junto con el document.getElementById('botonlanzardados').addEventListener(lanzarDados()) )
            // En este caso lo dejo en blanco para poner una imagen

            document.getElementById('d1').innerHTML = ` `;
            document.getElementById('d2').innerHTML = ` `;
            document.getElementById('d3').innerHTML = ` `;
            document.getElementById('s1').innerHTML = ` `;
            document.getElementById('c').innerHTML = ` `;
            document.getElementById('gl').innerHTML = ` `;
           
            // Muestro por pantalla la imagen de haber ganado

            document.body.appendChild(ganador);

            // Pongo la variable a verdadero para que al entrar luego se ejecute el if que la borra 

            verificadorImagen2=true;

        // En caso de pasarte de 42 volveras al inicio

        }else if(casilla>42){

            // En caso de haber perdido (agujero negro) este if borra la imagen

            if(verificadorImagen){
                document.body.removeChild(imagen);
                verificadorImagen=false;
            }

            // En caso de haber ganado este if borra la imagen

            if(verificadorImagen2){
                document.body.removeChild(ganador);
                verificadorImagen2=false;
            }

            // Asigno la casilla a la que vuelves (Ya que te pasaste)

            casilla=0;

            // Alerta por pantalla de lo que te ha pasado

            alert("Te pasaste y has acabado en la casilla de inicio");

            // Esto actualiza el texto ( junto con el document.getElementById('botonlanzardados').addEventListener(lanzarDados()) )

            document.getElementById('d1').innerHTML = `El resultado del dado 1 es 0`;
            document.getElementById('d2').innerHTML = `El resultado del dado 2 es 0`;
            document.getElementById('d3').innerHTML = `El resultado del dado 3 es 0`;
    
            document.getElementById('s1').innerHTML = `El resultado de la suma de los dados es 0`;
            document.getElementById('c').innerHTML = `Sería la casilla 0`;
            document.getElementById('gl').innerHTML = `Estas en la Galaxia 000 (en la casilla 0)`;
        
        }
        else{

            // En caso de haber perdido (agujero negro) este if borra la imagen

            if(verificadorImagen){
                document.body.removeChild(imagen);
                verificadorImagen=false;
            }

            // En caso de haber ganado este if borra la imagen

            if(verificadorImagen2){
                document.body.removeChild(ganador);
                verificadorImagen2=false;
            }

            // Esto actualiza el texto ( junto con el document.getElementById('botonlanzardados').addEventListener(lanzarDados()) )

            document.getElementById('d1').innerHTML = `El resultado del dado 1 es ${dado1}`;
            document.getElementById('d2').innerHTML = `El resultado del dado 2 es ${dado2}`;
            document.getElementById('d3').innerHTML = `El resultado del dado 3 es ${dado3}`;
    
            document.getElementById('s1').innerHTML = `El resultado de la suma de los dados es ${suma1}`;
            document.getElementById('c').innerHTML = `Sería la casilla ${galaxia}`;
            document.getElementById('gl').innerHTML = `Estas en la Galaxia ${dado1}${dado2}${dado3} (en la casilla ${casilla})`;
        
        }
    
    }else{

        // En caso de haber perdido (agujero negro) este if borra la imagen

        if(verificadorImagen){
            document.body.removeChild(imagen);
            verificadorImagen=false;
        }

        // En caso de haber ganado este if borra la imagen

        if(verificadorImagen2){
            document.body.removeChild(ganador);
            verificadorImagen2=false;
        }

        // Esto actualiza el texto ( junto con el document.getElementById('botonlanzardados').addEventListener(lanzarDados()) )

        document.getElementById('d1').innerHTML = `El resultado del dado 1 es ${dado1}`;
        document.getElementById('d2').innerHTML = `El resultado del dado 2 es ${dado2}`;
        document.getElementById('d3').innerHTML = `El resultado del dado 3 es ${dado3}`;

        document.getElementById('s1').innerHTML = `El resultado de la suma de los dados es ${suma1}`;
        document.getElementById('c').innerHTML = `Sería la casilla ${galaxia}`;
        document.getElementById('gl').innerHTML = `Estas en la Galaxia ${dado1}${dado2}${dado3} (No se ha avanzado debidoa que era una galaxia muy lejana)`;
    
    }
    
}
