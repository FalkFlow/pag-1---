const btnCarro = document.querySelector('.carrito')
const productosCarro = document.querySelector('.productos-carro')

btnCarro.addEventListener('click', () => {
    productosCarro.classList.toggle('carro-oculto')
})