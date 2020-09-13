const diceApp = {};

diceApp.randomDiceNumber = (diceSides) => {
    return Math.ceil(Math.random() * diceSides);
}

diceApp.showDice = (chosenDice) => {
    $('#diceResult').html(`<div>${chosenDice}</div>`);
}

// Initializing the Application
diceApp.init = function () {
    $('li div').on('click', function() {
        const diceId = $(this).attr('id');
        const chosenDice = diceApp.randomDiceNumber(diceId);
        diceApp.showDice(chosenDice);
    });    
}

// Document Ready Function
$(function() {
    diceApp.init();
})