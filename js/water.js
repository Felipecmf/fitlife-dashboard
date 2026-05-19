let currentWater = 0
const waterGoal = 2500

function addWater(amount){
    currentWater = currentWater + amount
    updateInterface()
}

function resetWater(){
    currentWater = 0
    updateInterface()
}

function updateInterface(){
    const bar = document.getElementById("water-bar")
    const totalText = document.getElementById("water-total")
    const percenteage = (currentWater / waterGoal) * 100

    totalText.innerText = currentWater
    bar.style.width = `${Math.min(percenteage,100)}%`
    bar.innerText = `${Math.round(percenteage)}%`

    if(currentWater >= waterGoal) {
        bar.style.backgroundColor = '#00b894'
        bar.innerText = "Meta atingida!"
   } else {
    bar.style.backgroundColor = '#0984e3'
   }
}