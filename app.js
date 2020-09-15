const diceApp = {};

// Initializing the Application
diceApp.init = function () {
    diceApp.diceClickHandler();
    diceApp.resetButton();
}

diceApp.diceClickHandler = () => {
    $('li button').on('click', function() {
        const diceId = $(this).attr('id');
        const chosenDice = diceApp.randomDiceNumber(diceId);
        diceApp.showMainScreen(chosenDice, diceId);
    });
}

diceApp.randomDiceNumber = (diceId) => {
    return Math.ceil(Math.random() * diceId);
}

diceApp.showDice = (chosenDice, diceId) => {
    $('#diceResult').html(`
    <div>
        <img src="./assets/${diceId}sided-md.png">
        <p>${chosenDice}</p>
    </div>
    `);
    
     $('#diceResult').addClass('fadeIn');
     setTimeout(() => {
         $('#diceResult').removeClass('fadeIn');
    }, 1500);
}

diceApp.showRoll = (chosenDice, diceId) => {
    const diceRolled = $('<p>').html(`Rolling 1d${diceId}:`);
    const numberResult = $('<p>').html(`${chosenDice}`);

    $('#rollHistory').append(diceRolled, numberResult);
}

diceApp.showMainScreen = (chosenDice, diceId) => {
    diceApp.showDice(chosenDice, diceId);
    diceApp.showRoll(chosenDice, diceId);
}

diceApp.resetButton = () => {
    $('.resetButton').on('click', function(){
        $('#rollHistory').empty();
    })
}


// Document Ready Function
$(function() {
    diceApp.init();
})