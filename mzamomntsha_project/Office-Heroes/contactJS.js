
function validateForm(){
const form= document.getElementById("form1");
const names= document.getElementById("names");
const phone= document.getElementById("phone");
const message= document.getElementById("message");

//show error function

function showError(input, message)
{

    const formControl=input.parentElement;
    formControl.className="form1-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;

}

//Show Success

function showSuccess(input)
{

    formControl=input.parentElement;
    formControl.className="form1-control success";
}

//email validation function

//function isvalidEmail(email){

    //const re=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //return re.test(email);
//}

//phone number validation function


function validatePhoneNumber(phone) {
    var phoneNum = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return phoneNum.test(phone);
  }


//Event listners

form.addEventListener("submit",function(e)
{

    e.preventDefault();

    if(names.value==="")
    {
        showError(names, "Full Name is required");
    }
    else{
        showSuccess(names);
    }


    //if(LastName.value==="")
    //{
        //showError(LastName, "LastName is required");
    //}
    //else{
        //showSuccess(LastName);
    //}


    
    //if(Email.value==="")
    //{
        //showError(Email, "Email is required");
    //}
    //else if(!isvalidEmail(Email.value)){
        //showError(Email, "Email is not valid");
    //}
        //else{
        //showSuccess(Email);
        //}
    


    if(phone.value==="")
    {
        showError(phone, "Phone Number is required");
    }
    else if(!validatePhoneNumber(phone.value)){
        showError(phone, "Invalid phone number");
 
    }
    else{
        showSuccess(phone);
    }

    if(message.value==="")
    {
        showError(message, "A message is required");
    }
    else{
        showSuccess(message);
    }
});
}

function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "oh45675@outlook.com",
    Password : "9913DEDBC48EAF416A8A4C45F16E21A2AB3B",
    To : 'oh45675@outlook.com',
    From : "oh45675@outlook.com",
    Subject : "New Message Enquiry",
    Body : "Name: " + document.getElementById("names").value 
                    //+ "<br> Email: " + document.getElementById("email").value
                    + "<br> Phone no: " + document.getElementById("phone").value 
                    + "<br> Message: " + document.getElementById("message").value
    });

    if (window.confirm("Message sent successfully! Go to Home page?")) {
                window.location.href = 'index.html';
    }
    else {
        window.location.href = 'contactUs.html';
    };


    }
