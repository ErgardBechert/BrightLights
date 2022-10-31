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
let Minute = '00:00';
player.innerHTML = `
                    <audio  class="audio" >
                    <source   src="../BrightLights/src/audio/Bright Lights & Kaleena Zanders & Kandy - War For Love.mp3" type="audio/mp3">
                   </audio>
                   <div value='play' class="player-btn">
                   <img src="../BrightLights/src/img/main/player-btn.svg" alt="" class="play-btn-img">
                   </div>
                   <input class="player-progress" type="range" min="0" max="10" step="0.01" value="0">
                   <div class="player-time">
                   00:00 - ${Minute}
               </div>
`
const audio = document.querySelector('.audio');
const playerTime = document.querySelector('.player-time');
const playerBtn = document.querySelector('.player-btn');

playerBtn.addEventListener('click', function() {
    if(audio.paused) {
        audio.play();
        Minute = audio.duration 

        playerTime.innerHTML = `00:00 - 0${Minute}:00`
      } else {
        audio.pause();
   
      }
    
});
