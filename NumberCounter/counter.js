let count=0;

const value = document.querySelector("#value");

const btns= document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click",function (event) {
       const styles = event.currentTarget.classList;
        if (styles.contains("decrease")){
            count --;
        }
        else if (styles.contains("increase")){
            count ++;
        }
        else {
            count=0;
        }
        if(count > 0){
            value.style.color="limegreen";
        }
        if(count < 0){
            value.style.color="rgb(117, 6, 6)";
        }
        if(count===0){
            value.style.color="black"
        }
        value.textContent=count;
    });
});