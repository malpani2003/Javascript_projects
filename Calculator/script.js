function add(val) {
    exp = document.getElementById("display").value;
    exp = exp + val;
  

    document.getElementById("display").value = exp;
    // alert(document.getElementById("display").value);

}
function answer() {
    exp = document.getElementById("display").value;
    result = eval(exp);
    if(result){
        document.getElementById("display").value = result;

    }
    else{
        document.getElementById("display").value ="Error";

    }
    // console.log(result);

}
function empty(){
    document.getElementById("display").value ="";
}
function back(){
    exp = document.getElementById("display").value;
    len=exp.length;
    // alert(len);
    exp=exp.slice(0,(len-1));
    document.getElementById("display").value =exp;




}

