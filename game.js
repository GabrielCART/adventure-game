//This file contains the code the game needs to run.

function playSound(sound){ //audio playback function
    document.getElementById(sound).play(); //plays sound based on argument from function call
}

function stopSound(sound){ //audio pause playback function
    document.getElementById(sound).pause(); //pauses sound based on argument from function call
}

function gameStart(){//function for the start of the game
    document.getElementById(`outputBox`).style.height = `600px` //shows the output box
    document.getElementById(`startText`).style.height = `0` //hides the starting text box
}

function buttonClick(idInput){ //function to handle buttons
    var currentStoryBlock = storyBlocks[idInput] //sets the active story block
    document.getElementById(`outputBox`).innerHTML = currentStoryBlock.text //updates output text
    var gameButtons = document.getElementById(`gameButtons`) //accesses the game buttons
    if (currentStoryBlock.options != false){ //checks that the current story block is not an ending
        var addedButtons = `` //removes all buttons
        currentStoryBlock.options.forEach((elements, index) => {
            addedButtons += `<input type="button" class="gameButton" onclick="buttonClick(this.id); playSound('click');" value="${currentStoryBlock.options[index][0]}" id="${currentStoryBlock.options[index][1]}"></input>`}) //creates new buttons for each option
        gameButtons.innerHTML = addedButtons //adds new buttons to the form
    }
    else { //if the current story block is an ending
        gameButtons.innerHTML = `<button class="gameButton" onclick="buttonClick(this.id); playSound('start');" id="intro" >(Re)Start Your Adventure!</button>` //create a restart button
    }
}