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


const audio = document.querySelector('.audio');
let MinuteMax = 0;
let SecondsMax = 0;

let Minute = 0;
let Seconds = 0;
let TimePlayer = audio.duration

/*---Нахождение максимальной длины аудио---*/
const MaxTimePlayer = () =>{
  while (TimePlayer >= 60) {
    TimePlayer -= 60;
    MinuteMax +=1
  }
  SecondsMax = TimePlayer
}

MaxTimePlayer()
/*-------------------*/

player.innerHTML += `
                   
                   <div value='play' class="player-btn">
                   <img src="../src/img/main/player-btn.svg" alt="" class="play-btn-img">
                   </div>
                   <input class="player-progress" type="range" min="0" max="10" step="0.01" value="0">
                   <div class="player-time">
                   <span class='CurrentTime'>00:00</span> - 0${MinuteMax}:${Math.floor(SecondsMax)}
                  </div>
`
/*---Пауза по кнопке---*/
const playerBtn = document.querySelector('.player-btn');

playerBtn.addEventListener('click', function() {
  const audio = document.querySelector('.audio');
    if(audio.paused) {
        audio.play();
        MaxTimePlayer();
        /*---счетчик по времени аудио---*/
        let CurrentTimePlayeer = document.querySelector('.CurrentTime');
        audio.ontimeupdate = function() {myFunction()};
        function myFunction() {
          while (audio.currentTime >= 60) {
            audio.currentTime -= 60;
            Minute +=1
          }
          Seconds = audio.currentTime 
          CurrentTimePlayeer.innerHTML = `0${Minute}:${Math.floor(Seconds)}`
        }
      } else {
        audio.pause();
      }
});

/*-------------------*/

