// Si l'utilisateur est connecté alors ajouter logout
if (sessionStorage.getItem('connected'))
{
    // On récupère le bloc ul du header
    const ulHeader = document.querySelector('.ulHeader');

    // On crée un li pour le logout
    const li = document.createElement('li');
    li.innerText = "logout";
    li.classList.add('liLogout');

    // Récupérer l'avant-dernier élément de la liste
    const beforeLast = ulHeader.children[ulHeader.children.length - 1];

    // L'ajouter au ul
    ulHeader.insertBefore(li, beforeLast);

    // Supprimer le lilogin
    ulHeader.removeChild(document.querySelector('.liLogin'))

   // On crée un div
   const edit = document.createElement('div');
   edit.classList.add('edit');

   // Le button edition
   const edition = document.createElement('button');
   edition.classList.add('edition');
   edition.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> Mode édition';
   
   // Le button save
   const save = document.createElement('button');
   save.classList.add('save');
   save.innerText = "publier les changements";

   // On bouge le header 
   document.querySelector('header').style.margin = "100px 0"

   // Ajouter cela à la div edit
   edit.appendChild(edition);
   edit.appendChild(save);

   // Ajouter à la div
   document.querySelector('body').insertBefore(edit, document.querySelector('body')[0]);

   // On crée un button pour editProfil
   const editProfil = document.createElement('button');
   editProfil.classList.add('editProfil');
   editProfil.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> modifier';

   // On l'ajoute à la figure
   document.querySelector('.figureIntro').appendChild(editProfil)

   // On crée un button
   const editProjects = document.createElement('button');
   editProjects.classList.add('editProjects');
   editProjects.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> modifier';

   // On l'ajoute à la figure
   document.querySelector('.titlePortfolio').appendChild(editProjects)
}
