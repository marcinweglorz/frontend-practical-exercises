const cars = "Audi, Mercedes, BMW, Nissan, Dodge"

const carsArray = cars.split(', ')

carsArray.length > 3 ? console.log('JEST OK!') : console.log('Nie jest ok!')

if (carsArray.includes('Audi')) {
    carsArray.push('Ford')
} else {
    carsArray.pop()
}

console.log(carsArray)

