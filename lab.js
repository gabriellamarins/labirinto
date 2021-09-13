
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
let pion= document.createElement("pion")

    for (let element of lab1) {
        let x = document.getElementById("lab");
        let div = document.createElement("div");


        x.appendChild(div);
        div.setAttribute("class", "grid-element")
        div.setAttribute("id", "x" + element.posX + " " + "y" + element.posY);
        pion.setAttribute("id", "x2" + element.posX + " " + "y2" + element.posY)
        div.style.width = "80px";
        div.style.height = "80px";


        console.log(lab1)


        for (let i = 0; i < element.walls.length; i++) {

            // if (i === 0 && element.walls[0]) {
            //     div.style.borderTop = "2px solid black";
            //
            // }

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
                // else if (i === element.walls[22]) {  //não funciona para fazer a porta
                //     div.style.borderRight = "solid #FFC300"
                // }

                    // if (i === 1 && element.walls[1]) {
                    //     div.style.borderRight ="solid #FFC300"
                    // }

                else if (i === 2) {
                    div.style.borderBottom = "solid #FFFFFF"
                } else if (i === 3) {
                    div.style.borderLeft = "solid #FFFFFF"
                }
            }
            console.log(element.walls[i])
        }
    }


//

// lab1.find(el => el.posX === pion.posX && el.posY === pion.posY )
// console.log(pion)


for(let element2 of lab1) {
    pion = lab1[0]


    let x_current = lab1[lab1.length - 1].posX;
    let y_current = lab1[lab1.length - 1].posY;

    console.log(pion)
}
//         while (pion.posX !== x_current && pion.posY !== y_current) {
//
//             console.log(pion)
//            //pion ++;
//             console.log(pion)
//             console.log(element2.posY)
//             let j = element2.posY[0];
//             if (element2.walls[2] === false) {
//                 element2.posY[j] ++;
//            //pion++
//
//             }
//          //  break;
//        }
//
// }


//https://medium.com/swlh/how-to-create-a-maze-with-javascript-36f3ad8eebc1
//https://ichi.pro/fr/comment-creer-un-puzzle-labyrinthe-4357877815998

// jogo -- https://www.the-art-of-web.com/javascript/maze-game/

//!!! https://criarumjogo.com/scratch-online-como-criar-um-jogo-de-labirinto-scratch-aula-04-scratch-2-0/


let case1 = document.getElementById("x0 y0").style.backgroundColor= "#FF8633";
let case_last = document.getElementById("x4 y4").style.backgroundColor = "#FFC300"
// case_last.style.bordeRight = "collapse"



