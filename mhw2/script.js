// Array contenente le anteprime
const previewImages = [
    { 
        title: "FAST AND FURIOUS",
        description: "Per indagare su una serie di furti, il poliziotto Brian O'Connor diventa un infiltrato sotto copertura nel mondo delle corse clandestine di Los Angeles. Mentre cerca di guadagnarsi la fiducia del capo, l'uomo rischia di essere smascherato.",
        image: "images/n1.png"
    },
    { 
        title: "NEED FOR SPEED",
        description: "Tobey Marshall, pilota automobilistico impegnato in corse clandestine, esce di prigione con una sola missione: vendicarsi di un tradimento subito da un rivale. Per farlo, l'uomo deve sfuggire alla polizia e ai cacciatori di taglie.",
        image: "images/n2.png"
    },
    { 
        title: "NEVER BACK DOWN 3",
        description: "Case Walker, ex campione di arti marziali, pianifica il proprio ritorno sulla scena professionistica e inizia a notare le grandi differenze tra la vecchia scuola cui appartiene e le capacità dei nuovi atleti.",
        image: "images/n3.png"
    },
    { 
        title: "FIGHT CLUB",
        description: "Tyler Durden ed un nuovo amico sfogano la loro aggressività creando un club di combattimento, che assume rapidamente connotati rivoluzionari, fino a esporre la vera identità di Tyler Durden.",
        image: "images/n4.png"
    },
    { 
        title: "THE SOCIAL NETWORK",
        description: "Pochi anni dopo aver creato Facebook nella sua stanza del dormitorio di Harvard, Mark Zuckerberg è diventato un miliardario, ma il suo grande successo sta portando a problemi sia personali sia legali.",
        image: "images/n5.png"
    },
    // Aggiungi altre anteprime secondo necessità
];

// Genera un numero casuale per selezionare un'anteprima dall'array delle anteprime
const randomIndex = Math.floor(Math.random() * previewImages.length);
const randomPreview = previewImages[randomIndex];

// Ottieni l'elemento dell'anteprima casuale e imposta l'immagine e le informazioni
const heroPreview = document.querySelector('.hero-preview');
const previewImg = heroPreview.querySelector('img');
const previewTitle = heroPreview.querySelector('h2');
const previewDescription = heroPreview.querySelector('p');

previewImg.src = randomPreview.image;
previewImg.alt = randomPreview.title;
previewTitle.textContent = randomPreview.title;
previewDescription.textContent = randomPreview.description;

// Seleziona tutte le anteprime
const previewItems = document.querySelectorAll('.preview-item');
let sliderInterval; // Dichiarazione della variabile per l'intervallo dello slider

// Aggiungi un listener per ciascuna anteprima
previewItems.forEach(item => {
    const overlay = item.querySelector('.overlay');
    const overlayTitle = overlay.querySelector('.overlay-title');
    const overlayDescription = overlay.querySelector('.overlay-description');

    item.addEventListener('mouseover', () => {
        clearInterval(sliderInterval); // Ferma lo slider quando il mouse entra nell'anteprima
        overlay.style.visibility = 'visible'; // Mostra l'overlay quando passa sopra con il mouse
        overlayTitle.textContent = "Titolo Anteprima"; // Aggiungi il titolo dell'anteprima
        overlayDescription.textContent = "Descrizione Anteprima"; // Aggiungi la descrizione dell'anteprima
    });

    item.addEventListener('mouseout', () => {
        sliderInterval = startSlider(); // Riprendi lo slider quando il mouse esce dall'anteprima
        overlay.style.visibility = 'hidden'; // Nascondi l'overlay quando esce con il mouse
    });

    // Aggiungi un listener per riprodurre il trailer quando si fa clic sull'anteprima
    item.addEventListener('click', () => {
        // Simulazione della riproduzione del trailer
        alert("Trailer in riproduzione...");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Avvia lo slider all'inizio
    sliderInterval = startSlider();
});

// Funzione per avviare lo slider
function startSlider() {
    // Imposta un intervallo per scorrere automaticamente le anteprime ogni tot millisecondi
    return setInterval(() => {
        // Per ogni anteprima, sposta la prima anteprima alla fine con una transizione fluida
        const previews = document.querySelectorAll('.content-preview');
        previews.forEach(preview => {
            const firstItem = preview.querySelector('.preview-item');
            const lastItem = preview.lastElementChild;
            preview.insertBefore(lastItem, firstItem);
            preview.style.transition = 'transform 0.5s ease-in-out';
            preview.style.transform = 'translateX(-20%)'; // Muove la prima anteprima alla fine
            setTimeout(() => {
                preview.style.transition = 'none';
                preview.style.transform = 'translateX(0)';
            }, 500); // Imposta la transizione a "none" dopo 500 ms per un effetto fluido
        });
    }, 3000); // Cambia anteprima ogni 8 secondi (puoi modificare questo valore)
}
