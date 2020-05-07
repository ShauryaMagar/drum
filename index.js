for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
      var innerButton = this.textContent;
      makeSound(innerButton);
      buttonAnimation(innerButton);

    });
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:

  }

}
function buttonAnimation(btnpressed){
  var activeButton=document.querySelector("."+btnpressed);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}


// document.querySelectorAll gives an array.
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// So each time the for-loop performs a loop, that line of code is executed and simply exists invisibly (so-to-speak), and so anytime the requirements for that line of code are met (ex. such as clicking on the assigned item/image/drum), it displays the alert.
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
