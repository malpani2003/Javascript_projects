function w() {
    var audio = new Audio('crash.mp3');
    audio.loop = false;
    audio.play();
    console.log("w sound")
}

function a() {
    var audio = new Audio('snare.mp3');
    audio.loop = false;
    audio.play();
    console.log("a sound")
}
function s() {
    var audio = new Audio('tom-1.mp3');
    audio.loop = false;
    audio.play();
    console.log("a sound")
}
function d() {
    var audio = new Audio('tom-2.mp3');
    audio.loop = false;
    audio.play();
    console.log("a sound")
}
function j() {
    var audio = new Audio('tom-3.mp3');
    audio.loop = false;
    audio.play();
    console.log("a sound")
}
function k() {
    var audio = new Audio('tom-4.mp3');
    audio.loop = false;
    audio.play();
    console.log("a sound")
}
function l() {
    var audio = new Audio('kick-bass.mp3');
    audio.loop = false;
    audio.play();
    console.log("a sound")
}

$(document).on("keypress", function (event) {
    // console.log(event.key);
     event.key=(event.key).toLowerCase();
    if (event.key == "w") {
        w();
    }
    else if (event.key == "l") {
        l();
    }
    else if (event.key == "a") {
        a();
    }
    else if (event.key == "s") {
        s();
    }
    else if (event.key == "d") {
        d();
    }
    else if (event.key == "j") {
        j();
    }
    else if (event.key == "k") {
        k();
    }
    else{
        alert("Wrong key entered  " + event.key)
    }

});