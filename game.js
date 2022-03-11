function game(){
    const storyVars = {
        intro:{
            text: ``,
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
        notSwim:{
            text: `You give in to the overwhelming force of the ocean. As the waves crash over you, you come to terms with your end. Salty seawater fills your lungs, the pain becoming almost unbearable.`,
            options:false,
            ending:true
        }
    }
    document.getElementById(`outputBox`).style.display = `block`
    document.getElementById(`startGame`).style.display = `none`
    var outputBox = document.getElementById(`outputBox`)
    var gameButtons = document.getElementById(`gameButtons`)
    var currentStoryBlock = storyVars.intro
    outputBox.innerHTML = storyVars.intro.text
    currentStoryBlock.options.forEach((elements, index) => {
        gameButtons.innerHTML += `<input type="button" class="gameButton" value="${currentStoryBlock.options[index][0]}" id="${currentStoryBlock.options[index][1]}"></input>`
    });
}