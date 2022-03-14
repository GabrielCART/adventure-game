const storyVars = {
    intro:{
        text: `The ship is sinking!`,
        options:[
            [`Try to swim to shore.`, `swimShore`],
            [`Let the currents take you.`, `notSwim`]
        ],
        ending:false
    },
    swimShore:{
        text: `You swim up to a beach, surrounded by rocky cliffs. You think you can scale it, but the rocks are sharp.`,
        options:[
            [`Climb the cliffs.`, `cliffClimb`],
            [`Search for another way off the beach.`, `moveAroundCliffs`]
        ],
        ending:false
    },
    notSwim:{
        text: `The currents take you around the island to another area off the coast. You think you can see the bright orange of life jackets littering the sand.`,
        options:[
            [`Try to swim to shore now`, `swimShoreAround`],
            [`Let the currents take you.`, `drown`]
        ],
        ending:false
    },
    drown:{
        text: `You give in to the overwhelming force of the ocean. As the waves crash over you, you come to terms with your end. Salty seawater fills your lungs, the pain becoming almost unbearable.`,
        options:false,
        ending:true
    }
}
function buttonClick(idInput){ //function to handle buttons
    var currentStoryBlock = storyVars[idInput] //sets what part of the story the user is on
    document.getElementById(`outputBox`).innerHTML = currentStoryBlock.text //changes the output box to display the text of the current part of the story
    document.getElementById(`outputBox`).style.display = `block` //shows the output box to the user if it isn't visible already
    var gameButtons = document.getElementById(`gameButtons`) //Retrieves content of gameButtons form
    if (currentStoryBlock.ending == false){ //checks if current story block is an ending
        var addedButtons = ``
        currentStoryBlock.options.forEach((elements, index) => {
            addedButtons += `<input type="button" class="gameButton" onclick="buttonClick(this.id)" value="${currentStoryBlock.options[index][0]}" id="${currentStoryBlock.options[index][1]}"></input>`})
        gameButtons.innerHTML = addedButtons
    }
    else {
        gameButtons.innerHTML = `<button class="gameButton" onclick="buttonClick(this.id)" id="intro" >(Re)Start Your Adventure!</button>`
    }
}