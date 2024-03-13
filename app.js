document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container'); 
    const showButton = document.getElementById('showButton');
    
    
    // Creo 100 div che vanno a sostituire il markup HTML.
    for (let i = 1; i <= 100; i++) {
        const div = document.createElement('div');
        div.classList.add('box', 'hidden'); // Aggiungo, oltre alla classe `box`, che ha le sue proprietà CSS, la classe 'hidden' per nascondere i div (utile successiivamente).
        div.textContent = i;
        container.appendChild(div);
    }
    
    
    // Aggiungo un listener al bottone.
    showButton.addEventListener('click', function() {
        
        // Seleziono tutti i div creati.
        const boxes = document.querySelectorAll('.box');
        
        // Rimuovo la classe 'hidden' per mostrare i div.
        boxes.forEach(box => {
            box.classList.remove('hidden');
        });
        
        // Nascondo il bottone quando viene cliccato.
        showButton.style.display = 'none';
    });
});
