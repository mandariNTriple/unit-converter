const givenValue = document.getElementById("given-value")
const convertBtn = document.getElementById("btn-convert")
const lengthValue = document.getElementById("length-value")
const volumeValue = document.getElementById("volume-value")
const massValue = document.getElementById("mass-value")
let value = 0
convertBtn.addEventListener("click", function () {
    value = givenValue.value
    converter(value)

})

function converter(value) {
    let length = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`
    let volume = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`
    let mass = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`
    lengthValue.innerHTML = length
    volumeValue.innerHTML = volume
    massValue.innerHTML = mass
}