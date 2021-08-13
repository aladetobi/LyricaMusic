let songs = ["music1.mp3","music2.mp3","music3.mp3"];
let cover = ["profile.jpg", "ball.png", "money.png"];
let playBtn = document.querySelector('.play-pause');
let fill = document.querySelector('.fill');
let time = document.querySelector('.time');

let audio = new Audio();
 

let counter = 2;



window.addEventListener('load', function(){
    audio.src = songs[counter];
    audio.play();
    audio.volume = 0.002;

    
});


playBtn.addEventListener('click', myfunction);


function myfunction() {
    if(audio.paused){
        audio.play();
        playBtn.innerHTML = '<i class="fa fa-pause"><i>';
    }
    else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa fa-play"><i>';
    }
}
audio.addEventListener('timeupdate', function(){
    let position = audio.currentTime / audio.duration * 100;
    fill.style.width = position + '%';
})

