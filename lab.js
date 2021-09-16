let lab1 =

    [
        {
            "posX": 0,
            "posY": 0,
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
                true,
                false,
                true
            ]
        },
        {
            "posX": 2,
            "posY": 0,
            "walls": [
                true,
                false,
                false,
                true
            ]
        },
        {
            "posX": 3,
            "posY": 0,
            "walls": [
                true,
                false,
                false,
                false
            ]
        },
        {
            "posX": 4,
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
                false,
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
                true,
                false
            ]
        },
        {
            "posX": 3,
            "posY": 1,
            "walls": [
                false,
                false,
                true,
                true
            ]
        },
        {
            "posX": 4,
            "posY": 1,
            "walls": [
                true,
                true,
                false,
                false
            ]
        },
        {
            "posX": 0,
            "posY": 2,
            "walls": [
                false,
                true,
                false,
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
                true
            ]
        },
        {
            "posX": 2,
            "posY": 2,
            "walls": [
                true,
                false,
                false,
                true
            ]
        },
        {
            "posX": 3,
            "posY": 2,
            "walls": [
                true,
                true,
                false,
                false
            ]
        },
        {
            "posX": 4,
            "posY": 2,
            "walls": [
                false,
                true,
                false,
                true
            ]
        },
        {
            "posX": 0,
            "posY": 3,
            "walls": [
                false,
                true,
                false,
                true
            ]
        },
        {
            "posX": 1,
            "posY": 3,
            "walls": [
                true,
                false,
                false,
                true
            ]
        },
        {
            "posX": 2,
            "posY": 3,
            "walls": [
                false,
                true,
                true,
                false
            ]
        },
        {
            "posX": 3,
            "posY": 3,
            "walls": [
                false,
                false,
                true,
                true
            ]
        },
        {
            "posX": 4,
            "posY": 3,
            "walls": [
                false,
                true,
                false,
                false
            ]
        },
        {
            "posX": 0,
            "posY": 4,
            "walls": [
                false,
                false,
                true,
                true
            ]
        },
        {
            "posX": 1,
            "posY": 4,
            "walls": [
                false,
                true,
                true,
                false
            ]
        },
        {
            "posX": 2,
            "posY": 4,
            "walls": [
                true,
                false,
                true,
                true
            ]
        },
        {
            "posX": 3,
            "posY": 4,
            "walls": [
                true,
                false,
                true,
                false
            ]
        },
        {
            "posX": 4,
            "posY": 4,
            "walls": [
                false,
                true,
                true,
                false
            ]
        }
    ]

//let pion= document.getElementById("pion")

for (let element of lab1) {
    let x = document.getElementById("lab");
    let div = document.createElement("div");
    x.appendChild(div);
    div.setAttribute("class", "grid-element")
    div.setAttribute("id", "x" + element.posX + " " + "y" + element.posY);
    //  pion.setAttribute("id", "x2" + element.posX + " " + "y2" + element.posY)
    div.style.width = "80px";
    div.style.height = "80px";
    //       console.log(lab1)


    for (let i = 0; i < element.walls.length; i++) {

        if (element.walls[i]) {

            if (i === element.walls[0]) {   //não funciona!!
                div.style.color = "solid #FFC300"
            }
            if (i === 0) {
                //  top, right, bottom, left
                div.style.borderTop = "solid #FFFFFF"
            } else if (i === 1) {
                div.style.borderRight = "solid #FFFFFF"
            }
            else if (i === 2) {
                div.style.borderBottom = "solid #FFFFFF"
            } else if (i === 3) {
                div.style.borderLeft = "solid #FFFFFF"
            }
        }
    }
}


let case1 = document.getElementById("x0 y0").style.backgroundColor= "#FF8633";
let case_last = document.getElementById("x4 y4").style.backgroundColor = "#FFC300"

// let posX = position.posX;
// let posY = position.posY
let posXlast = lab1[lab1.length - 1].posX;
let posYlast = lab1[lab1.length - 1].posY;

async function pathMaze(posX, posY) {

    let labyrtemp = [...lab1];

    let currentPos = labyrtemp[0];
    console.log("Start");

    let x = currentPos.posX;
    let y = currentPos.posY;

    while (!(x === lab1[lab1.length - 1].posX && y === lab1[lab1.length - 1].posY)) {
        // for (let i = 0; i < 20; i++) {

        currentPos.status = "checked"
        // currentPos.checked=true
        console.log(currentPos)
        let nbWalls = currentPos.walls.filter(wall => wall === true).length
        console.log(nbWalls);


        if (nbWalls <= 1) {
            console.log("intersection")
            currentPos.repere = "intersection"
          //  document.getElementById("x" + " " + currentPos.posX + " " + "y" + " " + currentPos.posY).style.backgroundColor = "E0CCCD"

        } else if (nbWalls === 3) {
            if (!(currentPos === labyrtemp[0])) {
                currentPos.repere = "impasse"
                console.log("impasse")
                currentPos = document.getElementById("x" + " " + currentPos.posX + " " + "y" + " " + currentPos.posY);
              //  currentPos.style.backgroundColor = "F3A682"
                let intersectionList = lab1.filter(el => el.repere === "intersection")// crée un tableau qui contient les cases avec le repere=intersection
                currentPos = intersectionList.find(el => el.repere === "intersection")
                console.log(currentPos);
                intersectionList.shift(); // retirer le premier élément du tableau
                console.log(intersectionList);
                currentPos.repere = "undefined";
                x = currentPos.posX;
                y = currentPos.posY;
                //console.log(currentPos);
                //console.log(intersectionList)
            }
        }

        if (currentPos.walls[0] === false && lab1.find(el => el.posY === y - 1 && el.posX === x).status === undefined) { //si pas de mur en haut

            y = y - 1;

        } else if (currentPos.walls[1] === false && lab1.find(el => el.posX === x + 1 && el.posY === y).status === undefined) { //si pas de mur à droite

            x = x + 1;

        } else if (currentPos.walls[2] === false && lab1.find(el => el.posY === y + 1 && el.posX === x).status === undefined) { //si pas de mur en bas

            y = y + 1;

        } else if (currentPos.walls[3] === false && lab1.find(el => el.posX === x - 1 && el.posY === y).status === undefined) { //si pas de mur à gauche

            x = x - 1;
        }

        currentPos = lab1.find(el => el.posX === x && el.posY === y)

         console.log(currentPos);
        // await delay(200)
        // displayAvancement(currentPos);
    }

    console.log("Finish!");

}

pathMaze();

// function displayAvancement(position) {
//     position = document.getElementById("x" + " " + position.posX + " " + "y" + " " + position.posY)
//   //  position.style.backgroundColor = "FAD5C4"
//
// }
//
// function delay(delayInms) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(2);
//         }, delayInms);
//     });
// }

