let value=document.getElementById("unos").value;
console.log(value);
function dodaj(){
 
 let value1=document.getElementById("unos").value;
 console.log(value1)
 let value2=document.querySelector(".lista");
 value2.innerHTML+=`<div class="item">
                   <input id="unos" readonly="readonly" style="cursor:default" value="`+value1+`">
                   <button id="obrisi" onclick="obrisi(this)">Obrisi</button>
                   </div>`

document.getElementById("unos").value="";
window.localStorage.setItem("key",value1)
console.log(localStorage)

}                  

function obrisi(element){
    let brisanje=element.parentNode
    brisanje.remove()
}

