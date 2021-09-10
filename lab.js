
let lab1 =

[
        {
            "posX": 40,
            "posY": 50,
            "walls": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "posX": 1,
            "posY": 0,
            "walls": [
                true,
                false,
                false,
                true
            ]
        },
        {
            "posX": 2,
            "posY": 0,
            "walls": [
                true,
                true,
                false,
                false
            ]
        },
        {
            "posX": 0,
            "posY": 1,
            "walls": [
                false,
                true,
                false,
                true
            ]
        },
        {
            "posX": 1,
            "posY": 1,
            "walls": [
                false,
                true,
                false,
                true
            ]
        },
        {
            "posX": 2,
            "posY": 1,
            "walls": [
                false,
                true,
                false,
                true
            ]
        },
        {
            "posX": 0,
            "posY": 2,
            "walls": [
                false,
                false,
                true,
                true
            ]
        },
        {
            "posX": 1,
            "posY": 2,
            "walls": [
                false,
                true,
                true,
                false
            ]
        },
        {
            "posX": 2,
            "posY": 2,
            "walls": [
                false,
                true,
                true,
                true
            ]
        }
    ]


for (let element of lab1) {
    let x = document.getElementById("lab");
    let div= document.createElement("div");
    x.appendChild(div);
    div.setAttribute("class", "grid-element" )
    div.setAttribute("id", "x" + element.posX + " " + "y" + element.posY);

console.log(lab1)

for (let i = 0; i < element.walls.length; i++) {

        if (i === 0 && element.walls[0]) {  // haut
            div.style.borderTop = "2px solid black";

        }
        // if (i === 1 && element.walls[1]) {  // droite
        //     div.style.borderRight = "2px solid black";

        // }
        if (i === 2 && element.walls[2]) {  // bas
            div.style.borderBottom = "2px solid black"; }

            // if (i === 3 && element.walls[3]) {  // gauche
            //     div.style.borderLeft = "2px solid black";
            //
            // }

    }

}
