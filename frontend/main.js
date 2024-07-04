const botonSaludo = document.getElementById('botonSaludo')

botonSaludo.addEventListener('click', () => {
    fetch('http://localhost:8000/saludo')
        .then(response => response.json())
        .then(data => {
            document.getElementById('divSaludo').innerHTML = `Este es tu saludo: ${data.mensaje}`
        })
        .catch(e => console.log(e))
})