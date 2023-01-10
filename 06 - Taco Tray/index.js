// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

// Gets a random number of tacos
function getRandomNumberOfTacos() {
    return new Array(Math.floor(Math.random() * 10) + 1).fill("🌮")
}

// Adds tacos to taco tray div
function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
