var video = document.getElementById("videoPlayer");

//Función de play y pause, cambia los iconos
function comenzar() {
    if (video.paused) {

        video.play();
        document.getElementById("botonPlay").src="Image/reproductor/pausa.svg";
    } else {

        video.pause();
        document.getElementById("botonPlay").src="Image/reproductor/play.svg";
    }
}

//Función que reinicia el audio , cuando se reinicia tambien cambia el icono
function reiniciar() {
    video.currentTime = 0;

    if (video.paused) {
        video.play();
        document.getElementById("botonPlay").src="Image/reproductor/pausa.svg";
    }
}


function noVolumen() {
    video.volume = 0;

}

//Función que pone el volumen del video.
function ponerVolumen() {

    video.volume = 1;
}


var volumen= document.getElementById("volume");

//evento para que cada vez que se cambie el input cambie el volumen al valor del input
volumen.addEventListener("change",function(ev){
    video.volumen = ev.currentTarget.value;
},true);


//Función que vuelve 5 segundos para atrás el video
function retrasarVideo() {
    video.currentTime -= 5;
}

//Función que adelanta 5 segundos el video
function adelantarVideo() {
    video.currentTime+= 5;
}

//Función que pone a pantalla completa el video
function pantallaCompleta() {
    video.requestFullscreen();
}


//Se detiene el audio y lo restablece al segundo 0 , cambia el icono a play
function stop() {
    video.currentTime = 0;

    video.pause();
    document.getElementById("botonPlay").src="Image/reproductor/play.svg";

}


//Se aplica todo al momento de iniciar el script
window.onload = () => {
    document.getElementById('retrasarVideo').setAttribute('onclick', 'retrasarVideo()');
    document.getElementById('iniciar').setAttribute('onclick', 'comenzar()');
    document.getElementById('adelantarVideo').setAttribute('onclick', 'adelantarVideo()');
    document.getElementById('stop').setAttribute('onclick', 'stop()');
    document.getElementById('reiniciar').setAttribute('onclick', 'reiniciar()');
    document.getElementById('silenciarVolumen').setAttribute('onclick', 'noVolumen()');
    document.getElementById('pantallaCompleta').setAttribute('onclick', 'pantallaCompleta()');
    document.getElementById('disminuirVelocidad').setAttribute('onclick', 'disminuirVelocidad()');
    document.getElementById('aumentarVelocidad').setAttribute('onclick', 'aumentarVelocidad()');

}
