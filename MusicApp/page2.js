var video2=document.getElementById('theme')
video2.volume=0.3
var song_status='paused'
var status='play'

function PauseAndPlay(){
    if(status=='play'){
        status='pause'
        video2.pause()
        return
    }
    else{
        status='play'
        video2.play()
        return
    }
}
video2.addEventListener('click',PauseAndPlay)



function playaudio(){
    video2.pause()
    var song=new Audio('Songs/The Scientist - Coldplay.mp3')
    console.log(song_status)
    if(song_status=='paused'){
        song.play()
        song_status='playing'
        console.log(song_status)
        return
    }else{
        song.pause()
        song_status='paused'
        console.log(song_status)
        return
    }

    
    
}




var song_scientist=document.querySelector('.scientist')
console.log(song_scientist)
song_scientist.addEventListener('click',function(){
    playaudio()

})

var Playbutton=document.getElementById('play')


