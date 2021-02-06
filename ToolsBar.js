import ctx from './Canvas'

let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let blue = document.querySelector('.blue')
let green = document.querySelector('.green')
let black = document.querySelector('.black')
let colorList = [red, yellow, blue, green, black]

const colorCode = {
    red: '#FF0000',
    yellow: '#FFFF00',
    blue: '#0000FF',
    green: '#00FF00',
    black: '#000000'
}

colorList.forEach(item => {
    item.addEventListener('click', () => {
        ctx.strokeStyle = colorCode[item.className]
    })
})
