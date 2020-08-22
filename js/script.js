function akanName () {
  let monthOfBirth = document.getElementById("month").value;
  let dateOfBirth = document.getElementById("date").value;
  let yearOfBirth = document.getElementById("year").value;
  let gender = document.getElementsByName("gender");
}
//Calculate day of the week
let dayOfTheWeek = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7