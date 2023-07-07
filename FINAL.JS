const video = document.createElement("video");
let i = 1;
video.src = "assets/rick roll.mp4";

video.controls = true;
video.muted = false;
video.height = 300;
video.width = 420;
video.autoplay = true;

const box = document.getElementById("box");
box.appendChild(video);
 