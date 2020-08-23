function akanName () {
  let monthOfBirth = document.getElementById("month").value;
  let dateOfBirth = document.getElementById("date").value;
  let yearOfBirth = document.getElementById("year").value;
  let gender = document.getElementsByName("gender").value;
}
//getting gender
function getGender () {
    if (gender.checked) {
        return gender.value;
    }else {
        alert("Input gender")
    }
}
 let genderValue = getGender();

//validate day
 function getDay () {
    if (dateOfBirth <= 0 || dateOfBirth > 31){
        return false;
    } else {
        return true;
    }
}
//validate month
function getMonth () {
    if (monthOfBirth <= 0 || monthOfBirth > 12){
        return false;
    }else{
        return true;
    }
}

//Calculate day of the week
/*let dayOfTheWeek = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7*/c
