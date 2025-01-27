const button = document.getElementById('btn')
const colorName = document.querySelector('.color')
const title = document.querySelector('.title')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', () => {
    let color = generateHex()
    document.body.style.backgroundColor = color
    title.style.color = color
    colorName.textContent = color
})
function getRendomNumber() {
    return Math.floor(Math.random() * hex.length)
}
function generateHex() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRendomNumber()]
    }
    return hexColor
}
