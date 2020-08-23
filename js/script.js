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
let date = getDay();

//validate month
function getMonth () {
    if (monthOfBirth <= 0 || monthOfBirth > 12){
        return false;
    }else{
        return true;
    }
}
let month = getMonth();

//Calculate birth day
let dayOfTheWeek = Math.floor(((yearOfBirth.slice(0,2)/4)-2*yearOfBirth.slice(0,2)-1)+((5*yearOfBirth.slice(2)/4))+((26*(monthOfBirth+1)/10))+dateOfBirth)%7

//arrays of names
let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let maleAkanNames = ["Kwasi", "Kwadwa", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

//getting result
if (genderValue==="female" && month && date){
    switch(dayOfTheWeek){
      case 0:
        document.getElementById("result").textContent ="Your Akan name is" + femaleAkanNames[0] 
      break;
      case 1:
        document.getElementById("result").textContent ="YourAkan name is" + femaleAkanNames[1]
      break;
      case 2:
        document.getElementById("result").textContent ="YourAkan name is" + femaleAkanNames[2]
      break;
      case 3:
        document.getElementById("result").textContent ="YourAkan name is" + femaleAkanNames[3]
      break;
      case 4:
        document.getElementById("result").textContent ="YourAkan name is" + femaleAkanNames[4]
      break; 
      case 5:
        document.getElementById("result").textContent ="YourAkan name is" + femaleAkanNames[5]
      break; 
      case 6:
        document.getElementById("result").textContent ="YourAkan name is" + femaleAkanNames[6]
      break;
      default:
        document.getElementById("result").textContent ="Invalid information";
    }
}