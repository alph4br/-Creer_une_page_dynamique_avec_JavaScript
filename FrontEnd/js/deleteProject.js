// Projets supprimés
let projectsTrash = []

document.addEventListener('click', (event) => {
  // S'il appuie sur le trash
  if (event.target.classList.contains("fa-trash-can"))
  {
    // Récupérer l'image qui veut être supprimé
    const img = event.target.parentNode.parentNode.querySelectorAll('*')[0].src;
    
    // Récupérer et supprimer tous les éléments ayant cette image
    const imagesTrash = document.querySelectorAll("img[src='" + img + "']");
    for (let imageTrash of imagesTrash)
    {
      // Récupérer l'id et l'ajouter dans le tableau
      if (imageTrash.parentNode['id'])
      {
        projectsTrash.push(imageTrash.parentNode['id'])
      }
      
      // Delete
      imageTrash.parentNode.remove();
    }
  }

  if (event.target.classList.contains("save"))
  {
    console.log(sessionStorage.getItem('token'))
    // Supprimer l'id du projet actuel
    for (let idProject of projectsTrash)
    {
      fetch("http://localhost:5678/api/works/"+parseInt(idProject), {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
          }
      })
      .catch(error => console.error(error));
    }
  }
});
