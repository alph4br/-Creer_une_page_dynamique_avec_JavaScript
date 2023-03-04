document.addEventListener('click', (event) => {
    // Appuyer sur retourner
    if (event.target.classList.contains('fa-arrow-left')) {
        returnModaleGalery();
    }
});


function returnModaleGalery()
{ 
    // Close modaleAddPhoto
    document.querySelector('.modaleAddPhoto').remove();

    // Afficher modaleGalery étant en display none
    document.querySelector('.modaleGalery').style.display = "flex";
}