//define seterror function
function seterror(id, error)
{

    element = document.getElementById(id);      //define element
    element.getElementsByClassName('errorMsg')[0].innerHTML = 
    error;       //where set error
}

//clear form error
function clearErrors()
{
    let errors = document.getElementsByClassName('errorMsg');   //define error classes  for all elements in the form 
    for(let item of errors)
        {
            item.innerHTML = "";    //remove the error from the form
        }
}


//validateform function
function validateForm()
{
    let returnVal = true;   //set default return value
    clearErrors();          //clear errors from form

    //name validation
    let name = document.forms['myForm']['fname'].value;     //getting form value
    if(name.length < 5)
     {
        seterror("name", "too short");
        element.getElementsByClassName('errorMsg')[0].style.color = 'red';
        document.getElementById('fname').style.border = "1px solid red";

        returnVal = false; 
     }  
     else
     {
        document.getElementById('fname').style.border = "1px solid green";
        // document.getElementById('icon-img').src = "check-mark.svg";


     }

    //email validation
    let email = document.forms['myForm']['femail'].value;     //getting form value
    if(email.length > 15)
    {
        seterror("email", "too long");
        element.getElementsByClassName('errorMsg')[0].style.color = 'red';
        document.getElementById('femail').style.border = "1px solid red";

        returnVal = false; 
    } 
    else
     {
        document.getElementById('femail').style.border = "1px solid green";

     }

     //phone validation
     let phone = document.forms['myForm']['fphone'].value;     //getting form value
     if(phone.length != 10)
      {
         seterror("phone", "phone number must be 10 characters long");
         element.getElementsByClassName('errorMsg')[0].style.color = 'red';
         document.getElementById('fphone').style.border = "1px solid red";
 
         returnVal = false; 
      } 
      else
     {
        document.getElementById('fphone').style.border = "1px solid green";

     }

     //password validation
     let password = document.forms['myForm']['fpassword'].value;     //getting form value

    //set password field values based on password field values
     let hasCharacter = /[a-zA-Z]/.test(password);      //character value
     let hasNumber = /\d/.test(password);               //number value
     let hasCapital = /[A-Z]/.test(password);           //capital value
     let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);  //special value

    if(password.length < 6)
    {
            seterror("password", "password must be at least 6 characters long ");
            element.getElementsByClassName('errorMsg')[0].style.color = 'red';
            document.getElementById('fpassword').style.border = "1px solid red";
    
            returnVal = false; 
    }
    else  if(!hasCharacter || !hasNumber || !hasCapital || !hasSpecial)
    {
        seterror("password", "Password must contain at least one character, one number,  one capital letter and one special character.");
        element.getElementsByClassName('errorMsg')[0].style.color = 'red';
        document.getElementById('fpassword').style.border = "1px solid red";
        returnVal = false;
    } 
      
    else
    {
        document.getElementById('fpassword').style.border = "1px solid green";
    }
     


    return returnVal;


}
