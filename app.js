// Richiamo i due elementi della pagina con id `button` e `hide`
const bottone = document.getElementById("button");
const hideElement = document.getElementById("hide");

// Al listener del bottone, la classe `d-none` è rimossa e il contenuto della pagina è correttamente visualizzato.
bottone.addEventListener('click', function() {
    console.log("Il bottone funziona e dovresti visualizzare una tabella."); // Uso il console.log per capire se il listener funziona a dovere.
    hide.classList.remove("d-none");
});

