function change(){
    document.getElementById("demo").innerHTML = 0;
    document.getElementById("article").readOnly=false;

}
function countword() {
    line = new Array;
    var word = 1;
    var vowels = 0;
    line = (document.getElementById("article").value);
    console.log(document.getElementById("article").value);
    var count = line.length;
    var cannot_type=0;
    if (count > 149) {
        //    document.getElementsByClassName(".alert").style.display="block";
        line=line.slice(0,150);
        count=line.length;
        
        document.getElementById("article").value=line;
        console.log(line);
        document.getElementById("article").readOnly=true;
        cannot_type=1;
        // console.log(line.slice(0,99));
        
    }
    if(cannot_type==1){
        alert("Cannot Type More Words");
    }
    
  

    document.getElementById("demo").innerHTML = count;
    // document.getElementById("word").innerHTML=word;
    // document.getElementById("vowels").innerHTML=vowels;          
}