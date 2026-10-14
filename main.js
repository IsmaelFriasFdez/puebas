const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    document.querySelector('h1').textContent = 'DOM modificado';
});