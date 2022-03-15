function playSound(){
    document.getElementById(`start`).play();
}
const storyVars = {
    intro:{
        text: `Your journey begins in the lovely city of New York. You come to your French class ready to apprendre, but your teacher; Le docteur Crowbar, has a better idea and decides that this year the entire class is taking a cruise to France. Of course everyone is ecstatic, even the class president, Billy Bobby Bones is cheerful. Soon enough, the big day arrives and everyone gets into the ship with smiling faces and happy hearts. But the Atlantic ocean wasn't so happy. That night you wake up to find yourself with a face full of sand and salty sea water. You realize that your ship has been wrecked and you're very close to an island with a lighthouse sitting atop it's cliffs. What do you want to do?`,
        options:[
            [`Try to swim to shore.`, `swimShore`],
            [`Let the currents take you.`, `notSwim`]
        ],
        ending:false
    },
    swimShore:{
        text: `You swim up to a rather small beach, surrounded by rocky cliffs. You think you can scale it, but the rocks are sharp. No matter what you do, however, you know that when the tide rolls in this tiny beach will be underwater.`,
        options:[
            [`Climb the cliffs.`, `cliffClimb`],
            [`Search for another way off the beach.`, `moveAroundCliffs`]
        ],
        ending:false
    },
    cliffClimb:{
        text: `The sharp rocks cut into your hands. The salty seawater stings your eyes, burns your cuts, and makes the rock slippery. The fatigue in your muscles builds and your arms begin to burn. You make it about halfway before your hands slip, failing to grasp the small crack in the rock just above you. As you fall you are forced to confront the fact that you won't survive this fall. You take it all in before falling into the waves. The last sound you ever hear is your bones being crushed against the rocky cliffs.`,
        options:false,
        ending:true
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
        text: `You give in to the overwhelming force of the ocean. As the waves crash over you, you come to terms with your end. Salty seawater fills your lungs, and with the pain becoming unbearable you sink beneath the surface.`,
        options:false,
        ending:true
    }
}
function buttonClick(idInput){ //function to handle buttons
    var currentStoryBlock = storyVars[idInput] //sets what part of the story the user is on
    document.getElementById(`outputBox`).innerHTML = currentStoryBlock.text //changes the output box to display the text of the current part of the story
    document.getElementById(`outputBox`).style.display = `block` //shows the output box to the user if it isn't visible already
    var gameButtons = document.getElementById(`gameButtons`) //Retrieves content of gameButtons form
    if (currentStoryBlock.ending == false){ //checks if current story block is not an ending
        var addedButtons = `` //clears current button list
        currentStoryBlock.options.forEach((elements, index) => {
            addedButtons += `<input type="button" class="gameButton" onclick="buttonClick(this.id)" value="${currentStoryBlock.options[index][0]}" id="${currentStoryBlock.options[index][1]}"></input>`}) //creates new buttons for each story option
        gameButtons.innerHTML = addedButtons //adds new buttons to the list
    }
    else { //if story block is an ending
        gameButtons.innerHTML = `<button class="gameButton" onclick="buttonClick(this.id); playSound();" id="intro" >(Re)Start Your Adventure!</button>` //create a restart button
    }
}