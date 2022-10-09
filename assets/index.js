// Importing MediaPlayer class and AutoPlay,AutoPause pluggins
import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

//Selecting HTML nodes
const video = document.querySelector('video');
const button = document.querySelector('button');
const muteButton=document.querySelector("#muteButton")

//Creating object that bind video Node and plugins objects
const player = new MediaPlayer({ el: video,plugins:[new AutoPlay(),new AutoPause()]});

//handle the click botton
button.onclick = () => player.togglePlay();
muteButton.onclick=()=>{
    if(player.media.muted){
        player.unmute()
    }else{
        player.mute()
    }
}

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/sw.js").catch(error=>{
        console.log(error.message);
    })
}