
let lab1 =
    [
        {
            "posX": 0,
            "posY": 0,
            "walls": [
                true,
                // true,
                false,
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
                true,
                false
            ]
        },
        {
            "posX": 0,
            "posY": 1,
            "walls": [
                false,
                false,
                true,
                true
            ]
        },
        {
            "posX": 1,
            "posY": 1,
            "walls": [
                false,
                false,
                false,
                false
            ]
        },
        {
            "posX": 2,
            "posY": 1,
            "walls": [
                false,
                false,
                false,
                false
            ]
        },
        {
            "posX": 0,
            "posY": 2,
            "walls": [
                false,
                false,
                true,
              false
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
                false
            ]
        }
    ]

 function grid(maze) {
    for (let element of lab1) {
        let x = document.getElementById("lab");
        let div = document.createElement("div");

        x.appendChild(div);
        div.setAttribute("class", "grid-element")
        div.setAttribute("id", "x" + element.posX + " " + "y" + element.posY);
        div.style.width = "80px";
        div.style.height = "80px";
// div.style.marginBottom= "30px";

        console.log(lab1)

        for (let i = 0; i < element.walls.length; i++) {

            // if (i === 0 && element.walls[0]) {  // haut
            //     div.style.borderTop = "2px solid black";
            //
            // }

            if (element.walls[i]) {
                if (i === 0) {
                    //  top, right, bottom, left
                    div.style.borderTop = "solid #ffffff"

                } else if (i === 1) {
                    div.style.borderRight = "solid #ffffff"
                } else if (i === 2) {
                    div.style.borderBottom = "solid #ffffff"
                } else if (i === 3) {
                    div.style.borderLeft = "solid #ffffff"
                }

            }
            console.log(element.walls[i])


        }

    }
}

grid(document.body)







//antigo-----------
// if (i === 1 && element.walls[1]) {  // droite
//     div.style.borderRight = "2px solid black";

// }
// if (i === 2 && element.walls[2]) {  // bas
//     div.style.borderBottom = "2px solid black"; }

// if (i === 3 && element.walls[3]) {  // gauche
//     div.style.borderLeft = "2px solid black";
//
// }
