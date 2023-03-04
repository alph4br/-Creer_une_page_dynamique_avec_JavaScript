document.addEventListener('click', (event) => {
    // Appuyer sur fermer
    if (event.target.classList.contains('fa-xmark')) {
        closeModales();
    }
});


function closeModales()
{    
    // Supprimer le background
    document.querySelector('.background').remove()

    // Close modaleGalery
    document.querySelector('.modaleGalery').remove()
    
    // Close modaleAddPhoto si elle existe
    if (document.querySelector('.modaleAddPhoto'))
    {
        document.querySelector('.modaleAddPhoto').remove();
    }
}