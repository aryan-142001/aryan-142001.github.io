var video1=document.getElementById('peaky')

console.log(video2)
var status='play'
function PauseAndPlay(){
    if(status=='play'){
        status='pause'
        video.pause()
        return
    }
    else{
        status='play'
        video.play()
        return
    }
}
video1.addEventListener('click',PauseAndPlay)
