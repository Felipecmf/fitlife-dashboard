function calculateTMB(event) {
    
    event.preventDefault()
    const gender = document.getElementById("gender").value
    const age = parseInt(document.getElementById("age").value)
    const height = parseInt(document.getElementById("height").value)
    const weight = parseFloat(document.getElementById("weight").value)
    const resultBox = document.getElementById('result')
    const valueText = document.getElementById('tmb-value')

    if(!weight || !age || !height) {
        alert("Preencha todos os campos corretamente!")
        return
    }

    if (gender === 'male' ){
        tmb = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
    } else {
        tmb = 447.6 + 9.2 * weight + 3.1 * height  - 4.3 * age
    }

    valueText.innerText = Math.round(tmb)

    resultBox.classList.add('show')
}