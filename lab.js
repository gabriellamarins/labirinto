
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

let pion= document.getElementById("pion")

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
  //          console.log(element.walls[i])
        }
    }


let case1 = document.getElementById("x0 y0").style.backgroundColor= "#FF8633";
let case_last = document.getElementById("x4 y4").style.backgroundColor = "#FFC300"
// case_last.style.borderRight = "collapse"



let current = lab1.posX + lab1.posY + lab1.walls + lab1.visited;

current = lab1[0]

let x_last = lab1[lab1.length - 1].posX;
let y_last= lab1[lab1.length - 1].posY;




while (!(current.posX === x_last && current.posY === y_last )) { //testar o while com o for debaixo de 50, por exemplo , pra ver como funciona
  // for (let i =0; i< 10; i++) {


       let actual_position_y = current.posY;
       let actual_position_x = current.posX;

       if (current.walls[0] === false && current.visited === false) { // up
           actual_position_y--
       }
       //   console.log(actual_position)

       else if (current.walls[1] === false) { // right
           actual_position_x++
       }
       else if (current.walls[2] === false) { //down
               actual_position_y++

       } else if (current.walls[3] === false && current.visited === false) { //left --- on enleve cette condition?
           actual_position_x--
       }

       //     else if (current.posX === "x0" && current.posY === "y4") {
       //     actual_position_x++
       // }

    // else if (current.walls[0] && current.walls[1] === false || current.walls[1] && current.walls[2] === false || current.walls[2] && current.walls[3] === false || current.walls [3] && current.walls[0] === false) {
    //
    // }



    current =  lab1.find(el => el.posX === actual_position_x && el.posY === actual_position_y )

    current.visited = true;

    console.log(current);
    console.log(actual_position_x);
    console.log(actual_position_y);

}






























