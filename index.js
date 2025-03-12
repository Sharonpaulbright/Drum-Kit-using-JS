numberOfDrum = document.querySelectorAll(".drum").length
for(i=0;i<numberOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonPressed = this.innerHTML;
        makeSound(buttonPressed);
        addAnimation(buttonPressed);
    });   
}

document.addEventListener('keydown',function(event){
    var keyPressed = event.key
    makeSound(keyPressed);
    addAnimation(keyPressed);
});





function makeSound(buttonPressed){
    switch (buttonPressed) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case 'a':
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        default:
            break;
    }
}

function addAnimation(buttonKeyPressed){
     document.querySelector("."+buttonKeyPressed).classList.add("pressed");
     setTimeout(function(){
        removeAnimation(buttonKeyPressed)},100);
    
} 
function removeAnimation(buttonKeyPressed){
    document.querySelector("."+buttonKeyPressed).classList.remove("pressed")
}
