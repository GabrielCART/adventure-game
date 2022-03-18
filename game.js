function playSound(sound){ //audio playback function
    document.getElementById(sound).play(); //plays sound based on argument from function call
}
function stopSound(sound){ //audio stop playback function
    document.getElementById(sound).pause(); //pauses sound based on argument from function call
}
const storyVars = {
    intro:{
        text: `Your journey begins in the lovely city of New York. You come to your French class ready to learn, but your teacher; Dr. Crowbar, has a better idea and decides that this year the entire class is taking a cruise to France. Of course everyone is ecstatic, even the class president, Billy Bobby Bones is cheerful. Soon enough, the big day arrives and everyone gets into the ship with smiling faces and happy hearts. But the Atlantic ocean wasn't so happy. That night you wake up to find yourself with a face full of sand and salty sea water. You realize that your ship has been wrecked and you're very close to an island with a lighthouse sitting atop it's cliffs. What do you want to do?`,
        options:[
            [`Try to swim to shore.`, `swimShore`],
            [`Let the currents take you.`, `notSwim`]
        ],
    },
    swimShore:{
        text: `You swim up to a rather small beach, surrounded by rocky cliffs. You think you can scale it, but the rocks are sharp. No matter what you do, however, you know that when the tide rolls in this tiny beach will be underwater.`,
        options:[
            [`Climb the cliffs.`, `cliffClimb`],
            [`Search for another way off the beach.`, `moveAroundCliffs`]
        ],
    },
    moveAroundCliffs:{
        text: `You start to look around, determined to get off the wretched island and go back home, you continue to walk around the base of the cliffs until you recognize something, or rather someone. It is Dr. Crowbar and the other survivors sitting on a beach where the cliffs drop low and the upper part of the island can be reached. Surprisingly, everyone is still alive and they are looking for supplies and rations, but everyone is torn between choosing a leader or picking berries. Do you want to let Dr. Crowbar lead or try to establish yourself as leader?`,
        options:[
            [`Let Dr. Crowbar lead.`, `crowbarLeads`],
            [`Fight Dr. Crowbar for leadership.`, `fightCrowbar`],
        ],
    },
    swimtoGroup:{
        text: `You begin to swim towards the shore. Though the bitter cold of the water makes it difficult, you are motivated by the sillhouetes on the coast It is Dr. Crowbar and the other survivors sitting on a beach where the cliffs drop low and the upper part of the island can be reached. Surprisingly, everyone is still alive and they are looking for supplies and rations, but everyone is torn between choosing a leader or picking berries. Do you want to let Dr. Crowbar lead or try to establish yourself as leader?`,
        options:[
            [`Let Dr. Crowbar lead.`, `crowbarLeads`],
            [`Fight Dr. Crowbar for leadership.`, `fightCrowbar`],
        ],
    },
    crowbarLeads:{
        text: ``,
        options:[
            [`Let Dr. Crowbar lead.`, `crowbarLeads`],
            [`Fight Dr. Crowbar for leadership.`, `fightCrowbar`],
        ],
    },
    fightCrowbar:{
        text: `You decide to fight for leadership, taking down everyone, ahem, almost everyone, except Dr. Crowbar, who has a crowbar; obviously. You fight Dr. Crowbar with all strength, holding to your strong emotions and your non-existent oblivious strength, but Dr. Crowbar has the advantage; swinging his Crowbar like a madman, he strikes your weak point in your kneecaps. Do you give up or fight to defend your pride?`,
        options:[
            [`Give up.`, `fightCrowbarStop`],
            [`Keep fighting!`, `fightCrowbarContinue`],
        ],
    },
    fightCrowbarStop:{
        text: `You plead with Dr. Crowbar to spare your life. Dr. Crowbar rethinks his decision and lets you live. He is impressed with your resilience and strength. Therefore, He makes you Second-in-Command. While scouting the area, The group happens upon a black labrador with a collar, But, you haven't eaten anything except Billy Bobby Bones'™ special dried, burnt fish with salty berry water stew; and you're getting tired of eating that abomination, so you want to settle on something less disgusting. You think about eating the dog, however, Dr. Crowbar can't decide whether he should follow the dog or not follow the dog.`,
        options:[
            [`Give up.`, `fightCrowbarStop`],
            [`Keep fighting!`, `fightCrowbarContinue`],
        ],
    },
    fightCrowbarContinue:{
        text: `Apparently, Dr. Crowbar hates stubborn and proud children; he picks you up like a two-year-old child and heaves you over the cliff, you fall like a sack of potatoes and break all your bones on the rugged cliffs. <br> <br> Stubborn and Proud Child - Premature Ending`,
        options:false,
    },
    cliffClimb:{
        text: `The sharp rocks cut into your hands. The salty seawater stings your eyes, burns your cuts, and makes the rock slippery. The fatigue in your muscles builds and your arms begin to burn. You make it about halfway before your hands slip, failing to grasp the small crack in the rock just above you. As you fall you are forced to confront the fact that you won't survive this fall. You take it all in before falling into the waves. The last sound you ever hear is your bones being crushed against the rocky cliffs.<br> <br> Slippery Hands - Premature Ending`,
        options:false,
    },
    notSwim:{
        text: `The currents take you around the island to another area off the coast. You think you can see the bright orange of life jackets littering the sand.`,
        options:[
            [`Try to swim to shore now.`, `swimtoGroup`],
            [`Let the currents take you.`, `drown`]
        ],
    },
    drown:{
        text: `You give in to the <a href=https://www.youtube.com/watch?v=dQw4w9WgXcQ>overwhelming force</a> of the ocean. As the waves crash over you, you come to terms with your end. Salty seawater fills your lungs, and with the pain becoming unbearable you sink beneath the surface. </br></br>Lazy - Premature Ending`,
        options:false,
    }
}
function buttonClick(idInput){ //function to handle buttons
    var currentStoryBlock = storyVars[idInput] //sets what part of the story the user is on
    document.getElementById(`outputBox`).innerHTML = currentStoryBlock.text //changes the output box to display the text of the current part of the story
    document.getElementById(`outputBox`).style.height = `60vh` //shows the output box to the user if it isn't visible already
    document.getElementById(`startText`).style.height = `0` //hides the starting text box to the user if it is visible
    var gameButtons = document.getElementById(`gameButtons`) //Retrieves content of gameButtons form
    if (currentStoryBlock.options != false){ //checks if current story block is not an ending
        var addedButtons = `` //clears current button list
        currentStoryBlock.options.forEach((elements, index) => {
            addedButtons += `<input type="button" class="gameButton" onclick="buttonClick(this.id); playSound('click');" value="${currentStoryBlock.options[index][0]}" id="${currentStoryBlock.options[index][1]}"></input>`}) //creates new buttons for each story option
        gameButtons.innerHTML = addedButtons //adds new buttons to the list
    }
    else { //if story block is an ending
        gameButtons.innerHTML = `<button class="gameButton" onclick="buttonClick(this.id); playSound('start');" id="intro" >(Re)Start Your Adventure!</button>` //create a restart button
    }
}