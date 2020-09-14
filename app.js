const diceApp = {};

diceApp.randomDiceNumber = (diceSides) => {
    return Math.ceil(Math.random() * diceSides);
}

diceApp.showDice = (chosenDice) => {
    $('#diceResult').html(`<div>${chosenDice}</div>`);
}

diceApp.showRoll = (chosenDice, diceId) => {
    const diceRolled = $('<p>').html(`Rolling 1d${diceId}`);
    const numberResult = $('<p>').html(`${chosenDice}`);

    $('#rollHistory').append(diceRolled, numberResult);
}

diceApp.showMainScreen = (chosenDice, diceId) => {
    diceApp.showDice(chosenDice);
    diceApp.showRoll(chosenDice, diceId);
}

diceApp.resetButton = () => {
    $('button').on('click', function(){
        $('#rollHistory').empty();
    })
}

// Initializing the Application
diceApp.init = function () {
    $('li div').on('click', function() {
        const diceId = $(this).attr('id');
        const chosenDice = diceApp.randomDiceNumber(diceId);
        diceApp.showMainScreen(chosenDice, diceId);
    });

    diceApp.resetButton();
}



// Document Ready Function
$(function() {
    diceApp.init();
})