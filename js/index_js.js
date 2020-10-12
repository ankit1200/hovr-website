function validateEmail(email) {
    var re = re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// $(document).ready(function () {
//     sendEmailForm();
// });

function sendEmailForm() {
    var trackingNumber = $("#trackingNumber").val().trim();
    var email = document.getElementById("trackingNumber");
    if(trackingNumber === "") {
        $("#trackingNumber").focus();
        console.log("Enter something!");
    } 
    else if(!validateEmail(trackingNumber)){
        $("#trackingNumber").focus();
        console.log("Enter a valid email");
    }
    else {
        try {
            console.log("something");
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "/" , //PUT URL HERE
                data: JSON.stringify({tracking_number: trackingNumber}),
                dataType : 'json',
                error: function(msg)
                {
                    alert(msg);
                    console.log("Error occured in here");
                }
              }).done(function( msg ) {
                  console.log("Success");
                  console.log(msg);
                  $('#trackingNumber').val('Thanks for subscribing!')
                  $('#trackingNumber').attr("disabled", true);
                  $('#submitTrackingNumber').attr("disabled", true);
            });
        }
        catch(error) {
            alert("Something went wrong, try again later.");
            console.log("Error occured");
            console.log(error);
        }
    }
}


$('#emailform').submit(function () {
 sendEmailForm();
 return false;
});

// var email = document.getElementById("trackingNumber");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I expect an e-mail!");
//   } else {
//     email.setCustomValidity("");
//   }
// });