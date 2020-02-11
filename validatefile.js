function validate()
    {
        var email=document.getElementById("email").value;
        var password=document.getElementById("pass").value;
        var Cpassword=document.getElementById("cpass").value;
        var first_name=document.getElementById("fname").value;
        var last_name=document.getElementById("lname").value;
        var zip=document.getElementById("zip").value;
        valid(email,password,Cpassword,first_name,last_name,zip);
    }

function  valid(email,password,Cpassword,first_name,last_name,zip)
{
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var first = /^[0-9]+$/;
    if(!email.match(mailformat))
    {
        alert("invalid email");
        document.getElementById("email").focus();
    }

    else if(password!=Cpassword)
    {
        alert("invalid");
        document.getElementById("pass").focus();
    }

    else if(!first_name.match(first)||first_name!="")
    {
        alert("invalid first name");
        document.getElementById("fname").focus();
    }

    else if(!first_name.match(first)||first_name!="")
    {
        alert("invalid last name");
        document.getElementById("lname").focus();
    }
    else if(!zip.match(zipCodePattern)||zip!="")
    {
        alert("invalid zip");
        document.getElementById("zip").focus();
    }
 
}

    