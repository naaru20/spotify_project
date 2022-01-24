console.log("welcome to spotify");
let AudioElement = new Audio("song.mp3");

let songname = document.getElementsByClassName("songname");
let masterpaly = document.getElementById("masterbtn");
masterpaly.addEventListener("click", () => {
  if (AudioElement.paused || AudioElement <= 0) {
    AudioElement.play();
    //   masterbtn.classlist.remove("fa-play-circle");
    //   masterbtn.classlist.add("fa-pause-circle");
    //   (songname.style.opacity = 1);
  } else {
    AudioElement.pause();
    //   masterbtn.classlist.remove("fa-pause-circle"),
    //   masterbtn.classlist.add("fa-play-circle"),
    //   (songname.style.opacity = 0);
  }
});

let myprogressbar = document.getElementsByName("range");
AudioElement.addEventListener("timeupdate", function () {
  console.log("timeupdate");
  progress = parseInt((AudioElement.currentTime / AudioElement.duration) * 100);
  console.log(progress);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener( 'change', ()=>{
  AudioElement.currrentTime = (myprogressbar.value*AudioElement.duration)/100;
})