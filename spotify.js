console.log("welcome to spotify");
let audioElement = new Audio("songs/1.M4A");
let music = Array.from(document.getElementsByClassName("music"));
let allsongs = [
  { song: "let me love you", songpath: "songs/1.M4A" },
  { song: "kyaa chahte ho", songpath: "songs/2.M4A" },
  { song: "maar daalo", songpath: "songs/3.M4A" },
  { song: "aaj re", songpath: "songs/4.M4A" },
  { song: "sanam re", songpath: "songs/5.M4A" },
  { song: "jai ho baba ri", songpath: "songs/6.M4A" },
  { song: "jorr se bolo", songpath: "songs/7.M4A" },
];

music.forEach((element, i) => {
   element = (document.getElementsByClassName("music")[i].innerText =
    allsongs[i].song);
});

let songname = document.getElementsByClassName("songname");
let masterpaly = document.getElementById("masterbtn");
masterpaly.addEventListener("click", () => {
  if (audioElement.paused || audioElement <= 0) {
    audioElement.play(),
      masterbtn.classList.remove("fa-play-circle"),
      masterbtn.classList.add("fa-pause-circle"),
      (gif.style.opacity = 1);
  } else {
    audioElement.pause(),
      masterbtn.classList.remove("fa-pause-circle"),
      masterbtn.classList.add("fa-play-circle"),
      (gif.style.opacity = 0);
  }

  let myProgressBar = document.getElementsByName("range");
  audioElement.addEventListener("timeupdate", function () {
    console.log("timeupdate");
    progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    );
    // console.log(progress);
    myProgressBar.value = progress;
  });

  // myProgressBar.addEventListener("change", () => {
  //   audioElement.currentTime =
  //     (myProgressBar.value * audioElement.duration) / 100;
  // });
  myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (myProgressBar.value * audioElement.duration) / 100;
  });
});
// let playBtn = document.getElementById("playBtn");
// Array.from (playBtn.addEventListener("click", (element) => {
          
// }));
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songslist')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songslist')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = allsongs[songIndex].song;
      audioElement.currentTime = 0;
      audioElement.play();
      // gif.style.opacity = 1;
      masterbtn.classList.remove('fa-play-circle');
      masterbtn.classList.add('fa-pause-circle');
   } )},
)