// Variables para el modal de Login
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
// Abrir el modal de Login
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}
// Cerrar el modal de Login
closeLoginModal.onclick = function() {
    loginModal.style.display = "none";
}
// Cerrar el modal de Login al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}
// Variables para el modal de Informes
const informesBtn = document.getElementById('informesBtn');
const informesModal = document.getElementById('informesModal');
const closeInformesModal = document.getElementById('closeInformesModal');
// Abrir el modal de Informes
informesBtn.onclick = function() {
    informesModal.style.display = "block";
}
// Cerrar el modal de Informes
closeInformesModal.onclick = function() {
    informesModal.style.display = "none";
}
// Cerrar el modal de Informes al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == informesModal) {
        informesModal.style.display = "none";
    }
}