$(document).ready(function() {
  $("#signinbutton").click(function() {
     $(".form .signin").show();
     $(".form .signup").hide();
     $("#signupbutton").addClass("btn-default");
     $("#signinbutton").addClass("btn-sm");
     $("#signinbutton").addClass("btn-success");
     $("#signupbutton").addClass("btn-xs");
 });
  $("#signupbutton").click(function() {
     $(".form .signup").css("display","block");
     $(".form .signin").css("display","none");
     $("#signupbutton").addClass("btn-lg");
     $("#signinbutton").addClass("btn-xs btn-default");
 });
 $("#firstname").change(function() {
    var firstname = document.getElementById("firstname").value;
    var nameCheck = /^[a-zA-Z ]+$/;
    if(!nameCheck.test(firstname)) {
      if ($("i").has("#validfirstaname")) {
        $("#validfirstaname").remove();
      }
      if ($("p").hasClass("validfirstname")) {
        $(".validfirstname").remove();
      }
      var validfirstname = $("<p>Name should contain only letters</p>");
      validfirstname.css("color","red");
      validfirstname.addClass("validfirstname");
      $("#firstname").after(validfirstname);
    } else {
        if ($("p").hasClass("validfirstname")) {
          $(".validfirstname").remove();
        }
        if ($("i").has("#validfirstname")) {
          $("#validfirstname").remove();
        }
        $("#firstname").after($('<i id="validfirstname" class="fa fa-check-circle"></i>'));
      }
  });
  $("#middlename").change(function() {
    var middlename = document.getElementById("middlename").value;
    var nameCheck = /^[a-zA-Z ]+$/;
    if(!nameCheck.test(middlename)) {
      if ($("i").has("#validmiddlename")) {
        $("#validmiddlename").remove();
      }
      if ($("p").hasClass("validmiddlename")) {
        $(".validmiddlename").remove();
      }
      var validmiddlename = $("<p>Enter valid middlename</p>");
      validmiddlename.css("color","red");
      validmiddlename.addClass("validmiddlename");
      $("#middlename").after(validmiddlename);
    } else {
        if ($("p").hasClass("validmiddlename")) {
          $(".validmiddlename").remove();
        }
        if ($("i").has("#validmiddlename")) {
          $("#validmiddlename").remove();
        }
       $("#middlename").after($('<i id="validmiddlename" class="fa fa-check-circle"></i>'));
     }
 });
 $("#surname").change(function() {
    var surname = document.getElementById("surname").value;
    var nameCheck = /^[a-zA-Z ]+$/;
    if(!nameCheck.test(surname)) {
      if ($("i").has("#validsurname")) {
        $("#validsurname").remove();
      }
      if ($("p").hasClass("validsurname")) {
        $(".validsurname").remove();
      }
      var validsurname = $("<p>Enter valid surname</p>");
      validsurname.css("color","red");
      validsurname.addClass("validsurname");
      $("#surname").after(validsurname);
    } else {
        if ($("p").hasClass("validsurname")) {
          $(".validsurname").remove();
        }
        if ($("i").has("#validsurname")) {
          $("#validsurname").remove();
        }
       $("#surname").after($('<i id="validsurname" class="fa fa-check-circle"></i>'));
     }
 });
 $("#mobilenumber").change(function() {
   var mobilenumber = document.getElementById("mobilenumber").value;
   var mobilecheck = /^[9/8/7][0-9]{9}$/;
   if(!mobilecheck.test(mobilenumber)) {
     var validnumber = $("<p>Please enter  a valid mobilenumber</p>");
     validnumber.css("color","red");
     validnumber.addClass("validnumber");
     if ($("i").has("#validnumber")) {
       $("#validnumber").remove();
     }
     if ($("p").hasClass("validnumber")) {
       $(".validnumber").remove();
     }
     $("#mobilenumber").after(validnumber);
   } else {
      if ($("p").hasClass("validnumber")) {
       $(".validnumber").remove();
      }
      if ($("i").has("#validnumber")) {
       $("#validnumber").remove();
      }
      $("#mobilenumber").after($('<i id="validnumber" class="fa fa-check-circle"></i>'));
    }
  });
  $("#email").change(function() {
    var email = document.getElementById("email").value;
    var emailcheck = /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/;
    if(!emailcheck.test(email)) {
      var validemail = $("<p>Please enter  a valid mailid</p>");
      validemail.css("color","red");
      validemail.addClass("validemail");
      if ($("i").has("#validemail")) {
       $("#validemail").remove();
      }
      if ($("p").hasClass("validemail")) {
       $(".validemail").remove();
      }
      $("#email").after(validemail);
    } else {
       if ($("p").hasClass("validemail")) {
        $(".validemail").remove();
       }
       if ($("i").has("#validemail")) {
        $("#validemail").remove();
       }
       $("#email").after($('<i id="validemail" class="fa fa-check-circle"></i>'));
     }
 });
 $("#password").keyup(function() {
    var password = document.getElementById("password").value;
    var passwordcheck = /^[A-Z.@_a-z]$/;
    if (password.length <= 3) {
      var validpassword = $("<p><strong>Password Strength:</strong>Too short</p>");
      validpassword.css("color","maroon");
      validpassword.addClass("validpassword");
      if ($("i").has("#validpassword")) {
         $("#validpassword").remove();
      }
      if ($("p").hasClass("validpassword")) {
          $(".validpassword").remove();
      }
      $("#password").after(validpassword);
    } else if(password.length >= 4 && password.length <= 6) {
          var validpassword = $("<p><strong>Password Strength:</strong>Good</p>");
          validpassword.css("color","#33a0ff");
          validpassword.addClass("validpassword");
          if ($("i").has("#validpassword")) {
            $("#validpassword").remove();
          }
          if ($("p").hasClass("validpassword")) {
            $(".validpassword").remove();
          }
          $("#password").after(validpassword);
      } else if(password.length >= 8) {
            var validpassword = $("<p><strong>Password Strength:</strong>Strong</p>");
            validpassword.css("color","green");
            validpassword.addClass("validpassword");
            if ($("i").has("#validpassword")) {
              $("#validpassword").remove();
            }
            if ($("p").hasClass("validpassword")) {
              $(".validpassword").remove();
            }
            $("#password").after(validpassword);
        }
 });
 $("#password").change(function() {
    var password = document.getElementById("password").value;
    var passwordcheck = /^[A-Z.@_a-z0-9]{5,20}$/;
    if (password.length < 5) {
      var validpassword = $("<p>Use atleast 8 characters</p>");
      validpassword.css("color","red");
      validpassword.addClass("validpassword");
      if ($("i").has("#validpassword")) {
         $("#validpassword").remove();
      }
      if ($("p").hasClass("validpassword")) {
         $(".validpassword").remove();
      }
      $("#password").after(validpassword);
    } else if(!passwordcheck.test(password)) {
         var validpassword = $("<p>Please enter  a valid password</p>");
         validpassword.css("color","red");
         validpassword.addClass("validpassword");
         if ($("i").has("#validpassword")) {
          $("#validpassword").remove();
         }
         if ($("p").hasClass("validpassword")) {
          $(".validpassword").remove();
         }
         $("#password").after(validpassword);
      } else {
          if ($("p").hasClass("validpassword")) {
           $(".validpassword").remove();
          }
          if ($("i").has("#validpassword")) {
           $("#validpassword").remove();
          }
          $("#password").after($('<i id="validpassword" class="fa fa-check-circle"></i>'));
        }
 });
 $("#confirmpassword").change(function() {
    var confirmpassword = document.getElementById("confirmpassword").value;
    var password = document.getElementById("password").value;
    if (password !== confirmpassword) {
        var validconfirmpassword = $("<p>Passwords donot match.Try again!</p>");
        validconfirmpassword.css("color","red");
        validconfirmpassword.addClass("validconfirmpassword");
        if ($("i").has("#validconfirmpassword")) {
          $("#validconfirmpassword").remove();
        }
        if ($("p").hasClass("validconfirmpassword")) {
          $(".validconfirmpassword").remove();
        }
        $("#confirmpassword").after(validconfirmpassword);
  } else {
        if ($("p").hasClass("validconfirmpassword")) {
          $(".validconfirmpassword").remove();
        }
        if ($("i").has("#validconfirmpassword")) {
          $("#validconfirmpassword").remove();
        }
        $("#confirmpassword").after($('<i id="validconfirmpassword" class="fa fa-check-circle"></i>'));
    }
 });
 $("#registerbutton").click(function() {
    var validate = document.querySelectorAll(".signup input");
    var labelcount = document.querySelectorAll(".signup label");
    for (var i = 0;i < validate.length;i++) {
        if(validate[i].value === "") {
            if (i !== 1) {
              $('#' + validate[i].id + '').next().remove();
              var validform = $("<p>You can't leave this empty</p>");
              validform.css("color","red");
              validform.addClass("validform");
              $('#' + validate[i].id + '').after(validform);
            }
        } else {
          var formdetails = $("<div style='color:white'>Your details have been <strong>SUCCESSFULLY</strong>saved!!!</div>");
          $(".signup").hide();
          $("body").append(formdetails);
          $(".container").show();
        }
    }
  });
});
