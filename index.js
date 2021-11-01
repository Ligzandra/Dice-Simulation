var Die1 = "Die 1";
var Die2 = "Die 2";
let arr1=[];
let arr2=[];
let arr3=[]
let total=[];
let total1=[];
let roller=document.getElementById("roller")

let human= document.getElementById("human");
let computer= document.getElementById("computer");
let  red= document.getElementById("red");
let yellow= document.getElementById("yellow");
let blue= document.getElementById("blue");
let green= document.getElementById("green");

// let red = document.querySelector('input[name="red"]');
// let blue = document.querySelector('input[name="yellow"]');
// let yellow = document.querySelector('input[name="blue"]');
// let grren = document.querySelector('input[name="green"]');




function colorSelect3(){
    arr3.push("Green has been selected" + " ")
     document.getElementById("colorselected").innerHTML= arr3;
     green.style.border= "7px solid black";
     console.log("nice");
}

function colorSelect1(){
    arr3.push("Yellow has been selected " + " ")
    document.getElementById("colorselected").innerHTML= arr3;
   yellow.style.border= "7px solid black";
    console.log("nice");
}

function colorSelect(){
    arr3.push("Red has been selected" + " ")
    document.getElementById("colorselected").innerHTML= arr3;
      red.style.border= "7px solid black";
     console.log("nice");
}

function colorSelect2(){
    arr3.push("Blue has been selected" + " ")
    document.getElementById("colorselected").innerHTML= arr3;
     blue.style.border= "7px solid black";
    console.log("nice");
}


// DICE GAME



function MainFunction(){
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "./img/" +
        "dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src", "./img/" +
        "dice" + randomNumber2 + ".png");
};

function MainPlayerArr(){
    arr1.push(randomNumber1, randomNumber2);
//    document.getElementById("feed").innerHTML= arr1;
//    console.log(arr1)

    total.push(parseFloat(randomNumber1) + parseFloat(randomNumber2));
//    document.getElementById("feed3").innerHTML= total;
};

function ComputerArr(){
    arr2.push(randomNumber1, randomNumber2);
//    document.getElementById("feed2").innerHTML= arr1;
//    console.log(arr1)

    total1.push(parseFloat(randomNumber1) + parseFloat(randomNumber2));
//    document.getElementById("feed3").innerHTML= total;


};

//DICE ROLLING FUNCTION

function rollTheDice() {

    let ComputerPly = () => {
         setTimeout (function (){
                MainFunction();
                let rollSum = arr1.length + arr2.length
                
                if(rollSum>=8){
                    return  alert(`GAME OVER`),
                            // alert(`The Winner of this game is the player with the highest score: ${Math.max(sumPly, sumComp)}`),
                          roller.style.disabled = true;
                }
                    
                  else if (randomNumber1  < 6 && randomNumber2 < 6 && arr2.length <=2 && rollSum <= 4) {
                    document.querySelector("h1").innerHTML = "Player1!";
                    // PlayerMe()
                    
                                
                }
                  else if (randomNumber1  < 6 && randomNumber2 < 6 && rollSum >= 2) {
                    ComputerArr()
                        document.querySelector("h1").innerHTML = "Player1!";
                        let sumComp = arr2.reduce((a, b) => {
                            return a + b;
                        }, 0)
                        return sumComp, document.getElementById("feed2").innerHTML= `Player2(Computer) scores- ${sumComp}`,  console.log(sumComp);
                                
                }

                   else if(randomNumber1 == 6 || randomNumber2 == 6){
                        ComputerArr()
                            document.querySelector("h1").innerHTML = "Player1!";
                            let sumComp = arr2.reduce((a, b) => {
                                return a + b;
                            }, 0)
                            return sumComp, document.getElementById("feed2").innerHTML= `Player2(Computer) scores- ${sumComp}`,  console.log(sumComp);
                            
                }
                   else if (randomNumber1 == 6 && randomNumber2 == 6){
                        ComputerArr()
                            
                            let sumComp = arr2.reduce((a, b) => {
                                return a + b;
                            }, 0)
                            return sumComp, document.getElementById("feed2").innerHTML= `Player2(Computer) scores- ${sumComp}`, 
                                document.querySelector("h1").innerHTML = "Nice, Roll the Dice again!", ComputerPly(), console.log(sumComp);
                        }
                        
                    else {
                      return  console.log("Player needs a  6");
                }

       }, 2500);
   
    }; 

   

        function PlayerMe(){
            MainFunction();
            let rollSum = arr1.length + arr2.length
                if(rollSum>=8){
                    return  alert(`GAME OVER`),
                            //  alert(`The Winner of this gameis the player with the highest score: ${Math.max(sumPly, sumComp)}`),
                             roller.style.disabled = true;
                }

                 else if (randomNumber1  < 6 && randomNumber2 < 6 && arr1.length<=2 &&  rollSum <= 4) {
                    document.querySelector("h1").innerHTML = "Player2!";
                    ComputerPly();
                                
                }
                 else if (randomNumber1  < 6 && randomNumber2 < 6 && rollSum >= 2) {
                    MainPlayerArr()
                        document.querySelector("h1").innerHTML = "Player2!";
                        let sumPly = arr1.reduce((a, b) => {
                            return a + b;
                        }, 0)
                        return sumPly, document.getElementById("feed3").innerHTML= `Player1 scores- ${sumPly}`, ComputerPly(), console.log(sumPly);         
                                
                }

                  else if(randomNumber1 == 6 || randomNumber2 == 6){
                    MainPlayerArr()
                        document.querySelector("h1").innerHTML = "Player2!";
                        let sumPly = arr1.reduce((a, b) => {
                            return a + b;
                        }, 0)
                        return sumPly, document.getElementById("feed3").innerHTML= `Player1 scores- ${sumPly}`, ComputerPly(), console.log(sumPly);
                        
                    }
                  else if (randomNumber1 == 6 && randomNumber2 == 6){   
                    MainPlayerArr()
                        document.querySelector("h1").innerHTML = "Nice, Roll the Dice again!";
                        let sumPly = arr1.reduce((a, b) => {
                            return a + b;
                        }, 0)
                        return sumPly, document.getElementById("feed3").innerHTML= `PLayer1 scores- ${sumPly}`, alert(sumPly);     
               }          
                    else {
                   return alert("Player needs a  6"), ComputerPly();
                }
                
                        

       
        };
        PlayerMe();            
       
       
    

       
    // }, 3000);

};

// setTimeout(rollTheDice,3000);



