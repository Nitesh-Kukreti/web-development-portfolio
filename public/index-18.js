var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// _______________________________________________________________________
// PLAYING SOUND BY BUTTON CLICK 
for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio("../assets/sounds/18-tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("../assets/sounds/18-tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("../assets/sounds/18-tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("../assets/sounds/18-tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("../assets/sounds/18-snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("../assets/sounds/18-crash.mp3");
                crash.play();
            break;

            case "l":
                var kick = new Audio("../assets/sounds/18-kick-bass.mp3");
                kick.play();
            break;
                
            default:
                break;
        }
    });
}


// _______________________________________________________________________
// PLAYING SOUND BY KEYBOARD BUTTON PRESS 
document.addEventListener("keypress" , function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("../assets/sounds/18-tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("../assets/sounds/18-tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("../assets/sounds/18-tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("../assets/sounds/18-tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("../assets/sounds/18-snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("../assets/sounds/18-crash.mp3");
            crash.play();
        break;

        case "l":
            var kick = new Audio("../assets/sounds/18-kick-bass.mp3");
            kick.play();
        break;        
        default:
            break;
    }
}

// _______________________________________________________________________
// ADDING ANIMATION IN BUTTONS
function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout( function () {activeButton.classList.remove("pressed")}, 100);

}


