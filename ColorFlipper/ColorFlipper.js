const colors =[
    "yellow","blue","rgb(21, 105, 105)","#f15025","purple"];

const btn = document.getElementById("btn");

const changeColor= document.querySelector(".changeColor");

btn.addEventListener('click',function(){
    //random number between 0-4
    const randomNumber= getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    changeColor.textContent=colors[randomNumber]
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}