// leapyear 

function Check_leapyear(){
    var leapyear = document.getElementById("year").value;
    if ((leapyear %4==0) && (leapyear %100!=0) || (leapyear %400==0)){
        alert(leapyear+" Is a leap year..");
    }
    else{
        alert(leapyear+" Is not a leap year..");
    }
}



// prime Number

var num, i, chk, temp;
function checkPrime()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    chk=0;
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    for(i=2; i<num; i++)
    {
      if(num%2==0)
      {
        chk++;
        break;
      }
    }
    if(chk==0)
      document.getElementById("res").innerHTML = "a Prime";
    else
      document.getElementById("res").innerHTML = "not a Prime";
  }
}

// switch statement
function myfunction(){
    var subject = document.getElementById("subject").value;

    switch (subject){
        case 'maths':
            alert("maths cutoff is 97");
            break;
        
            case 'physics':
            alert("physics cutoff is 80");
            break;

            case 'biology':
            alert("biology cutoff is 60");
            break;

            case 'zoology':
            alert("zoology cutoff is 90");
            break;

            case 'tamil':
            alert("tamil cutoff is 50");
            break;
     
    }
}

// //do  while

function fun_data(){
    var n= document.getElementById("nm").value;
    var text="";
    var i=1;
    do{
        document.write(i+ "<br>");
        i++;}

        while(i<=n);
    }
    document.getElementById("demo").innerHTML = text;



    // while
    function fun_num(){
      var n= document.getElementById("num").value
var i,j;
var n=prompt("enter the value of n");
i=1;
while(i<=10)
{
  j=n*i;
  document.write(n+ "*" + i + "="+j);
  document.write("<br>");
  i++;


}
    }
          
          






