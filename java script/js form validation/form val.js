let list=[];
let valuarry = []; 

function validate() {
    const names = document.getElementById("name").value;
    const fathername = document.getElementById("fathername").value;
    const email = document.getElementById("email").value;
    const dateofbirth = document.getElementById("dateofbirth").value;
    const radio = document.querySelector('input[name="gender"]:checked');
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;

    var selected = new Array();
    var language = document.getElementById("lan");
    var chks = language.getElementsByTagName("INPUT");

    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    if (names == "") {
        document.getElementById("error1").innerHTML = "* Please Enter Your Name";
    } else {
        document.getElementById("error1").innerHTML = "";
    }
    if (fathername == "") {
        document.getElementById("error2").innerHTML = "* Please Enter Your Fathername";
    } else {
        document.getElementById("error2").innerHTML = "";
    }
    if (number.match(phoneNum)) {
        document.getElementById("error3").innerHTML = "";
    }
    else {
        document.getElementById("error3").innerHTML = "You must enter your phone Number";
    }
    if (isValidEmail(email) == "") {
        document.getElementById("error4").innerHTML = "* Please Enter Your Email";
    } else {
        document.getElementById("error4").innerHTML = "";
    }
    if (dateofbirth == "") {
        document.getElementById("error5").innerHTML = "* Please Enter Your Dateofbirth";
    } else {
        document.getElementById("error5").innerHTML = "";
    }
    if (radio) {
        document.getElementById("error6").innerHTML = "";
    } else {
        document.getElementById("error6").innerHTML = "You must select a gender";
    }
    if (address=="") {
        document.getElementById("error8").innerHTML = "You must enter your address";
    } else {
        document.getElementById("error8").innerHTML = "";
    }

for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
        selected.push(chks[i].value);
    }
}
if (selected.length > 0) {
    document.getElementById("error7").innerHTML = "";
} else {
    document.getElementById("error7").innerHTML = "You must select the language";
}
 var registration = { 'name': names, 'fathername': fathername, 'dob': dateofbirth, 'email': email, 'number': number, 'address': address, 'language' : selected ,'gender': radio.value}

console.log(registration);

if (names && fathername && dateofbirth && email && number && address && selected && radio) {
        list.push(registration);
        console.log(valuarry);
        localStorage.setItem("registrationvalue", JSON.stringify(list))
        buildTable()
    }
    else {
        console.log("");
    }


}
function buildTable(){
    let row = "";
    debugger
    list = JSON.parse(localStorage.getItem("registrationvalue"));
    console.log(list)
    for (var i = 0; i < list.length; i++) {

        row += `<tr>
<td>${list[i].name}</td>
<td>${list[i].fathername}</td>
<td>${list[i].number}</td>
<td>${list[i].email}</td>
<td>${list[i].dob}</td>
<td>${list[i].gender}</td>
<td>${list[i].language}</td>
<td>${list[i].address}</td>
</tr>`
    }
    document.getElementById("mytable").innerHTML = row;
}
