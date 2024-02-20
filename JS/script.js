console.log('prezzo treno')

const prezzo = document.getElementById('prezzo')

const userKm = parseInt(prompt('Quanti chilometri vuoi fare?'))

const userAge = parseInt(prompt('Quanti anni hai?'))

const fixedPrice = 0.21

let totalPrice = fixedPrice * userKm

let discountPrice = .20

let message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 

if (userAge < 18 ){
    totalPrice += - (totalPrice * discountPrice)
    message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 
    
} else if (userAge > 65) {
    discountPrice = .40
    totalPrice += - (totalPrice * discountPrice)
    message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 
}

prezzo.innerText = message
