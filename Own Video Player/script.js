function video_play() {


    video = document.querySelector("#video");
    //    video.playbackRate=3.0;
    video.controls = false;

    alert("Video Start Playing");

    video.play();


}
function video_load() {


    video = document.querySelector("#video");
    //    video.playbackRate=3.0;
    video.controls = false;



    video.load();
    video_play();


}
function video_pause() {
    video = document.querySelector("#video");
    video.pause();
    alert("Video is Paused");
}
function play_on_press(event) {
    console.log(event.key);
    if ((event.key).toLowerCase() == 's') {
        video_play();
    }
    else if ((event.key).toLowerCase() == 'r') {
        video_load();
    }
    else if ((event.key).toLowerCase() == 'p') {
        video_pause();
    }

}


function video_start() {
    video = document.querySelector("#video");

    video.start();
}
function volume_change() {

    video = document.querySelector("#video");
    volume_value = document.querySelector("#volume").value;
    document.querySelector(".value").innerHTML = volume_value;
    volume_value = volume_value / 100;
    console.log(volume_value);
    video.volume = volume_value;



}
function spped_change() {
    speed = document.querySelector("#speed");
    speed_value = document.querySelector("#speed").value;
    speed_value = 2 * (speed_value / 100);
    document.querySelector(".value_speed").innerHTML = speed_value;
    console.log(speed_value);
    video.playbackRate = speed_value;
}
function display() {
    document.querySelector(".controls").style.display = "block";
}
function display_none() {
    document.querySelector(".controls").style.display = "none";
}

