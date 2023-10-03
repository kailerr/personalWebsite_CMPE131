
function passwordCheck() {
    var password = "frankbutt";
    var entered = document.forms["password"]["pass"].value;

    if (entered === password) {
        document.getElementById("reveal").style.display = "block";
        return false;
    }
    else {
        alert("Wrong password.");
        return false;

    }

}


function redirect() {
    let proj = document.forms["myForm"]["project"].value;
    window.location.href = proj;
}




