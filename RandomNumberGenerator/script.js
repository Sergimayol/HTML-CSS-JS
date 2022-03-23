function generateRandomNumber() {
    //console.log(getRandomArbitrary(4, 6));
    //console.log(getRandomInt(4, 6));
    var minNumber = document.getElementById('min').value;
    var maxNumber = document.getElementById('max').value;
    if (minNumber == "" || minNumber == undefined) {
        minNumber = 1;
        document.getElementById('min').value = minNumber;
    }
    if (maxNumber == "" || maxNumber == undefined) {
        maxNumber = 12;
        document.getElementById('max').value = maxNumber;
    }
    //console.log(parseInt(minNumber, 10), parseInt(maxNumber, 10));
    var aux = getRandomInt(parseInt(minNumber, 10), parseInt(maxNumber, 10));
    //console.log(aux);
    document.getElementById("result").textContent = aux;
}

//Return any number between min and max
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//Return whole number between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

