var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChoosenPattern = [];
var level = 1;
var response = [];


//____________________________________________________
$(document).keydown( function() { //START DETECTING KEYPRESS ON THE DOCUMENT TO START THE GAME
    nextSequence();
});   
//____________________________________________________
function nextSequence(){ //GOING TO NEXT LEVEL
    $(document).off('keydown'); //END DETECTING KEYPRESS ON THE DOCUMENT
    $("h1#level-title").text("Level-" + level);

    var randomNumber = (Math.floor((Math.random()*4))); //GETTING NUMBER BETWEEN 0-3(INCLUSIVE)
    var randomChosenColour = buttonColours[randomNumber]; //GETTING COLOR ACC. TO NUMBER
    gamePattern.push(randomChosenColour); //PUSHING COLOR TO THE ARRAY

    setTimeout(function() {
        //PLAYING SOUND OF THE BUTTON ACC. TO COLOR
        var randomButtonSound = new Audio("../assets/sounds/19-" + randomChosenColour + ".mp3");
        randomButtonSound.play();
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //ANIMATION ON THE BUTTON ACC. TO COLOR
      }, 250);
    };

//____________________________________________________
    $(".btn").click(function(event) { //TO APPPEND USER RESPONESE
        var element = event.target //TO GET ELEMENT FROM THE EVENT
        var responseId = element.id; // TO GET ID OF THE ELEMENT
        userChoosenPattern.push(responseId);
        if (gamePattern.length == userChoosenPattern.length) {
            checkResponse();
        }
    
        else if(gamePattern.length < userChoosenPattern.length){
            userChoosenPattern = [];
        }
        else{
        $("h1#level-title").text("waiting for your response....")
        }
    });
    
//____________________________________________________
    function checkResponse (){ //CHECKING USER RESPONSE IS CORRECT OR WRONG
        var count = userChoosenPattern.length;
        var i = 0;
        var score = "";
        while (i < count) {
            if (userChoosenPattern[i] == gamePattern[i]) {
                score = "pass";
            }
            else{score = "fail"
            }
            i++
        }
    
        if (score == "pass") {
            userChoosenPattern = [];
            nextSequence();
            level++
            $("h1#level-title").text("Level-" + level);
    
        }
        else{
            $("h1#level-title").text("Game Over, Press Any Key to Restart");
            var wrongSound = new Audio("../assets/sounds/19-wrong.mp3");
            wrongSound.play();
            $(document.body).addClass("game-over");
            setTimeout( function () {$(document.body).removeClass("game-over");}, 200); // TO REMOVE CLASS AFTER TIMEOUT
            gamePattern = [];
            userChoosenPattern = [];
            level = 1;
            $(document).keydown( function() { //START DETECTING KEYPRESS ON THE DOCUMENT
                nextSequence();
            });   
            
        }
    
    };
    
//____________________________________________________
    $(".btn").click(function(event) {  // ADDING AMIMATION AND SOUND
        var element = event.target //TO GET ELEMENT FROM THE EVENT
    
        // ADDING ANIMATION IN BUTTONS
        element.classList.add("pressed"); //TO ADD CLASS
        setTimeout( function () {element.classList.remove("pressed")}, 100); // TO REMOVE CLASS WITH TIMEOUT
    
        // ADDING SOUND TO THE BUTTONS
        var buttonId = element.id; // TO GET ID OF THE ELEMENT
        switch (buttonId) {
            case "red":
                var sound1 = new Audio("../assets/sounds/19-red.mp3");
                sound1.play();
                break;
    
            case "blue":
                var sound1 = new Audio("../assets/sounds/19-blue.mp3");
                sound1.play();
                break;
    
            case "green":
                var sound1 = new Audio("../assets/sounds/19-green.mp3");
                sound1.play();
                break;
    
            case "yellow":
                var sound1 = new Audio("../assets/sounds/19-yellow.mp3");
                sound1.play();
                break;
    
            default:
                break;
        }
    });
    