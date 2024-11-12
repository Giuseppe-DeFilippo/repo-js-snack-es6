/* Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
const stampa= document.getElementById("stampa");
let squadre = [
    {
        nome: "napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "juve",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "parma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

 

function numrandom(){
    return Math.floor(Math.random() * 10);
}

    squadre.forEach(squadre => {
        squadre.puntiFatti = numrandom();
        squadre.falliSubiti = numrandom();
    });

    let squadre2 = squadre.map(squadre => ({ nome: squadre.nome, falliSubiti: squadre.falliSubiti }));
    console.log(squadre2);

    let risultati = "";
    squadre2.forEach(squadra => {
        risultati += squadra.nome + " " + squadra.falliSubiti + "<br>";
    });
    stampa.innerHTML = risultati;