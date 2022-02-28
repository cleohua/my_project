
//漢堡
var hambtn = document.getElementsByClassName("ham_a");
for(let i = 0; i < hambtn.length; i++){
    hambtn[i].addEventListener("click", function(){
        let home = document.getElementsByClassName("navbar")[0];
        home.classList.toggle("-on");
        let burger = document.getElementsByClassName("ham_a")[0];
        burger.classList.toggle("-on");

    });

}
