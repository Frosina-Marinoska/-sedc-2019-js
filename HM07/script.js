let name1 = document.getElementById("name");
let lastname1 = document.getElementById("lastname");
let password1 = document.getElementById("password");
let email1 = document.getElementById("email");

let name_val ="" ;
let lastname_val ="";
let pass_val ="";
let email_val ="";

let inputsAll = document.getElementById("inputs");
console.log(inputsAll);


// ova e za input name
function inputName(name1, validNum){
 
    if(name1.length >= validNum){
        if(name_val &&  lastname_val && pass_val && email_val){
            document.getElementById("table1").innerHTML+= `<tr> <td>${name_val}</td> <td>${lastname_val}</td><td>${pass_val}</td><td>${email_val}</td></tr>`;
            name_val ="" ;
            lastname_val ="";
            pass_val ="";
            email_val ="";

        }
        console.log(name1);
     
     

    }else {
        console.log("eroor");
    } 
    
};





//za input name
name1.addEventListener("blur", function(){
    
    name_val = this.value;
    inputName(name_val, 4);
});

// za input lastname

lastname1.addEventListener("blur", function(){
    lastname_val = this.value; 
    inputName( lastname_val, 6);
});
// za input password
password1.addEventListener("blur", function(){
    pass_val = this.value;
   inputName(pass_val, 7);
});
email1.addEventListener("blur", function(){
    email_val = this.value;
     
    inputName(email_val, 10);
});

let butt = document.getElementsByTagName("button");
console.log(butt);
butt.addEventListener("click", function(){
            name1.innerText ="";
            lastname1.innerText ="";
            pass_val ="";
            email_val ="";


    
});



