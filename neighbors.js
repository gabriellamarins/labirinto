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


function getNeighbor (posX, posY) {
    let neighbors = []
    const current = lab1.find(el => el.posX === posX && el.posY === posY);

    for (let i = 0; i < current.walls.length; i++) {
        let neighbor;

        if (!current.walls[i]) {
            if (i === 0) { //up
               neighbor = lab1.find(el => el.posX === current.posX && el.posY === current.posY - 1);
            }
            if (i === 1) { //right
               neighbor = lab1.find(el => el.posX === current.posX + 1 && el.posY === current.posY );
            }
            if (i === 2) { //down
                neighbor = lab1.find(el => el.posX === current.posX && el.posY === current.posY + 1);
            }
            if (i === 3) { //left
                neighbor = lab1.find(el => el.posX === current.posX - 1 && el.posY === current.posY);
            }
            if (!neighbor.visited) {
                 neighbors.push (neighbor)
            }
        }
    }
    return neighbors
}



//DFS

// async function DFS(lab1) { //Depth First Search  - vai checar todos os nos possiveis numa direção e depois retorna para verificar os filhos (LI FO)
//
//     let current = lab1[0];
//     let stack = [];  //cria o array da pilha
//     stack.push(current);
//     let neighbors;
//
//     let last_pos = lab1[lab1.length - 1]
//     current.visited = false;
//
//
//     while (stack.length > 0) { //enquanto a pilha não estiver vazia...
//
//         current = stack.pop(); //tira o ultimo elemento da pilha e marca como visitado
//         current.visited = true;
//         console.log(current)
//         color_path(current.posX, current.posY);
//
//         if (current === lab1[lab1.length-1]) {
//         //    console.log(stack);
//             return stack;
//         }
//
//
//         neighbors = getNeighbor(current.posX, current.posY)
//         for (let neighbor of neighbors) {
//             if (neighbor !== current.visited) {
//                 stack.push(neighbor); //se o neighbor ainda não tiver sido visitado, coloca na pilha
//             }
//
//         }
//
//       //  console.log(stack)
//
//         await delay(400)
//
//
//     }
//
// }

//DFS(lab1)




//////

async function BFS(lab1) {  //Breadth First Search - analisa todos os filhos de um no antes de passar para o proximo (FI FO)

 let current2 = lab1[0];
    let queue = []; // cria uma fila
    queue.push(current2); //coloca posição atual na fila
   let neighbors2;
    let last_pos2 = lab1[lab1.length - 1];


    while (queue.length > 0) { //enquanto a fila não estiver vazia...

        current2 = queue.shift(); //tira o primeiro elemento, por ordem de chegada
        current2.visited = true; // e o declara como visitado
        console.log(current2)
        color_path(current2.posX, current2.posY)

        if (current2 === last_pos2) { //enquanto a posição atual não for a ultima, volta analisar a fila
             return queue;
        }

        neighbors2 = getNeighbor(current2.posX, current2.posY)
        for (let neighbor2 of neighbors2) { //analisa os elementos da função getneighbors

            if (neighbor2 !== current2.visited) { //cada elemento não declarado como visitado é enviado para a fila

                queue.push(neighbor2);
            }
        }
        await delay(200)
    }
}


function color_path(posX, posY) {

    let color_position = document.getElementById("x" + posX + " " + "y" + posY)
  //  let pion= document.getElementById( "pion" + "x" + posX + " " + "y" + posY  )

    color_position.setAttribute("id" , "pion")

  //  color_position.style.backgroundColor = "rgba(129,255,14,0.22)";
  //  color_position.style.width="30px"
   // color_position.style.borderRadius = "50px"
}



function delay(delayInms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

BFS (lab1)