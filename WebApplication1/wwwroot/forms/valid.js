
 //function myfun(){
    
    
 //var name = document.forms["formmail"]["name"].value;
 //var email = document.forms["formmail"]["email"].value;
 //var phone = document.forms["formmail"]["phone"].value;
 //var ser = document.forms["formmail"]["subject"].value;
 //var msg = document.forms["formmail"]["message"].value;
 //var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 //var phonepattern = /^(\+91[\-\s]?)?[6-9]\d{9}$/ ;

 //document.getElementById("prob").innerHTML="";
 //document.getElementById("prob2").innerHTML="";
 //document.getElementById("prob3").innerHTML="";
 //document.getElementById("prob4").innerHTML="";
 //document.getElementById("prob5").innerHTML="";

 //let n = true;
 //let e = true;
 //let p = true;
 //let s = true;
 //let m = true;


 //if (name == "") {
 //    //alert("Enter the name");
 //    document.getElementById("prob").innerHTML="Field is required*";
 //    n=false;
 //    // return false;
 //} 
 // if (!emailPattern.test(email)) {
 //    //alert("Enter valid email");
 //    document.getElementById("prob2").innerHTML="Enter the correct Email*";
 //    e=false;
 //    // return false;
 //}
 // if (!phonepattern.test(phone)) {
 //    //alert("Enter valid number");
 //    document.getElementById("prob3").innerHTML="Give me correct number*";
 //    p = false;
 //    // return false;
 //}
 // if (ser == "") {
 //    //alert("Choose anyone option from services");
 //    document.getElementById("prob4").innerHTML="Choose anyone option*";
 //    // return false;
 //    s= false;
 //}
 //if (msg == "") {
 //    document.getElementById("prob5").innerHTML="Write something*";
 //    // return false;
 //    m = false;
 //}
 //if(n==true&&e==true&&p==true&&s==true&&m==true){
 //// alert("form submitted succesfully");
 //document.querySelector(".sent-message").classList.add("d-block");
 //setTimeout(function() {
 //    document.querySelector(".sent-message").classList.remove("d-block");
 //  }, 5000); 
 //document.forms["formmail"]["name"].value="";
 //document.forms["formmail"]["email"].value="";
 //document.forms["formmail"]["phone"].value="";
 //document.forms["formmail"]["subject"].value="";
 //document.forms["formmail"]["message"].value="";
 //return false;

 //}

 //return false;
 //}

$(document).ready(function(){

    $("#formmail").submit(function(event){
        
        event.preventDefault();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim(); 
        var phone = $("#phone").val().trim();
        var sub = $("#subject").val().trim();
        var msg = $("#message").val().trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phonepattern = /^(\+91[\-\s]?)?[6-9]\d{9}$/ ;
        $("#prob").text("");
        $("#prob2").text("");
        $("#prob3").text("");
        $("#prob4").text("");
        $("#prob5").text("");
        let n = true;
        let e = true;
        let p = true;
        let s = true;
        let m = true;


        if (name == "") {
                //alert("Enter the name");
                $("#prob").text("Enter the name*");
                n=false;
                // return false;
            }
        if (!emailPattern.test(email)) {
                //alert("Enter valid email");
                $("#prob2").text("Enter Valid Email*");
                // return false;
                e= false;
            }
        if (!phonepattern.test(phone)) {
                //alert("Enter valid number");
                $("#prob3").text("Enter Valid Phone number*");
                // return false;
                p = false;
        }
        if (sub == "") {
                //alert("Choose anyone option from services");
                $("#prob4").text("Choose anyone option from services*");
                // return false;
                s = false;
        }
        if (msg == "") {
                $("#prob5").text("Enter any message*");
                // return false;
                m= false;
            }
        if(n==true&&e==true&&p==true&&s==true&&m==true){
                // alert("form submitted succesfully");
                $(".sent-message").addClass("d-block");
                $("#name").val("");
                $("#email").val("");
                $("#phone").val("");
                $("#subject").val("");
                $("#message").val("");
                return false;
            }
    });

});