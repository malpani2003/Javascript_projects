let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let category = document.getElementById("category");


function get_quote(){
    const url = "https://api.quotable.io/random";
    const createRequest = function (url) {
        const xhttp = new XMLHttpRequest(url);
        xhttp.addEventListener("readystatechange", function (url) {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                data=xhttp.responseText;
                data=JSON.parse(data);
                // console.log(data);
                 quote.innerText=`" ${data["content"]} "`;
                 author.innerText= `-  ${data["author"]}`;
                //  len=data["tags"].length;
                 category.innerText=data["tags"];

                // document.write(xhttp.responseText);
            }


        });
        xhttp.open("GET", url);
        xhttp.send();
    };

    createRequest(url);
}

window.addEventListener("load", get_quote);
// btn.addEventListener("click", getQuote);