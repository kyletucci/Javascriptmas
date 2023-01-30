function getReadyTables() {
    const readyTables = []
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random()*20) + 1)
    }
    return displayTables(readyTables)
}

function displayTables(tables) {
    document.getElementById('tables').innerHTML = tables.map(table => `<div class="table">${table}</div>`).join('')
}

getReadyTables()
