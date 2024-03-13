const bottone = document.getElementById("button");
const hideElement = document.getElementById("hide");

bottone.addEventListener('click', function() {
    console.log("Il bottone è stato cliccato, ottimo!"); // Visualizza un messaggio di log nella console del browser
    hide.classList.remove("d-none");
});