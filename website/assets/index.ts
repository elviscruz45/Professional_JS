// Importing MediaPlayer class and AutoPlay,AutoPause pluggins
import MediaPlayer from "../../mediaplayer/src/MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"
import Ads from "./plugins/Ads"

//Selecting HTML nodes
const video = document.querySelector('video');
const playbutton:HTMLElement = document.querySelector('#playButton')!;
const muteButton:HTMLElement=document.querySelector("#muteButton")!;

//Creating object that bind video Node and plugins objects
const player = new MediaPlayer({ el: video,plugins:[new AutoPlay(),new AutoPause(),new Ads()]});

//handle the click botton
playbutton.onclick = () => player.togglePlay();
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

