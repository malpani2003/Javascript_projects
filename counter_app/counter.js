function upcount() {
    pervious_value = document.getElementById("counter").innerText;
    new_value = parseInt(pervious_value) + 1;
    document.getElementById("counter").innerText = new_value;
}
function downcount() {
    pervious_value = document.getElementById("counter").innerText;
    new_value = parseInt(pervious_value) - 1;
    if (new_value < 0) {
        new_value = 0;
    }
    document.getElementById("counter").innerText = new_value;

}
function reset() {
    document.getElementById("counter").innerText = 0;
}