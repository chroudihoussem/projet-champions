let contactt = document.getElementById("contactform");


let msg=document.getElementById("msg");
let name=document.getElementById("name");
let email=document.getElementById("email");


function send(){
    let nom=name.value;
    let mail=email.value;

    alert("Thank You For L'inscription Sir "+ nom+ " Your email :"+mail+" Validate")
}