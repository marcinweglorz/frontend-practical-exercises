const numbers = [1, 5, 13, 26, 48]

const newArray = numbers.map(number => number * 5)
console.log(newArray)


//------------------------

for (const number of newArray) {
    if (number % 2 === 0) {
        console.log(`Liczba parzysta: ${number}`)
    } else
        console.log(`Liczba nieparzysta: ${number}`)
}


//-----------------------

for (let i = 0; i < newArray.length; i++) {

    if (newArray[i] % 2 === 0) {
        console.log(`Liczba parzysta: ${newArray[i]}`)
    } else {
        console.log(`Liczba nieparzysta: ${newArray[i]}`)
    }
}