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
            }    if (i === element.walls[0]) {   //não funciona!!
                div.style.color = "solid #FFC300"
            }
        }
    }
}


let case1 = document.getElementById("x0 y0").style.backgroundColor= "#FF8633";
let case_last = document.getElementById("x4 y4").style.backgroundColor = "#FFC300"


function getNeighbor (posX, posY) {
    let neighbors = []
   // let position = {"posX": posX, "posY": posY}
   // let current;
  const current = lab1.find(el => el.posX === posX && el.posY === posY);

    for (let i = 0; i < current.walls.length; i++) {
        let neighbor;

        if (!current.walls[i]) {
            if (i === 0) { //up
                const x = current.posX
                const y = current.posY - 1
               neighbor = lab1.find(el => el.posX === x && el.posY === y);

            }
            if (i === 1) { //right
                const x = current.posX + 1
                const y = current.posY
                neighbor = lab1.find(el => el.posX === x && el.posY === y);

            }
            if (i === 2) { //down
                const x = current.posX
                const y = current.posY + 1
                neighbor = lab1.find(el => el.posX === x && el.posY === y);

            }
            if (i === 3) { //left
                const x = current.posX - 1
                const y = current.posY
                neighbor = lab1.find(el => el.posX === x && el.posY === y);

            }
            if (!neighbor.visited) {
                 neighbors.push (neighbor)
            }

        }

    }
  //  console.log(current)
  //  console.log(neighbors)
    return neighbors

}
//getNeighbor(0, 3);


//DFS

// async function DFS(lab1) {
//
//     let current = lab1[0];
//     let stack = []; //cria o array da pilha
//     stack.push(current);
//     let neighbors;
//
//     let last_pos = lab1[lab1.length - 1]
//     current.visited = false;
//
//
//     while (stack.length > 0) { //enquanto a pilha não estiver vazia...
//
//         current = stack.pop(); //envia o ultimo/primeiro elemento da pilha e marco como visitado
//         current.visited = true;
//
//
//
//         if (current === lab1[lab1.length-1]) { //nada funcionaaaaaa AAAAHHHHHHHHH
//             lab1.posX;
//             lab1.posY ++;
//         //    console.log(stack);
//            // return stack;
//            // current.posY ++
//             break
//         }
//
//
//         // if (current.posX === last_pos.posX && current.posY === last_pos.posY) {
//         //     //    console.log(stack);
//         //     return stack;
//         // }
//
//
//         neighbors = getNeighbor(current.posX, current.posY)
//         for (let neighbor of neighbors) {
//             if (neighbor !== current.visited) {
//                 stack.push(neighbor); //se o neighbor ainda não tiver sido visitado, coloca na pilha
//             }
//
//         }
//         console.log(current)
//
//       //  console.log(stack)
//
//         await delay(400)
//         colorPosition(current.posX, current.posY);
//
//     }
//
// }
//
// DFS(lab1)






//////

async function BFS(lab1) {

 let current = lab1[0];
    let queue = [];
    queue.push(current);
   let neighbors;
    let finish = lab1[lab1.length - 1];
    current.visited = false;

    while (queue.length > 0) {

        current = queue.shift();
        current.visited = true;


        if (current.posX === finish.posX && current.posY === finish.posY) {
            // console.log(queue);
            return queue;
        }

        neighbors = getNeighbor(current.posX, current.posY)
        for (let neighbor of neighbors) {

            if (neighbor !== current.visited) {

                queue.push(neighbor);
            }
        }
        console.log(current)
        await delay(200)
        colorPosition(current.posX, current.posY)


    }


}


function colorPosition(posX, posY) {

    var position = document.getElementById("x" + posX + " " + "y" + posY)

    position.style.backgroundColor = "#ffAc3359";
}

// Fonction de temps

function delay(delayInms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

BFS (lab1)