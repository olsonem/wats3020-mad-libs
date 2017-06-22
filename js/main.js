// WATS 3020 Mad Libs Assignment
// to collect input from the user. The input you collect will be used to
// generate the story.

let honorific = prompt ('Please enter an honorific title (e.g. Mister or Colonel).');

let authorName = prompt ('What is your full name?');

let adjective1 = prompt ('Please enter an adjective:');

let vehicle = prompt ('Please enter a mode of transportation:');

let vehiclePart = prompt ('name a part for the mode of transportation you just named:');

let parking = prompt ('Where are you parking?');

let precious = prompt ('Name a precious object:');

let noiseMaker = prompt ('What is making that noise?');

let crowdBehavior = prompt ('What do people do together in groups?');

let adjective2 = prompt ('Adjective:');

let adjective3 = prompt ('Adjective:');

let color = prompt ('Name a color:');

let familyMember = prompt ('Name of a family relationship e.g. sister, father, etc.:');

let organ = prompt ('Name a body organ:');

let bodyPart1 = prompt ('Name a part of your body:');

let bodyPart2 = prompt ('Name another part of your body:');

let bodyPart3 = prompt ('Name yet another part of your body:');

let thing = prompt ('What is that thing?');

let thing2 = prompt ('A thing you give a someone you love?');

let thing3 = prompt ('A thing you give someone you simply like?');

let adjective4 = prompt ('adjective describing your vehicle?');

let adjective5 = prompt ('another adjective describing your vehicle');


////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.

let userNumber = prompt ('What is your favorite number?');

// change the number that the user submitted.
let number2 = userNumber *3; 
let number3 = userNumber / number2 + userNumber;


// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;
