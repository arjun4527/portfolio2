var nameError = document.getElementById('name-error');
var lastnameError = document.getElementById('lastname-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validatename(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML ='Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML= 'write your first name';
    return false;
  }
  nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validatelastname(){
  var lastname = document.getElementById('contact-lastname').value;

  if(lastname.length == 0){
    lastnameError.innerHTML ='Last Name is required';
    return false;
  }
  if(!lastname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    lastnameError.innerHTML= 'Last Name is required';
    return false;

  }
  lastnameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
  return true;
}  



function validatephone(){
  var phone = document.getElementById('contact-phone').value;

  if(phone.length==0){
    phoneError.innerHTML = 'phone no is required';
    return false;
  }
  if(phone.length!==10){
    phoneError.innerHTML='phone no should be 10 digits';
    return false;
  }
  if(!phone.match(/^[0-9]*$/)){
    phoneError.innerHTML='Only digits please';
    return false;
  }
  phoneError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
  return true;

}  



function validateemail(){
  var email = document.getElementById('contact-email').value;
    

  if(email.length==0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
 
  if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){                  // ^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    emailError.innerHTML= 'Email Invalid';
    return false;                   
  }

  emailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validatemessage(){
  var message = document.getElementById('contact-message').value;
  var required=15;
  var left= required - message.length;

  if(left>0){
      messageError.innerHTML= left + 'more character required';
      return false;

  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;


}


function validateform(){
  if(!validatename() || !validatelastname() || !validatephone() || !validateemail() || !validatemessage() ){
    submitError.style.display='block;'
    submitError.innerHTML = 'please fix error to submit';
    setTimeout(function(){submitError.style.display ="none";},3000);
    return false;
  }
}

