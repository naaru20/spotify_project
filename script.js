let songIndex = 1;
let audioElement = new Audio("songs/1.M4A");
const masterbtn = document.getElementById("masterbtn");
const myProgressBar = document.getElementById("myProgressBar");
const masterSongName = document.getElementById("masterSongName");
let songname = document.getElementsByClassName("songname");
// let masterimage = document.getElementsByTagName('img')
let songslist = Array.from(document.getElementsByClassName("songslist"));

let allsongs = [
  {
    song: "Ed Sheeran - Afterglow ",
    songpath: "songs/1.M4A",
    coverpath: "cover/1.jpg",
  },
  {
    song: "Ed Sheeran - Bad Habits ",
    songpath: "songs/2.M4A",
    coverpath: "cover/2.jpg",
  },
  {
    song: "Ed Sheeran - Beautiful People ",
    songpath: "songs/3.M4A",
    coverpath: "cover/3.png",
  },
  {
    song: "Ed Sheeran - BLOW ",
    songpath: "songs/4.M4A",
    coverpath: "cover/4.jpg",
  },
  {
    song: "Ed Sheeran - Castle On The Hill ",
    songpath: "songs/5.M4A",
    coverpath: "cover/5.jpg",
  },
  {
    song: "Ed Sheeran - Galway Girl ",
    songpath: "songs/6.M4A",
    coverpath: "cover/6.jpg",
  },
  {
    song: "Ed Sheeran - Give Me Love",
    songpath: "songs/7.M4A",
    coverpath: "cover/7.jpg",
  },
];

songslist.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = allsongs[i].coverpath;
  element.getElementsByClassName("music")[0].innerText = allsongs[i].song;
});

masterbtn.addEventListener("click", () => {
  if (audioElement.paused || audioElement <= 0) {
    audioElement.play();
    masterbtn.classList.remove("fa-play-circle");
    masterbtn.classList.add("fa-pause-circle")
    (gif.style.opacity = 1);
  } else {
    audioElement.pause();
    masterbtn.classList.remove("fa-pause-circle");
    masterbtn.classList.add("fa-play-circle");
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

let makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songlistplay")).forEach(
    (element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songlistplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
    masterSongName.innerText = allsongs[songIndex-1].song;
    // document.getElementsByTagName('img')[songIndex].src = allsongs[songIndex-1].coverpath;
    (gif.style.opacity = 1);
    audioElement.src = `songs/${songIndex}.M4A`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterbtn.classList.remove("fa-play-circle");
    masterbtn.classList.add("fa-pause-circle");
    });
  }
);

  
        
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 1;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.M4A`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = allsongs[songIndex-1].song;
    (gif.style.opacity = 1);
    masterbtn.classList.remove("fa-play-circle");
    masterbtn.classList.add("fa-pause-circle");
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=1) {
        songIndex = 7;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.M4A`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = allsongs[songIndex-1].song;
    (gif.style.opacity = 1);
    masterbtn.classList.remove("fa-play-circle");
    masterbtn.classList.add("fa-pause-circle");
});
