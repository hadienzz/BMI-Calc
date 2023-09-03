const bmiText = document.getElementById('bmi')
const descText = document.getElementById('desc')
const form = document.querySelector('form')
const heightInput = document.getElementById('inputHeight')
const weightInput = document.getElementById('inputWeight')
const submit = document.getElementById('submit')
const reset = document.querySelector('#reset')



submit.addEventListener('click', (e) => {
    e.preventDefault()

    const weight = Number(weightInput.value)
    const height = Number(heightInput.value / 100)
    if(weight <= 0 || height <= 0) {
        alert('Please enter a valid weight and height')
    }
    const bmi = (weight / Math.pow(height, 2)).toFixed(2)
    if(bmi <= 18.5 ) {
        descText.textContent = 'UnderWeight'
        bmiText.style.color = 'orange'
    } else if(bmi <= 25) {
        descText.textContent = 'Normal'
        bmiText.style.color = 'green'
    } else if(bmi <= 30) {
        descText.textContent = 'Overweight'
        bmiText.style.color = 'lightcoral'
    } else {
        descText.textContent = 'Obese'
        bmiText.style.color = 'crimson'
    }
    bmiText.textContent = bmi
})

reset.addEventListener('click', (e) => {
    e.preventDefault()
    heightInput.value = weightInput.value = ''
    bmiText.textContent = 0
    bmiText.style.color = 'black'
    descText.textContent = 'N/A'
})