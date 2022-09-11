function clock(){

    var today=new Date();
    // console.log(today);
    var date=today.getDate();
    var month=today.getMonth();
    var year=today.getFullYear();
    var hour=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
    var day=today.getDay();
//    alert(typeof(today.getDate()));
     
    // clock=today.getDate() + today.getMonth();
    // alert(clock);
    // document.write(date);
    document.querySelector(".date").innerHTML=today;
    document.querySelector(".date").innerHTML=date;
    if(month==0){
        month="Jan";
    }
    else if(month==1){
        month="Feb";
    }
    else if(month==2){
        month="Mar";
    }
    else if(month==3){
        month="April";
    }
    else if(month==4){
        month="May";
    }
    else if(month==5){
        month="June";
    }
    else if(month==6){
        month="July";
    }
    else if(month==6){
        month="July";
    }
    else if(month==7){
        month="August";
    }
    else if(month==8){
        month="September";
    }
    else if(month==9){
        month="October";
    }
    else if(month==10){
        month="November";
    }
    else{
        month="December";
    }
    document.querySelector(".Month").innerHTML=month;
    document.querySelector(".year").innerHTML=year;
   
    document.querySelector(".hour").innerHTML=hour;
    
    document.querySelector(".minute").innerHTML=min;
    document.querySelector(".sec").innerHTML=sec;
    if(day==0)
    {
        day="Sunday";
    }
    else if(day==1){
        day="Monday";
    }
    else if(day==2){
        day="Tuesday";
    }
    else if(day==3){
        day="Wednesday";
    }
    else if(day==4){
        day="Thursday";
    }
    else if(day==5){
        day="Friday";
    }
    else{
        day="Saturday";
    }

    document.querySelector(".day").innerHTML=day;

    


}


setInterval(clock,1000);

