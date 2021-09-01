// 1. Chiedere all'utente di inserire un numero tra 10 e 100;
// 2. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// 3. Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

// 1.
var chooseNum = parseInt(prompt("Scegli un numero da 10 a 100"));

while (chooseNum < 10 || chooseNum > 100) {
    chooseNum = prompt("Scegli un numero da 10 a 100");
}

// 2.
for (var i = 1; i <= chooseNum; i++) {
    document.getElementById("wrapper").innerHTML += `<div class="square"> ${i} </div>`;
}

// 3.
document.getElementById("wrapper").addEventListener("click",
    function(event) {
        event.target.classList.toggle("clicked");
        alert(event.target.innerHTML);
    }  
);