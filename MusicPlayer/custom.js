window.addEventListener("load", init);

function init(){
    audio = document.getElementById("audio");
    songCollection = document.getElementsByTagName('a');
    for(var i = 0; i<songCollection.length;i++){
        songCollection[i].addEventListener("click", playSong);
    }
}

function playSong(){
    types = ['.mp3','.ogg','.wav'];
    songName = event.srcElement.innerHTML;
    console.log(songName);
    audio.src = 'songs/'+songName+'.ogg';
    audio.play();
}