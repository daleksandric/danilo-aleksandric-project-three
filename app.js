const diceApp = {};

// Initializing the Application
diceApp.init = function () {
    diceApp.diceClickHandler();
    diceApp.resetButton();
}

// This function gets the ID of each clicked button (dice), saves it, then passes it as a parameter to the function which randomizes a number ( from 1 to diceID which indicates the number of sides). This is stored in another variable, that is then passed along with the diceID to a function displaying the end result.
diceApp.diceClickHandler = () => {
    $('li button').on('click', function() {
        const diceId = $(this).attr('id');
        const chosenDice = diceApp.randomDiceNumber(diceId);
        diceApp.showMainScreen(chosenDice, diceId);
    });
}

// This is the function that randomizes a number from 1, to diceID. Which is, 1 to 4, or 1 to 6, etc. Based on the dice.
diceApp.randomDiceNumber = (diceId) => {
    return Math.ceil(Math.random() * diceId);
}

// This function takes in the ID of each dice (how many sides it has) and the randomized value of the chosen dice (chosenDice). It then adds elements to the HTML which display the result to the user.
// It also adds some animations in the form of a 'fadeIn' class.
diceApp.showDice = (chosenDice, diceId) => {
    $('#diceResult').html(`
    <div>
        <img src="./assets/${diceId}sided-md.png" alt="result of ${diceId} sided die roll">
        <p>${chosenDice}</p>
    </div>
    `);

     $('#diceResult').addClass('fadeIn');
     setTimeout(() => {
         $('#diceResult').removeClass('fadeIn');
    }, 1500);
}

// This function displays the chosen dice and the result, recording it in a table so the viewer has access to previously rolled results.
diceApp.showRoll = (chosenDice, diceId) => {
    const diceRolled = $('<p>').html(`Rolling 1d${diceId}:`);
    const numberResult = $('<p>').html(`${chosenDice}`);

    $('#rollHistory').append(diceRolled, numberResult);
}

// This is the main function which calls the ShowDice and ShowRoll functions, which is then passed into the diceClickHandler that triggers it on an "On Click" event.
diceApp.showMainScreen = (chosenDice, diceId) => {
    diceApp.showDice(chosenDice, diceId);
    diceApp.showRoll(chosenDice, diceId);
}

// This is a simple function for the button which empties the table of any HTML elements, effectively "resetting" it in the absence of any local storage.
diceApp.resetButton = () => {
    $('.resetButton').on('click', function(){
        $('#rollHistory').empty();
    })
}


// Document Ready Function
$(function() {
    diceApp.init();
})