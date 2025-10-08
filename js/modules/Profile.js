document.addEventListener('DOMContentLoaded', () => {
const user = JSON.parse(localStorage.getItem('user'));
if (!user) { window.location.href = 'connexion.php'; return; }


document.getElementById('nom').textContent = user.nom || '';
document.getElementById('prenom').textContent = user.prenom || '';
document.getElementById('pseudo').textContent = user.pseudo || '';
document.getElementById('email').textContent = user.email || '';
document.getElementById('chauffeur').textContent = user.role === 'chauffeur' ? 'Chauffeur' : 'Passager';
document.getElementById('welcomeMessage').textContent = `Bienvenue ${user.prenom || user.pseudo}`;


document.getElementById('logoutBtn').addEventListener('click', (e) => {
e.preventDefault();
localStorage.removeItem('user');
window.location.href = 'connexion.php';
    });
});