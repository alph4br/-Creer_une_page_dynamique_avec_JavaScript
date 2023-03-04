// Vérifier si l'utilisateur est connecté
if (sessionStorage.getItem('connected'))
{
    // Récupérer le logout
    const logout = document.querySelector('.liLogout')

    // Se déconnecter
    logout.addEventListener('click', function()
    {
        // Supprimer les variables de la session storage
        sessionStorage.removeItem('connected');
        sessionStorage.removeItem('token');

        // Redirect
        window.location.href = "index.html"
    });
}
