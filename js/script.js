// 1. Chiedere all'utente di inserire un numero tra 10 e 100;
// 2. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// 3. Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

var genBtn = document.getElementById("gen-btn");

genBtn.addEventListener("click" ,
    function() {
        // 1.
        var chooseNum = document.getElementById("num").value;
        if (chooseNum < 10 || chooseNum > 100) {
            alert("Inserisci un numero valido");
        } else {
            
            // 2.
            for (var i = 1; i <= chooseNum; i++) {
                document.getElementById("wrapper").innerHTML += `<div class="square"> ${i} </div>`;
            }

            // 3.
            document.getElementById("wrapper").addEventListener("click",
                function (event) {
                    event.target.classList.toggle("clicked");
                    document.getElementById("alert").innerHTML += event.target.innerHTML;
                }
            );
        }

        
    }
);
// 1.
