const form= document.getElementById("form");
const firstName= document.getElementById("FirstName");
const lastName= document.getElementById("LastName");
const emain= document.getElementById("Email");
const phone= document.getElementById("Phone");
const address= document.getElementById("Address");

//show error function

function showError(input, message)
{

    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;

}

//Show Success

function showSuccess(input)
{

    formControl=input.parentElement;
    formControl.className="form-control success";
}

//email validation function

function isvalidEmail(email){

    //const re=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);
}

//phone number validation function


function validatePhoneNumber(phone) {
    var phoneNum = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return phoneNum.test(phone);
  }


//Event listners

form.addEventListener("submit",function(e)
{

    e.preventDefault();

    if(FirstName.value==="")
    {
        showError(FirstName, "First Name is required");
    }
    else{
        showSuccess(FirstName);
    }


    if(LastName.value==="")
    {
        showError(LastName, "Last Name is required");
    }
    else{
        showSuccess(LastName);
    }


    
    if(Email.value==="")
    {
        showError(Email, "Email is required");
    }
    else if(!isvalidEmail(Email.value)){
        showError(Email, "Invalid email address");
    }
        else{
        showSuccess(Email);
        }
    


    if(Phone.value==="")
    {
        showError(Phone, "Phone number is required");
    }
    else if(!validatePhoneNumber(phone.value)){
        showError(phone, "Invalid phone number");
 
    }
    else{
        showSuccess(Phone);
    }

    if(Address.value==="")
    {
        showError(Address, "Address is required");
    }
    else{
        showSuccess(Address);
    }
});