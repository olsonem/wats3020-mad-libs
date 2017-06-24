// WATS 3020 Mad Libs Assignment
// to collect input from the user. The input you collect will be used to
// generate the story.

var honorific = prompt ('Please enter an honorific title (e.g. Mister or Colonel');

var authorName = prompt ('What is your full name?');

var adjective1 = prompt ('Enter an adjective:');

var vehicle = prompt ('Name a vehicle:');

var vehiclePart = prompt ('Name a part of that vehicle:');

var parking = prompt ('Where will you park it?');

var precious = prompt ('Name a precious object:');

var noiseMaker = prompt ('What makes noise?');

var crowdBehavior = prompt ('Activitiy people do in groups?');

var adjective2 = prompt ('Enter another adjective:');

var adjective3 = prompt ('Enter one more adjective:');

var color = prompt ('Name a color:');

var familyMember = prompt ('Name a family relationship (e.g. sister, father):');

var organ = prompt ('Name a organ:');

var bodyPart1 = prompt ('Name a body part:');

var bodyPart2 = prompt ('Name another body part:');

var bodyPart3 = prompt ('Name one more body part:');

var thing = prompt ('Enter a thing:');

var thing2 = prompt ('Enter an thing you give someone you love:');

var thing3 = prompt ('Enter a thing you give someone you like:');

var adjective4 = prompt ('A adjective to describe your vehicle:');

var adjective5 = prompt('Another adjective to describe your vehicle:');


////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.

var userNumber = prompt('What is your favorite number?');

// change the number that the user submitted.
var number2 = userNumber *3; 
var number3 = userNumber / number2 + userNumber;


// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

var titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
var titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

var storyText = `

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



