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
var gameButtons = document.getElementById(`gameButtons`)
function buttonClick(idInput){
    var currentStoryBlock = storyVars[idInput]
    document.getElementById(`outputBox`).innerHTML = currentStoryBlock.text
    document.getElementById(`outputBox`).style.display = `block`
    var gameButtons = document.getElementById(`gameButtons`)
    if (currentStoryBlock.ending == false){
        var addedButtons = ``
        currentStoryBlock.options.forEach((elements, index) => {
            addedButtons += `<input type="button" class="gameButton" onclick="buttonClick(this.id)" value="${currentStoryBlock.options[index][0]}" id="${currentStoryBlock.options[index][1]}"></input>`})
        gameButtons.innerHTML = addedButtons
    }
    else {
        gameButtons.innerHTML = `<button onclick="buttonClick(this.id)" id="intro" >(Re)Start Your Adventure!</button>`
    }
}