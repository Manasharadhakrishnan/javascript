
//  to display date
function myFunction(){
    document.getElementById('demo').innerHTML = Date()
}

// to diplay year and month
function year(){
const d = new Date();
document.getElementById("demo1").innerHTML = d.getFullYear();
} 
function month(){   
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let month = months[d.getMonth()];
    document.getElementById("demo2").innerHTML = month;
}

// date function
function date(){
    var d = new Date();
    var date =d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var final_date = date + '/' + month  + '/' + year;
    document.getElementById("result") .innerHTML = final_date;

}




