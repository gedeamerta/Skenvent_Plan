let phone = document.getElementById("phone");

let phoneMask = new IMask(phone, {
  mask: "0000 0000 0000",
  placeholder: "always"
});

$(() => {
  $("#showPassword").click(e => {
    e.preventDefault();
    // check type of pwd then change it
    let pwdType = $("#password").attr("type");
    $("#password").attr("type", pwdType == "password" ? "text" : "password");
    $("#showPassword").text(pwdType == "password" ? "hide" : "show");
  });

  $("#next-1").click(e => {
    e.preventDefault();

    if ($("#fullname").val() === "") {
      $("#fullname").addClass("--invalid");
      $("#err_fullname").text("This field can't be empty.");
      $(".ic_fullname").show();
    }
    if ($("#phone").val() === "") {
      $("#phone").addClass("--invalid");
      $("#err_phone").text("This field can't be empty.");
      $(".ic_phone").show();
      return false;
    } else {
      phoneMask.value = phoneMask.value.split(" ").join("");
      $("#phone").val(phoneMask.value);
      $("#err_fullname").text("");
      $("#err_phone").text("");
      $(".ic_fullname").hide();
      $(".ic_phone").hide();
      $("#fullname").removeClass("--invalid");
      $("#phone").removeClass("--invalid");
      $("#step-1").hide();
      $("#step-2").show();
      $(".progress-list:nth-child(2)").addClass("active");
    }
  });
  $("#prev-2").click(e => {
    e.preventDefault();
    $("#step-2").hide();
    $("#step-1").show();
    $(".progress-list:nth-child(2)").removeClass("active");
  });
  $("#next-2").click(e => {
    e.preventDefault();

    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ($("#email").val() === "") {
      $("#email").addClass("--invalid");
      $("#err_email").text("This field can't be empty.");
      $(".ic_email").show();
    }
    if ($("#username").val() === "") {
      $("#username").addClass("--invalid");
      $("#err_username").text("This field can't be empty.");
      $(".ic_username").show();
    }
    if (
      !emailReg.test($("#email").val()) ||
      emailReg.test($("#email").val()) === false
    ) {
      $("#email").addClass("--invalid");
      $("#err_email").text("Hey you entered an invalid email.");
      $(".ic_email").show();
    }
    if ($("#username").val().length < 2) {
      $("#username").addClass("--invalid");
      $("#err_username").text("Hey your username is too short.");
      $(".ic_username").show();
      return false;
    } else {
      $("#username").removeClass("--invalid");
      $("#email").removeClass("--invalid");
      $("#err_email").text("");
      $("#err_username").text("");
      $(".ic_username").hide();
      $(".ic_email").hide();
      $("#step-2").hide();
      $("#step-3").show();
      $(".progress-list:nth-child(3)").addClass("active");
    }
  });
  $("#prev-3").click(e => {
    e.preventDefault();

    $("#step-3").hide();
    $("#step-2").show();
    $(".progress-list:nth-child(3)").removeClass("active");
  });
  $("#next-3").click(e => {
    e.preventDefault();
    if (!$('input[name="gender"').is(":checked")) {
      $("#err_gender").text("Hey please choose your gender.");
      $(".ic_gender").show();
    }
    if ($("#address").val() === "") {
      $("#address").addClass("--invalid");
      $("#err_address").text("Hey fill your address please.");
      $(".ic_address").show();
    } else {
      $("#address").removeClass("--invalid");
      $("#err_gender").text("");
      $("#err_address").text("");
      $(".ic_address").hide();
      $(".ic_gender").hide();
      $("#step-3").hide();
      $("#step-4").show();
      $(".progress-list:nth-child(4)").addClass("active");
    }
  });
  $("#prev-4").click(e => {
    e.preventDefault();

    $("#step-4").hide();
    $("#step-3").show();
    $(".progress-list:nth-child(4)").removeClass("active");
  });
  $("#next-4").click(e => {
    e.preventDefault();

    if ($("#borndate").val() === "") {
      $("#borndate").addClass("--invalid");
      $("#err_borndate").text("Hey fill this field for me.");
      $(".ic_borndate").show();
    } else {
      $("#borndate").removeClass("--invalid");
      $("#err_borndate").text("");
      $(".ic_borndate").hide();

      $("#step-4").hide();
      $("#step-5").show();
      $(".progress-list:nth-child(5)").addClass("active");
    }
  });
  $("#prev-5").click(e => {
    e.preventDefault();

    $("#step-5").hide();
    $("#step-4").show();
    $(".progress-list:nth-child(5)").removeClass("active");
  });
  $("#multi").submit(e => {
    e.preventDefault();

    if ($("#password").val() === "") {
      $("#password").addClass("--invalid");
      $("#err_password").text("Hey your password field is still empty.");
      $(".ic_password").show();
    }
    if ($("#cpassword").val() === "") {
      $("#cpassword").addClass("--invalid");
      $("#err_cpassword").text("Hey this field to can't be empty.");
      $(".ic_cpassword").show();
    }
    if ($("#password").val().length <= 8) {
      $("#password").addClass("--invalid");
      $("#err_password").text(
        "Your password length is can't less than 8 for safety."
      );
      $(".ic_password").show();
    }
    if ($("#cpassword").val().length <= 8) {
      $("#cpassword").addClass("--invalid");
      $("#err_cpassword").text(
        "Your password length is can't less than 8 for safety."
      );
      $(".ic_cpassword").show();
    }
    if ($("#password").val() !== $("#cpassword").val()) {
      $("#password").addClass("--invalid");
      $("#cpassword").addClass("--invalid");
      $("#err_password").text("Password is not match.");
      $("#err_cpassword").text("Hey the confirmation password is not match.");
      $(".ic_password").show();
      $(".ic_cpassword").show();
    } else {
      $("#password").removeClass("--invalid");
      $("#cpassword").removeClass("--invalid");
      $("#err_password").text("");
      $("#err_cpassword").text("");
      $(".ic_password").hide();
      $(".ic_cpassword").hide();
      $("#multi").serialize();
    }
  });
});
