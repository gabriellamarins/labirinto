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

// let currentPosition = lab1[0];
//
// currentPosition = lab1.find(element => element.posX === currentPosition.posX && element.posY === currentPosition.posY)
//
// // console.log("  position de X : " + currentPosition.posX + "  position de Y : " + currentPosition.posY + 1)
// console.log(currentPosition)


function getNeighbor (posX, posY) {
    let neighbors = []
    const currentPosition = lab1.find(el => el.posX === posX && el.posY === posY);
    for (let i = 0; i < currentPosition.walls.length; i++) {
        let neighbor;
        if (!currentPosition.walls[i]) {
            if (i === 0) {
                const x = currentPosition.posX
                const y = currentPosition.posY - 1
               neighbor = lab1.find(el => el.posX === x && el.posY === y);
      //          neighbors.push(neighbor)
            }
            if (i === 1) {
                const x = currentPosition.posX + 1
                const y = currentPosition.posY
                neighbor = lab1.find(el => el.posX === x && el.posY === y);
      //          neighbors.push(neighbor)
            }
            if (i === 2) {
                const x = currentPosition.posX
                const y = currentPosition.posY + 1
                neighbor = lab1.find(el => el.posX === x && el.posY === y);
             //   neighbors.push(neighbor)
            }
            if (i === 3) {
                const x = currentPosition.posX - 1
                const y = currentPosition.posY
                neighbor = lab1.find(el => el.posX === x && el.posY === y);
                // neighbors.push(neighbor)
            }
            if (!neighbor.visited) {
                 neighbors.push (neighbor)
            }

        }

    }
  //  console.log(currentPosition)
  //  console.log(neighbors)
    return neighbors

}
//getNeighbor(0, 3);


//DFS
//
// async function DFS(lab1) {
//     //     // Utiliser le posX & posY
//     var currentPosition = lab1[0];
//     let stack = [];
//     stack.push(currentPosition);
//     var neighbors;
//
//     var finish = lab1[lab1.length - 1]
//     currentPosition.visited = false;
//
//     while (stack.length > 0) {
//         // .top retourne le derier élément de la pile (stack)
//         currentPosition = stack.pop();
//         currentPosition.visited = true;
//
//         if (currentPosition.posX === finish.posX && currentPosition.posY === finish.posY) {
//             //    console.log(stack);
//             return stack;
//         }
//
//
//         neighbors = getNeighbor(currentPosition.posX, currentPosition.posY)
//         for (let neighbor of neighbors) {
//             if (neighbor !== currentPosition.visited) {
//                 stack.push(neighbor);
//             }
//
//         }
//         console.log(currentPosition)
//     }
//
// }

// console.log(DFS(lab1))


//////

async function BFS(lab1) { //
    // usar o posx e o posy
    let currentPosition = lab1[0];
    let queue = [];
    queue.push(currentPosition);
    let neighbors;
    let finish = lab1[lab1.length - 1];
    currentPosition.visited = false;
    while (queue.length > 0) {
        currentPosition = queue.shift();
        currentPosition.visited = true;
     //   await sleep(200)
    //    colorPosition(currentPosition.posX, currentPosition.posY)
        if (currentPosition.posX === finish.posX && currentPosition.posY === finish.posY) {
           //  console.log(queue);
            return queue;
        }
        neighbors = getNeighbor(currentPosition.posX, currentPosition.posY)
        for (let neighbor of neighbors) {
            if (neighbor !== currentPosition.visited) {
                queue.push(neighbor);
            }
        }
        console.log(currentPosition)
    }
}

console.log(BFS(lab1))