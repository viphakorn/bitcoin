const menuBtn = document.querySelectorAll("#menu-btn")
const menu = document.querySelector("nav")
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", function() {
     if (menu.style.right === "-100%") {
         menu.style.right = "0";
     } else {
         menu.style.right = "-100%";
     }
   });
 }
 window.addEventListener('mouseup', function(event){
    if(event.target != menu && event.target.parentNode != menu){
        menu.style.right = '-100%';
    }
 });

const accordion = document.getElementsByClassName("q-and-a");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    accordion[i].classList.toggle("active");
  });
}

let BTC = document.getElementById("btc");
let USD = document.getElementById("usd");
let countBtn = document.getElementById("count-btn");

countBtn.addEventListener("click", () => {
  number = Number(BTC.value);
  output = number * 1754;

  let formatted = new Intl.NumberFormat().format(output);
  USD.value = formatted;
});
