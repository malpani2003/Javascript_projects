function hexconvertor(code) {
    var hex = Number(code).toString(16);  // convert to hex
    if (hex.length < 2) {
        hex = "0" + hex;
        return hex;
    }
    else {
        return hex;
    }

}
function change() {
    r = Math.ceil(Math.random() * 255);
    b = Math.ceil(Math.random() * 255);
    g = Math.ceil(Math.random() * 255);
    r = hexconvertor(r);
    g = hexconvertor(g);
    b = hexconvertor(b);
    hexcode = "#" + r + g + b;
    console.log(hexcode);
    document.querySelector(".hex_code").innerHTML=hexcode;
    document.querySelector(".color_box").style.backgroundColor = hexcode;
}