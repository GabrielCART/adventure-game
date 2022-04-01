function playSound(sound){ //audio playback function
    document.getElementById(sound).play(); //plays sound based on argument from function call
}

function stopSound(sound){ //audio pause playback function
    document.getElementById(sound).pause(); //pauses sound based on argument from function call
}

const storyVars = {
    intro:{
        text: `Your journey begins in the lovely city of New York. You come to your French class ready to learn, but your teacher; Dr. Crowbar, has a better idea and decides that this year the entire class is taking a cruise to France. Of course everyone is ecstatic, even the class president, Billy Bobby Bones is cheerful. Soon enough, the big day arrives and everyone gets into the ship with smiling faces and happy hearts. But the Atlantic ocean wasn't so happy. The next morning you wake up to the sound of panicked screaming. Then, you're knocked right out of your bed as the ship suddenly changes direction. An ear piercingly loud sound unmistakable as the hull of the ship you're on being ripped apart suddenly echoes around you. Knowing that you have next to no time to grab anything, you sprint for the stairs, climbing them to the deck, and you dive over the railing. You swim back up to the surface and open your eyes (which isn't easy to do given the salty seawater you've now been soaked in.) Luckily, you're very close to an island with a lighthouse sitting atop its cliffs. What do you want to do?`,
        options:[
            [`Try to swim to shore.`, `swimShore`],
            [`Let the currents take you.`, `notSwim`]
        ],
    },
    swimShore:{
        text: `You swim up to a rather small beach, surrounded by rocky cliffs. After taking a moment to catch your breath, you walk up to the cliffs and examine them. You think you can climb up, but the rocks are sharp. No matter what you do, however, you know that when the tide rolls in this tiny beach will be underwater. You need to do something, and you need to do it quickly.`,
        options:[
            [`Climb the cliffs.`, `cliffClimb`],
            [`Search for another way off the beach.`, `moveAroundCliffs`]
        ],
    },
    cliffClimb:{
        text: `The sharp rocks cut into your hands. The salty seawater stings your eyes, burns your cuts, and makes the rock slippery. The fatigue in your muscles builds and your arms begin to burn. You make it about halfway before your hands slip, failing to grasp the small crack in the rock just above you. As you fall you are forced to confront the fact that you won't survive this fall. You take it all in before falling into the waves. The last sound you ever hear is your bones being <a href="https://www.youtube.com/watch?v=7zpxgyG7eGk">crushed </a> against the rocky cliffs.<br> <br> Slippery Hands - Premature Ending`,
        options:false,
    },
    moveAroundCliffs:{
        text: `You start to look around, determined to find a way off the beach, and you continue to walk around the base of the cliffs until you recognize someone. It is Dr. Crowbar and the other survivors sitting on the beach! They seem to have gathered where the cliffs drop low and the upper part of the island can be reached. Surprisingly, everyone is still alive and they are all trying to figure out a good food and water source. Dr. Crowbar is directing students acting as the leader, but he's the one who got us all into this mess in the first place! Do you want to let Dr. Crowbar lead, or try to establish yourself as a leader?`,
        options:[
            [`Let Dr. Crowbar lead.`, `crowbarLeads`],
            [`Fight Dr. Crowbar for leadership.`, `fightCrowbar`],
        ],
    },
    swimtoGroup:{
        text: `You begin to swim towards the shore. Though the bitter cold of the water makes it difficult, you are motivated by the sillhouetes on the coast. As you approach you recognize the sillhouetes as Dr. Crowbar and the other survivors grouped on the beach where the cliffs drop low and the upper part of the island can be reached. Surprisingly, everyone is still alive and they are all trying to figure out a good food and water source. Dr. Crowbar is directing students acting as the leader, but he's the one who got us all into this mess in the first place! Do you want to let Dr. Crowbar lead, or try to establish yourself as leader?`,
        options:[
            [`Let Dr. Crowbar lead.`, `crowbarLeads`],
            [`Fight Dr. Crowbar for leadership.`, `fightCrowbar`],
        ],
    },
    crowbarLeads:{
        text: `You decide that Dr. Crowbar probably knows best and allows him to lead. While scouting the area, the group happens upon a black labrador with a red collar. You haven't eaten anything except Billy Bobby Bones' dried fish which he's cooked (more like burnt) in a salty seawater brine; and you're getting tired of eating that abomination, so you want to find something less disgusting. You consider eating the dog, however, Dr. Crowbar decides that everyone should follow the dog and see where it will lead them. Do you want to stay with the group as they blindly follow the animal, or go off on your own?`,
        options:[
            [`Follow the dog with the group.`, `dogFollow`],
            [`Go off on your own.`, `dogIgnoreAlone`],
        ],
    },
    dogIgnoreAlone:{
        text: `You choose not to follow the dog and continue exploring the island on your own. As you're walking through the island, you find little splotches of red blood on the leaves and also a distinct trial of footprints. You follow the trail curiously, and you are led to a run-down building; an old home maybe? The moment you step into the building someone grabs you and holds a cloth to your mouth. It's covered in strong chloroform, and you lose consciousness. When you wake up, the stranger introduces himself as “Captain Fast”, he looks rugged; with a long beard and angry expression across his face. He smells strongly of fish and seawater, but he is surely not an ordinary fisherman. He starts pacing around like a General at war pondering his next move, staring at you tempestuously. He begins to say something but he is not very audible over the sound of screeching seagulls. He seems agitated by their presence, and stomps outside. You hear a loud bang and several panicked screeches from the seagulls, and he returns to you, looking much more calm. He starts to speak, “You are a long way from New York, kid. So tell me, what were you doing poking around on my island, huh?” you try to explain, but you can't get the words out. “Tell me!”, he yells, flipping over a table enraged by your lack of a response. “Well, since you won't answer that question, how about another? Do you like money? Fame? The freedom to go wherever and to do whatever you want without anyone- no government or police department- telling you what you can and can't do? I have this to offer, and more. All you gotta do is join me.”`,
        options:[
            [`Join the Captain.`, `joinFastAlone`],
            [`Refuse the Captain`, `refuseCaptain`],
        ],
    },
    joinFastAlone:{
        text: `You accept Fast's offer, and decide to join him in the most profitable illegal business ever created. Within a week you and the Captain dominate the West European coast distributing your illegal goods and services. But one day after returning from a business trip to Milan, Italy; you contemplate the meaning of life and your existence. Milan had been a disaster. You did some unspeakable things in the name of self preservation and maximum profit. As much as you care for your criminal partner (and the money), you feel like you are betraying your friends and your morals. The dough is rolling in, though. Are you really a hardened criminal? Is this really the life you want?`,
        options:[
            [`Continue to work with Fast.`, `stayWithFast`],
            [`Go back to your friends.`, `betrayFast`],
        ],
    },
    stayWithFast:{
        text: `You push away every thought about turning back to your friends, forcing it out of your head in favor of making vast amounts of money. You abandon all morals and press on with Captain Fast; commanding a vast amount of the stolen and “disappeared” vessels in your fleet. After your fifth and most profitable year of crime, you and Captain Fast toast to years of prosperity in the future. Over those years, you become the most wanted person in the whole world. From coast to coast, countries will fear and abhor you.</br></br>Criminal Mastermind - Villain Ending`,
        options:false,
    },
    betrayFast:{
        text: `You decide that this life is not for you, but you know Captain Fast won't let you leave it so easily. A plan begins to form in your head on how you can escape, rescue your friends, and prevent Captain Fast from ever commiting a crime again. Without hesitation you steal one of the smaller ships in the fleet, a luxury yacht once owned by a pop star, stolen by Fast to auction off later. You immediately speed off in the direction of the island, hoping your friends were still alive. Luckily, you find them in the lighthouse. They were being rescued by the French Coast Guard, Billy explains, but then they had an argument with the dispatcher and he stopped responding. You tell them all about your experiences as well, explaining everything you knew that could incriminate Captain Fast to the class. Everyone climbs into the yacht, where safe drinking water and good food is waiting for them, and you set sail for the French mainland. You tell the French police about Captain Fast, and he is arrested. Spirits are high among your class, but Dr. Crowbar seems upset with you. Captain Fast was his friend, after all, and Dr. Crowbar doesn't think he deserved to be locked up.</br></br>Deceptor - Hero Ending`,
        options:false,
    },
    refuseCaptain:{
        text: `You reject Fast's offer, and he seems to be even angrier than before. “Well, I'm disappointed. You could've been such a great criminal. Oh well.” Then, he picks you up, drags you outside of the abandoned house. He continues to drag you until he reaches the cliff edge. Then, with a scream so loud it makes your ears ring, <a href="https://www.youtube.com/watch?v=-t8JEg7sQtQ">he tosses you over the edge</a> of the cliff into the water below. With your arms and legs bound, you have no chance of swimming. Knowing this, you give up and accept your doom.</br></br>Caught Him on a Bad Day - Unlucky Ending`,
        options:false,
    },
    fightCrowbar:{
        text: `You decide to fight him for leadership. You of course don't stand a chance against Dr. Crowbar, who has a crowbar; obviously. You fight Dr. Crowbar with all of your strength, but Dr. Crowbar has the advantage; swinging his Crowbar like a madman, he strikes you in the gut, the pain knocking you down to your knees.`,
        options:[
            [`Give up.`, `fightCrowbarStop`],
            [`Keep fighting!`, `fightCrowbarContinue`],
        ],
    },
    fightCrowbarStop:{
        text: `You plead with Dr. Crowbar to spare your life. Dr. Crowbar rethinks his decision and lets you live. He is impressed with your resilience and strength. Therefore, He makes you Second-in-Command. He is the teacher, so he probably knows best. While you were fighting, a group that had been scouting the area happened upon a <a href="https://www.youtube.com/watch?v=-t8JEg7sQtQ">black labrador</a> with a red collar. You haven't eaten anything except Billy Bobby Bones' dried fish which he's cooked (more like burnt) in a salty seawater brine; and you're getting tired of eating that abomination, so you want to find something less disgusting. You consider eating the dog, but Dr. Crowbar wants everyone to follow the dog and see where it will lead them. Do you want to stay with the group as they blindly follow the animal, or go off on your own? Everyone is hungry, perhaps you could convince them to try to eat the dog.`,
        options:[
            [`Follow the dog with the group.`, `dogFollow`],
            [`Convince the group to ignore the dog.`, `dogIgnore`],
            [`Convince the group to eat the dog.`, `eatDog`],
        ],
    },
    eatDog:{
        text: `You convince everyone, even Dr. Crowbar, to eat the dog. The group kills the dog and don't even think twice about cooking it, like the savages they are. You <a href ="https://www.youtube.com/watch?v=--xnGO6K5Wk">eat</a> a ton of the raw dog meat, fighting with everyone else over each and every scrap. Didn't anyone ever teach you to NEVER eat raw meat? Everyone gets severe food poisoning and, without any other food to replenish what they throw up, they all succumb to starvation.</br></br>What?! Why would you..? - Premature Ending`,
        options:false,
    },
    dogIgnore:{
        text:`You convince everyone to ignore the dog and continue exploring. After several hours, along the coast you happen upon a large ship with “USS Cyclops” written in bold on the side of the ship. Everyone is surprised to see a ship here, especially one in such good condition. Billy Bobby Bones is even more shocked to see the ship, he says “The USS Cyclops has been missing for a hundred years, it was lost in the Bermuda Triangle… This can't be possible”. You find a ladder up to the deck, and everyone climbs aboard the ship. The bridge is nearby, and you could easily drive it away, but Dr. Crowbar feels like maybe it'd be better to search the entire ship first.`,
        options:[
            [`Explore the ship.`,`exploreShip`],
            [`Drive away.`,`driveShip`],
        ],
    },
    driveShip:{
        text:`Like the maniac you are, you think you can drive a boat without knowing anything about it. With the advice of Billy Bobby Bones, you move the throttle to full astern (which he says means backwards as fast as possible), the engines start up, but the ship doesn't budge. This commotion is enough to draw the attention of the true Captain of the ship. Billy is the first to notice the man, running full sprint towards the ship holding a Type 89 knee mortar. He stops suddenly, and you watch as he sets the mortar down, pulls out a small cylindrical object, and drops it into the mortar tube. Panic sets in as you realize what it is. With a loud explosive thunk, what you now know to be a grenade flies back up out of the tube directly at the bridge of the ship. Nobody has time to react, and the grenade flies in through the window, striking near the center of the room. The concussive blast is enough to spaghettify the entire group.</br></br>Blown Up - Fool's Ending`,
        options:false,
    },
    exploreShip:{
        text:`The group enters the ship and finds illegal goods, weapons for a Type 89 knee mortar, instructions for the Type 89 knee mortar, and a Carl Gustav recoilless rifle. Some of the group members on deck warn you that someone is approaching the ship with a Type 89 knee mortar. Dr. Crowbar sees someone in the distance. His face darkens as he recognizes him. He tells everyone to get down, and that the man approaching them is Captain Fast, a man he used to know. Turns out that Captain Fast and Dr. Crowbar served in the Navy together and became best friends. Captain Fast was injured by a mortar round, and though Dr. Crowbar (who was the squad's medic at the time) had tried to save him; the traumatic experience twisted Captain Fast's perception. He started smuggling illegal goods using his status as a Captain in the Navy. Dr. Crowbar stopped speaking to him when he found out, and Captain Fast was sent to prison. He escaped, and began smuggling using the USS Cyclops, which he had used the money from his crimes to find and recover from the bottom of the ocean. Dr. Crowbar tries to convince Fast to stop commiting crimes, but Fast refuses. The argument gets worse, and Captain Fast begins brandishing his knee mortar. Dr. Crowbar is more angry than you have ever seen him. The two eventually get into a fight. Dr. Crowbar using his crowbar, Captain Fast using his knee mortar, they exchange blows. As the fight intensifies, two group members run out from within the ship wielding a Carl Gustav recoilless rifle and hand it to you. Dr. Crowbar seems to be losing, however, and Captain Fast gets a chance to knock him down. Captain Fast towers over Dr. Crowbar, getting ready to deliver the final blow, but this gives you the opportunity to attack him.`,
        options:[
            [`Attack Fast with the Carl Gustav.`,`attackFast`],
            [`Let him attack Dr. Crowbar.`,`letCrowbarFight`],
        ],
    },
    attackFast:{
        text:`You hit Captain Fast with the Carl Gustav recoilless rifle. He is knocked unconscious, but Dr. Crowbar locks you in the ship as you return to the mainland. Captain Fast is arrested, but Dr. Crowbar kicks you out of his French class. Captain Fast stops committing crimes.</br></br>At a Cost - Hero Ending`,
        options:false,
    },
    letCrowbarFight:{
        text:`Dr. Crowbar and Captain Fast start to fight each other. Dr. Crowbar uses his crowbar and breaks all of Captain Fast's bones. Dr. Crowbar instantly regrets his actions and tries to save Captain Fast. It is too late, and Dr. Crowbar lives the rest of his life in immense guilt from killing who used to be his best friend.</br></br>Dr. Crowbar's Guilt - Survivor Ending`,
        options:false,
    },
    dogFollow:{
        text:`The group follows the dog into the island, you follow the dog with them and find a spectacular sight, a tall, vintage lighthouse. Horribly dilapidated, the lighthouse is leaning over. Inside the lighthouse, there are small splatters of blood on the walls. Quite concerned, Billy Bobby Bones declares he will stay back and make sure nobody sneaks up on you, though you're pretty sure he's just afraid to explore the building. Upstairs, there is a radio with a frequency number on a sticky note labeled “EMERGENCY FREQ - 350.345 MHz”, but the radio is already set to frequency 229.71 MHz.`,
        options:[
            [`Stay on 229.71 MHz.`,`keepFreq`],
            [`Change to 350.345 MHz.`,`changeFreq`],
        ],
    },
    keepFreq:{
        text:`You and your classmates decide to keep the frequency and suddenly you hear something from the other side of the radio. The person on the other side answers in French, but you don't know which language to speak.`,
        options:[
            [`Speak French`,`speakFrench`],
            [`Speak English`,`speakEnglish`],
        ],
    },
    speakFrench:{
        text:`You and your classmates decide to keep the frequency and suddenly you hear something from the other side of the radio. The person on the other side answers in French, but you don't know which language to speak.`,
        options:[
            [`Speak French`,`speakFrench`],
            [`Speak English`,`speakEnglish`],
        ],
    },
    speakEnglish:{
        text:`You pick up the microphone and bring it to your mouth. You press the PTT key on the radio, and begin to speak… “Hello, is this the French Coast Guard? Please respond.” The entire class goes silent, all holding their breath. Seconds pass… Then minutes. Nobody has taken a breath yet, and it feels like it's already been hours. “Like seriously, you're in France, what are the chances people know English?” Billy Bobby Bones interjects, breaking the silence. You think maybe you should hail them again, so you repeat yourself. “Hello, is this the French Coast Guard? Please respond.” This time, you hear someone on the other line. It sounds like someone scrambling for their own microphone. Someone responds, “Y-yes, hello!?”, but their voice seems odd for a Frenchman. They have a very strong New Zealand accent, and sound like they've just been woken up. You respond “Who is this? We've been trying to reach the Coast Guard, our ship is destroyed and we're trapped on an island right now, we're in need of a rescue.” The tone of the man on the radio shifts immediately from groggy to lucid. “Yes, right away. Please stay online.” he stops speaking to you, but the microphone is left on, presumably by accident. Something is said in French, and another (markedly more French) voice responds with a few French words you knew before you took the class. “Do you have the name of the island, ship, or anything else we can use to locate you?” You respond as soon as you can “uhh, yes, it's er…” Dr. Crowbar interjects- “Sir we are on La Île Sinistre, in the lighthouse. There's nobody here, though, it seems to be abandoned.” The man on the radio responds immediately, saying that there is a helicopter being dispatched right now. The entire class erupts into celebration, excited that they will soon be off this big stupid rock. A while later you can hear the familiar sound of a dual-rotor helicopter in the distance, and it comes in to land just outside the lighthouse. Everyone climbs on, and though it is cramped, it means everyone made it off the island safely.</br></br>Just Survived - Boring Ending`,
        options:false,
    },
    speakFrench:{
        text:`You pick the microphone and bring it to your mouth but you're not sure what to say in French. Dr. Crowbar wants to interfere and speak into the microphone, but you believe you can do it. Despite your confidence, you want to ask Dr. Crowbar for help.`,
        options:[
            [`Trust your gut.`,`trustGut`],
            [`Let Dr. Crowbar help.`,`crowbarHelp`],
        ],
    },
    trustGut:{
        text:`You trust your gut and in near perfect French you say, “Hello, is this the French Coast Guard? Please respond”. On the other side, someone says “Yes, what is the matter?”, you continue to converse in French. Soon, Billy Bobby Bones spots the helicopter. “Look, we are going to be saved!” The French Coast Guard rescues all of you, and you go back to New York. Dr. Crowbar gives you an A+ in his French class. Well done kiddo.</br></br>French Master Just Survived - Boring Ending`,
        options:false,
    },
    crowbarHelp:{
        text:`Dr. Crowbar walks up to microphone proudly, feeling pretty important, he speaks into the microphone, and says something that was completely not-really-french, on the other side, the French Coast Guard gets the impression that the call is a prank and starts to reprimand Dr. Crowbar. You hear something being said about his mom. Ahem… after the little complication in the lighthouse, the group almost loses all hope. Feeling depressed, the group decides to find another way off the island. After several hours, along the coast you happen upon a large ship with “USS Cyclops” written in bold on the side of the ship. Everyone is surprised to see a ship. Billy Bobby Bones is even more shocked to see the ship, with a gasp, he says “The USS Cyclops has been missing for a hundred years, it was swallowed by the Bermuda Triangle… This can't be possible”. You find a ladder and everyone enters the ship. The bridge is nearby, and you could easily drive it away, but you feel like maybe it'd be better to search the entire ship first.`,
        options:[
            [`Explore the ship.`,`exploreShip`],
            [`Drive away.`,`driveShip`],
        ],
    },
    changeFreq:{
        text:`You change the radio to a frequency of 350.345 MHz and start broadcasting, “Hello, is this the French Coast Guard? Please respond.” Silence follows, so you try again, repeating the same message. “Hello, is this the French Coast Guard? Please respond.” Frustrated, you try to use the radio one more time “I am trapped on an island in the middle of nowhere, damn it! Our ship wrecked and we've taken shelter in an abandoned lighthouse, but we have no food or water. We need a rescue, NOW!” Again, you are met with no response. Suddenly, the window of the room shatters, and something rolls across the floor, smoking. Your vision fades, and you fall unconscious. Everyone around you does the same. When you awake you feel the familiar sway of a ship not unlike the ship you were on when you got stuck out here. A sense of peace falls on you… “So, it really was just all a dream?” But that sense of peace is short-lived, and you're pulled back to reality when you feel the shockingly cold water splashed onto your head. You sit up and try to wipe the water from your eyes, opening them to see a disheveled man with an unkempt beard. He stares at you with malice as several of the other group members around you sit up and look around. You are all in a cell in the bow of a ship, captured by the man. ”What were you doing poking around on my island, huh?” Billy Bobby Bones tries to speak, but can't say a word in time. “Tell me!”, he yells, flipping over a table enraged by the lack of a response. “Well, since you won't answer that question, how about another? Do you like money? Fame? The freedom to go wherever and to do whatever you want without anyone- no government or police department- telling you what you can and can't do? I have this to offer, and more. All you gotta do is join me.” The group looks to you for guidance, as Dr. Crowbar is nowhere to be found. (Join the Captain, or refuse?)`,
        options:[
            [`Join the Captain.`,`joinFastGroup`],
            [`Refuse the Captain.`,`refuseFastGroup`],
        ],
    },
    joinFastGroup:{
        text:`The Group, feeling broke as hell, decides that they want to make money. Billy Bobby Bones tries to dissuade the group, but his argument is unheard through the screaming of everyone trying to get rich. Captain Fast looks at the group and with a calm smile, He says, “Welcome to the Crew”. Nine years later, you and the crew have dominated the entirety of Europe. For generations to come Captain Fast and his new crew are feared more than any other pirates that ever lived.</br></br><a href="https://www.youtube.com/watch?v=kSeRv9Afg_E">Thug Life</a> - Villain Ending`,
        options:false,
    },
    refuseFastGroup:{
        text:`You tell the group to steady themselves and refuse to join him, but a few don't listen. They raise their heads and join Fast, who lets them out. You're disheartened by this, and shocked with how weak the traitorous members of the group are. Seeing this many more of the group decide to side with Fast, the majority of them in fact. Soon, everyone but you and Billy Bobby Bones have left the cell. Fast orders them to go out onto the deck of the ship, warning them not to flee, and the group of cowards leaves. You and Billy are now alone with Captain Fast. He turns from the stairwell back to you and Billy with an expression of anger and sadistic joy on his face. He opens the cell, to which Billy gets out. “T-thank you sir, we really didn't mean an-” before Billy can finish his sentence, Captain Fast strikes him in the liver. He falls to the ground gasping for air. You watch in horror as Captain Fast kicks Billy, who is now writhing on the floor in pain, repeatedly in the stomach. When he finally relents Billy seems to be in a state of shock, unable to move or speak. His breathing is in short rapid bursts, something you recognize as Cheyne-Stokes breathing, also known as the death rattle. Unable to believe your eyes, you crawl desperately to the corner of the cell farthest from Captain Fast. He approaches you, and you close your eyes, knowing exactly what is coming. You brace yourself for the end, listening to the sound of Fast's approaching footsteps.</br></br>Iron Resolve - Valiant Death Ending`,
        options:false,
    },
    fightCrowbarContinue:{
        text: `Apparently, Dr. Crowbar hates stubborn and proud children; he picks you up like a two-year-old child and heaves you over the cliff, you fall like a sack of potatoes and break all your bones on the rugged cliffs. <br> <br> Stubborn and Proud Child - Premature Ending`,
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

function gameStart(){//function for the start of the game
    document.getElementById(`outputBox`).style.height = `600px` //shows the output box
    document.getElementById(`startText`).style.height = `0` //hides the starting text box
}

function buttonClick(idInput){ //function to handle buttons
    var currentStoryBlock = storyVars[idInput] //sets the active story block
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