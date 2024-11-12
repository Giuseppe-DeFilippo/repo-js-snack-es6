/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const biciclette = [
    {
        nome: "bmx",
        peso: 20,
    },
    {
        nome: "focus",
        peso: 25,
    },
    {
        nome: "argon",
        peso: 27,
    },
    {
        nome: "scott",
        peso: 17,
    }
];

let bicileggera = biciclette[0];
    for(let i=0; i<biciclette.length; i++){
        if(biciclette[i].peso < bicileggera.peso){
            bicileggera = biciclette[i];
        }
        
    }
    const stampa= document.getElementById("stampa").innerHTML = (bicileggera.nome + " " + bicileggera.peso);
    console.log(bicileggera);