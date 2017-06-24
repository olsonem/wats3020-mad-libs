// WATS 3020 Mad Libs Assignment
// to collect input from the user. The input you collect will be used to
// generate the story.

var honorific = document.getElementById ('honorific').value;

var authorName = document.getElementById ('authorName').value;

var adjective1 = document.getElementById ('adjective1').value;

var vehicle = document.getElementById ('vehicle').value;

var vehiclePart = document.getElementById ('vehiclePart').value;

var parking = document.getElementById ('parking').value;

var precious = document.getElementById ('precious').value;

var noiseMaker = document.getElementById ('noiseMaker').value;

var crowdBehavior = document.getElementById ('crowdBehavior').value;

var adjective2 = document.getElementById ('adjective2').value;

var adjective3 = document.getElementById ('adjective3').value;

var color = document.getElementById ('color').value;

var familyMember = document.getElementById ('familyMember').value;

var organ = document.getElementById ('organ').value;

var bodyPart1 = document.getElementById ('bodyPart1').value;

var bodyPart2 = document.getElementById ('bodyPart2').value;

var bodyPart3 = document.getElementById ('bodyPart3').value;

var thing = document.getElementById ('thing1').value;

var thing2 = document.getElementById ('thing2').value;

var thing3 = document.getElementById ('thing3').value;

var adjective4 = document.getElementById ('adjective4').value;

var adjective5 = document.getElementById('adjective5').value;


////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.

var userNumber = document.getElementById('userNumber').value;

// change the number that the user submitted.
var number2 = userNumber *3; 
var number3 = userNumber / number2 + userNumber;
document.getElementById('libForm').addEventListener('libForm');

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
var storyParagraph = document.getElementById("#madlib-text");
storyParagraph.innerHTML = storyText;



