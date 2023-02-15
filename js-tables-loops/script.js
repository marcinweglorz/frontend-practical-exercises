const color = ['blue']


color.unshift('red')
color.push('green')

console.log(color)

for (let i = 0; i < color.length; i++) {
    console.log(`Mój ulubiony kolor to: ${color[i].toUpperCase()}`)
    console.log(`Mój ulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1).toLowerCase()}`)
}

for (const colors of color) {
    console.log(`Mój ulubiony kolor to: ${colors.toUpperCase()}`)
    console.log(`Mój ulubiony kolor to: ${colors.charAt(0).toUpperCase() + colors.slice(1).toLowerCase()}`)
}

