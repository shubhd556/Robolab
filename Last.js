function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(!email.match(pattern)){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(password.length < 6)
    {
      text="Please Enter Atleast 6 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }