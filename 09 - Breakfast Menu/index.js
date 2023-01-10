const dinnerFoods = ['🍝','🍔','🌮']
document.getElementById('menu').innerHTML = dinnerFoods.map(food => `<div class="food">${food}</div>`).join('')