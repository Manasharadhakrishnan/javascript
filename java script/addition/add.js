
function reset(){
    document.getElementById("txtNum1").value;
    document.getElementById("txtNum2").value;
}

function myFunction(){
   var num1 = Number( document.getElementById("txtNum1").value);
   var num2 = Number( document.getElementById("txtNum2").value);
   var add = num1 + num2;
   document.getElementById("demo").innerHTML = add;
}

function subtraction(){
   var num1 = Number( document.getElementById("txtNum1").value);
   var num2 = Number( document.getElementById("txtNum2").value);
   var sub = num1 - num2;
   document.getElementById("demo1").innerHTML = sub;
}

function multiplication(){
    var num1 = Number( document.getElementById("txtNum1").value);
    var num2 = Number( document.getElementById("txtNum2").value);
    var mul = num1 * num2;
    document.getElementById("demo2").innerHTML = mul;
}

function division(){
    var num1 = Number( document.getElementById("txtNum1").value);
    var num2 = Number( document.getElementById("txtNum2").value);
    var div = num1 / num2;
    document.getElementById("demo3").innerHTML = div;
}

// logical comparison

function comparison() {
        X=document.getElementById("num1").value;
        Y=document.getElementById("num2").value;
    
    if (X<Y) {
      greeting = " x is  Less than y";
        document.getElementById("demo4").innerHTML = greeting;
    }
    else
    if(X>Y) {
      greeting = " x is Greater than y";
      document.getElementById("demo4").innerHTML = greeting;
    }
    else
    if(X=Y) {
      greeting = " x is Equal to y";
      document.getElementById("demo4").innerHTML = greeting;
    }
    
}