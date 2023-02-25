

/*----------- PRISE DE CONTACT -----------*/

const val = document.getElementById('insTel');
var nbr = document.getElementById('nbrTel');
var sorry = document.getElementById('sorry');
const rep = document.getElementById('reponse');
  let i = "";
let n = 3;
  const span = document.createElement("span");

val.addEventListener('click',function moins(){

n--;
  nbr.textContent = n ;
  if(n === 0){
    n = 1;

    sorry.innerHTML = "Desolé, plus de disponibilité !";
rep.parentNode.replaceChild(sorry, rep);
   
  }
})

