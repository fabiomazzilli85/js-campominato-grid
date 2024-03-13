document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("table");
    
    for (let i = 1; i <= 100; i++) {
        const div = document.createElement("div");
        div.className = "item box padding-box";
        div.textContent = i;
        container.appendChild(div);
    }
});

// Richiamo i due elementi della pagina con id `button` e `hide`
const bottone = document.getElementById("button");
const hideElement = document.getElementById("hide");

bottone.addEventListener('click', function() {
    console.log("Il bottone è stato cliccato, ottimo!"); // Visualizza un messaggio di log nella console del browser

});
