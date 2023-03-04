// sophie.bluel@test.tld
// S0phie 

// Login, Submit, email, password
const login = document.querySelector('.login')
const submit = document.querySelector('.submit');
const email = document.querySelector('.email');
const password = document.querySelector('.password');


// Récupérer le formulaire au click du submit
submit.addEventListener('click', function(){
    
    // Enregistrer les valeurs dans data
    const infos = {
        "email": email.value,
        "password": password.value
    }

    // Envoyer ces valeurs
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(infos)
    })
    .then(response => {
        if (response.status === 200)
        {
            return response.json()
        }
        else 
        {
            if (!document.querySelector('.errorText'))
            {
                // Créer le message d'erreur
                errorText = document.createElement('p');
                
                // Afficher l'erreur en bas du formulaire
                errorText.innerText = "Erreur dans l’identifiant ou le mot de passe";

                // Lui ajouter une classe
                errorText.classList.add('errorText');

                // L'ajouter à la section login
                login.appendChild(errorText);
            }
        }
    })
    .then(data => {
        // Avertir que nous sommes connectés
        sessionStorage.setItem('connected', 'true');

        // Enregistrer le token dans le localStorage
        sessionStorage.setItem('token', data.token);
        
        // Redirect to index
        window.location.href = '../index.html';
    })
    .catch(error => console.error(error));
});
