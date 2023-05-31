// dont forget about the username 
let resultButton = document.querySelector(".submitBtn");
let questions = document.querySelector(".questions");
let startButton = document.querySelector(".login");

resultButton.onclick=(function() {
    let smartInput = document.querySelector(".smartInput").value;
    let fashionInput=document.querySelector(".fashionInput").value;
  
    //write smart if-else conditional statement below
   
  if (smartInput <= 5 && fashionInput === "Yes" || fashionInput === "yes") {
    document.querySelector (".result").innerHTML = "Below average or just average"
    
  } 
  else if (smartInput <= 5 && fashionInput === "No" || fashionInput === "no") {
    document.querySelector (".result").innerHTML = "above average or just genius"

   } 
  else if (smartInput > 5 && fashionInput === "No" || fashionInput === "no") {
    document.querySelector (".result").innerHTML = "above average or just genius" 

   } 
  else if (smartInput > 5 && fashionInput === "Yes" || fashionInput === "yes") {
    document.querySelector (".result").innerHTML = "below average or just average"
  
  }
    
}); 


let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let quizOpening = document.querySelector(".title");
let title = document.querySelector(".option-two-screen");
// let buttons = document.querySelector(".option-two-screen");


startButton.onclick=function(){
  questions.style.display="block";
}