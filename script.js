//49

//
// document.addEventListener("keypress", function(event) {
//     if (event.keyCode == 81) {
//         alert('hi.');
//     }
// })
//
// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
// })
//
// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
// })


console.log('script file running')
var audio = new Audio('loop.mp3');
var bar = new Audio('bar.mp3');
var barbar = new Audio('barbar.mp3');
console.log('here is the audio substance')
console.log(audio);


var loop = function() {
audio.loop = true;
audio.play();

// myAudio = new Audio('someSound.ogg');
// myAudio.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);
// myAudio.play();


//eventually at timeout function for delay effects
//or timeout could handle a loop as well
//a timeout function could loop a set amount of times for number of echos
//and a timeout function could even get progressively quieter with time to fade out


}

var pause = function() {
  audio.pause();
}


$( "#play" ).click(function() {
  audio.loop = false;
  audio.play();
});


$( "#beatLoop" ).click(function() {
  bar.loop = true;
  bar.play();
});


$( "#beatLoop2" ).click(function() {
  barbar.loop = true;
  barbar.play();
});






var honk = function () {
  var audio2 = new Audio('honk.mp3');
  audio2.play();
}

var beep = function (){

  var context = new AudioContext(),
   oscillator = context.createOscillator();

  // Connect the oscillator to our speakers
  oscillator.connect(context.destination);

  // Start the oscillator now
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);

}

//   function togglePlay() {
//     return myAudio.paused ? myAudio.play() : myAudio.pause();
//   };
//
//
// });


// $( "#loop" ).click(function() {
//   var myAudio = new Audio('loop.mp3');
//   myAudio.addEventListener('ended', function() {
//         this.currentTime = 0;
//         this.play();
//     }, false);
//     myAudio.play();
// });



// var x = document.getElementById("loop.mp3");
//
// function playAudio() {
//     x.play();
// }
//
// function pauseAudio() {
//     x.pause();
// }



var blip = function (){

  alert('blip');

  // create web audio api context
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var oscillator = audioCtx.createOscillator();
  oscillator.type = 'square';
  oscillator.frequency.value = 3000; // value in hertz
  oscillator.start();
}







var c4 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value =  261.626;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}

var d4 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value =  293.665;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}

var e4 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value =  329.628;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}

var f4 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value = 349.228;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}

var g4 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value = 391.995;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}

var a4 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value = 440.000;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}

var b4 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value = 493.883;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}

var c5 = function (){
  var context = new AudioContext(),
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value = 523.251;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);
}














var g4square = function (){
  var context = new AudioContext(),
   oscillator = context.createOscillator();

  // Connect the oscillator to our speakers
  oscillator.connect(context.destination);

  oscillator.frequency.value = 391.995;

  oscillator.type = 'triangle';


  // Start the oscillator now
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 2.0);

}


Pressure.set('#pause', {
  change: function(force, event){
    console.log(force);
  }
});
