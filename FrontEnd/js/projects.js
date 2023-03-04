// Récupérer la div gallery 
const gallery = document.querySelector('.gallery');

// Récupérer les catégories
const allCategorie = document.querySelector('.all');
const objectsCategorie = document.querySelector('.objects');
const appartementsCategorie = document.querySelector('.appartements');
const hotelsRestaurantsCategorie = document.querySelector('.hotelsRestaurants');

// Récupérer tous les projects
fetch("http:/localhost:5678/api/works")
    .then(res => res.json())
    .then(projects => {

    // Récupérer tous les projects
    for (const project of projects) {
        // Créer une figure
        const figure = document.createElement('figure');
        figure.setAttribute('id', project.id);

        // Créer l'image du projet
        const image = document.createElement('img');
        image.src = project.imageUrl;
        image.alt = project.title;

        // Créer le figcaption pour le titre
        const figcaption = document.createElement('figcaption');
        figcaption.innerText = project.title;

        // Les ajouter à la figure
        figure.appendChild(image);
        figure.appendChild(figcaption);

        // Les ajouter à la gallery
        gallery.appendChild(figure)
    }
})
.catch(error => console.error(error));

// Cliquer sur la catégorie Tous
allCategorie.addEventListener('click', function(){
    fetch("http:/localhost:5678/api/works")
    .then(res => res.json())
    .then(projects => {
        
        allCategorie.classList.add('active');

        // Si c'est activé
        if (allCategorie.classList.contains('active'))
        {
            // Supprimer la gallery actuelle 
            gallery.innerText = "";
            
            // Désactiver toutes les autres catégories
            objectsCategorie.classList.remove('active');
            appartementsCategorie.classList.remove('active');
            hotelsRestaurantsCategorie.classList.remove('active');
        }

        for (const project of projects) {
            // Créer une figure
            const figure = document.createElement('figure');
            figure.setAttribute('id', project.id);

            // Créer l'image du projet
            const image = document.createElement('img');
            image.src = project.imageUrl;
            image.alt = project.title;

            // Créer le figcaption pour le titre
            const figcaption = document.createElement('figcaption');
            figcaption.innerText = project.title;

            // Les ajouter à la figure
            figure.appendChild(image);
            figure.appendChild(figcaption);

            // Les ajouter à la gallery
            gallery.appendChild(figure)
        }
    })
    .catch(error => console.error(error));
})

// Cliquer sur la catégorie Objects
objectsCategorie.addEventListener('click', function(){
    fetch("http:/localhost:5678/api/works")
    .then(res => res.json())
    .then(projects => {
        objectsCategorie.classList.add('active');

        // Si c'est activé
        if (objectsCategorie.classList.contains('active'))
        {
            // Supprimer la gallery actuelle
            gallery.innerText = "";

            // Désactiver toutes les autres catégories
            allCategorie.classList.remove('active');
            appartementsCategorie.classList.remove('active');
            hotelsRestaurantsCategorie.classList.remove('active');
        }

        for (const project of projects.filter(project => project.categoryId === 1))
        {
            // Créer une figure
            const figure = document.createElement('figure');
            figure.setAttribute('id', project.id);

            // Créer l'image du projet
            const image = document.createElement('img');
            image.src = project.imageUrl;
            image.alt = project.title;

            // Créer le figcaption pour le titre
            const figcaption = document.createElement('figcaption');
            figcaption.innerText = project.title;

            // Les ajouter à la figure
            figure.appendChild(image);
            figure.appendChild(figcaption);

            // Les ajouter à la gallery
            gallery.appendChild(figure)
        }
    })
    .catch(error => console.error(error));
})

// Cliquer sur la catégorie Appartements
appartementsCategorie.addEventListener('click', function(){
    fetch("http:/localhost:5678/api/works")
    .then(res => res.json())
    .then(projects => {
        appartementsCategorie.classList.add('active');

        // Si c'est activé
        if (appartementsCategorie.classList.contains('active'))
        {
            // Supprimer la gallery actuelle
            gallery.innerText = "";

            // Désactiver toutes les autres catégories
            allCategorie.classList.remove('active');
            objectsCategorie.classList.remove('active');
            hotelsRestaurantsCategorie.classList.remove('active');
        }

        for (const project of projects.filter(project => project.categoryId === 2))
        {
            // Créer une figure
            const figure = document.createElement('figure');
            figure.setAttribute('id', project.id);

            // Créer l'image du projet
            const image = document.createElement('img');
            image.src = project.imageUrl;
            image.alt = project.title;

            // Créer le figcaption pour le titre
            const figcaption = document.createElement('figcaption');
            figcaption.innerText = project.title;

            // Les ajouter à la figure
            figure.appendChild(image);
            figure.appendChild(figcaption);

            // Les ajouter à la gallery
            gallery.appendChild(figure)
        }
    })  
    .catch(error => console.error(error));
})

// Cliquer sur la catégorie Hôtels & Restaurants
hotelsRestaurantsCategorie.addEventListener('click', function(){
    fetch("http:/localhost:5678/api/works")
    .then(res => res.json())
    .then(projects => {
        hotelsRestaurantsCategorie.classList.add('active');

        // Si c'est activé
        if (hotelsRestaurantsCategorie.classList.contains('active'))
        {
            // Supprimer la gallery actuelle
            gallery.innerText = "";

            // Désactiver toutes les autres catégories
            allCategorie.classList.remove('active');
            objectsCategorie.classList.remove('active');
            appartementsCategorie.classList.remove('active');
        }

        for (const project of projects.filter(project => project.categoryId === 3))
        {
            // Créer une figure
            const figure = document.createElement('figure');
            figure.setAttribute('id', project.id);

            // Créer l'image du projet
            const image = document.createElement('img');
            image.src = project.imageUrl;
            image.alt = project.title;

            // Créer le figcaption pour le titre
            const figcaption = document.createElement('figcaption');
            figcaption.innerText = project.title;

            // Les ajouter à la figure
            figure.appendChild(image);
            figure.appendChild(figcaption);

            // Les ajouter à la gallery
            gallery.appendChild(figure)
        }
    }) 
    .catch(error => console.error(error));
})
