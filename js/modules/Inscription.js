

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('form-inscription');
if (!form) return;

form.addEventListener('submit', (e) => {
e.preventDefault();


const nom = document.getElementById('nom').value.trim();
const prenom = document.getElementById('prenom').value.trim();
const pseudo = document.getElementById('pseudo').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value;
const confirm = document.getElementById('confirm-password').value;
const chauffeur = document.getElementById('chauffeur').checked;


if (!nom || !prenom || !pseudo || !email || !password) {
alert('Veuillez remplir tous les champs.');
return;
}
if (password.length < 6) {
alert('Le mot de passe doit contenir au moins 6 caractères.');
return;
}
if (password !== confirm) {
alert('Le mot de passe incorect.');
return;
}


const utilisateur = { nom, prenom, pseudo, email, password, role: chauffeur ? 'chauffeur' : 'passager' };

localStorage.setItem('user', JSON.stringify(utilisateur));


const success = document.createElement('p');
success.className = 'success-message';
success.textContent = `Inscription réussie — bienvenue ${prenom} !`;
form.appendChild(success);


setTimeout(() => { window.location.href = 'profile.php'; }, 900);
});
});