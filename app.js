const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

const convertBtn = document.getElementById("convert");
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value;
    lengthEl.textContent = `
                            ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet 
                            |
                            ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)} meters`
                            
    volumeEl.textContent = `
                            ${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | 
                            ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(2)} liters`
                            
    massEl.textContent = `
                            ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2)} pounds 
                            |
                            ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(2)} kilos`
})
