/*Burger */
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header-body__menu');

burger.onclick = function() {
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
}
/*Player*/

const player = document.querySelector('.player');

const audio = document.querySelectorAll('.audio')[0];
let Seconds = 0;
let Minute = 0;
let TimePlayer = audio.duration


const MaxTimePlayer = () =>{
  while (TimePlayer >= 60) {
    TimePlayer -= 60;
    Minute +=1
  }
  Seconds = TimePlayer
}

audControl = document.querySelector('.player-progress'),
audio.addEventListener('input', function () {
  audio.currentTime = volumeControl.value;
}, false);

const playerTime = document.querySelector('.player-time');
let CurrentTime = audio.currentTime
const CurrentTimePlayer = () =>{
  while (CurrentTimePlayeer <= TimePlayer){

    player.innerHTML += `
    <div class="player-time">
      ${Math.round(audio.currentTime*100)/100} - 0${Minute}:${Math.floor(Seconds)}
    </div>
    
    `
  }
}
// CurrentTimePlayer();
MaxTimePlayer();

player.innerHTML += `
                   
                   <div value='play' class="player-btn">
                   <img src="../src/img/main/player-btn.svg" alt="" class="play-btn-img">
                   </div>
                   <input class="player-progress" type="range" min="0" max="10" step="0.01" value="0">
                   <div class="player-time">
                   ${Math.round(audio.currentTime*100)/100} - 0${Minute}:${Math.floor(Seconds)}
                  </div>
`


const playerBtn = document.querySelector('.player-btn');

playerBtn.addEventListener('click', function() {
  const audio = document.querySelector('.audio');
    if(audio.paused) {
        audio.play();
       
      } else {
        audio.pause();
      }
});
