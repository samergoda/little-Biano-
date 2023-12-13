alert('Please press one of this letter or click them 😀😘')
const key = document.querySelectorAll('.key');
key.forEach(key=>key.addEventListener('transitionend',function(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('playing')
}))

function playingAudio(e){
    // when click
    const code =e.target.closest('.key');
    // console.log(code.dataset.key)
    // when press
    const keyCode = e.keyCode
    const audio = document.querySelector(`audio[data-key="${keyCode||code.dataset.key}"]`)
    const key = document.querySelector(`div[data-key="${keyCode}"]`)
    if(!audio) return
    audio.currentTime=0;
    audio.play()
    code?.classList.add('playing');
    key?.classList.add('playing');
    navigator.vibrate(200)
}
document.addEventListener('keydown',playingAudio)
document.addEventListener('click',playingAudio)
