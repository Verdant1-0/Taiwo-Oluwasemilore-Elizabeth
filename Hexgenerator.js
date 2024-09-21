function getRandomHexColor() {
    let hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    return hex.length=== 7 ? hex : hex + `0`;
}

function chageColor() {
    const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
        document.getElementById(`colorCode`).textContent = randomColor;
    
}

document.getElementById(`generateBtn`).addEventListener(`click`,chageColor);