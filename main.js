// 163. צרו פונקציה שמדפיסה לקונסול את התאריך והשעה בעת הפעלתה.

function printDateAndTime() {
  var myDate = new Date();
  console.log(myDate);
}
printDateAndTime();

// 164. צרו פונקציה המקבלת תאריך כסטרינג ומדפיסה לקונסול אובייקט
// Date עם אותו תאריך שהתקבל בפונקציה.

function getString(myDate) {
  myDate = new Date();
  console.log(myDate);
}
getString("may 23 2022");

// 165. צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג ומדפיסה לקונסול אובייקט של
// Date.

// function getNumFromUser() {
//     var userInput = prompt("Enter Date:",'an example:"may 23 2022"');
//     console.log(new Date(userInput));
// }
// getNumFromUser();

// 166. צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג ומחזיררה את החודש.

// function getDateAndPrintMonth() {
//     var userDate = new Date(prompt("Enter Date:"));
//     return userDate.getMonth();
// }
// getDateAndPrintMonth();

// 167 צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג ומחזירה את השעה.

// function getUserDateAndReturnHour() {
//     var userDate = new Date(prompt("Enter a Date:"));
//     return userDate.getHours();
// }

// getUserDateAndReturnHour();

// 168 צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג ומחזירה את השנה.

// function getUserDateAndReturnYear() {
//     var userDate = new Date(prompt("Enter a Date:"));
//     return userDate.getFullYear();
// }
// getUserDateAndReturnYear();

// 169 צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג ומחזירה את הדקות.

// function getUserDateAndReturnMinutes() {
//     var userDate = new Date(prompt("type a random date"));
//     return userDate.getMinutes();
// }
// getUserDateAndReturnMinutes();

// 171 צרו פונקציה הקולטת מהמשתמש תאריך כסטריג ומחזירה את הגיל שלו.

// function getUserDateAndReturnAge() {

//   var userDate = new Date(prompt("Enter a Date:"));
//   return new Date().getFullYear() - new Date(userDate).getFullYear();
// }

// getUserDateAndReturnAge();

// 172 צרו פונקציה הקולטת מהמשתמש תאריך כסטרינג, אם המשתמש מעל 18 היא מדפיסה alert
//  שהוא רשאי להיכנס אחרת מדפיסה הודעה שהמשתמש לא רשאי.

// function getUserDateAndPrint() {
//   var userDate = new Date(prompt("Enter your BirthDate:"));
//   var userAge = new Date().getFullYear() - new Date(userDate).getFullYear();
//   if (userAge > 18) {
//     alert("Allow to enter!");
//   } else {
//     alert("To small to enter!");
//   }
// }
// getUserDateAndPrint();

// 173 צרו פונקציה שיוצרת אובייקט של Date
//  ומדפיסה למסך את המיקום של המשתמש.

// function getUserDateAndPrintLocation() {
//   var myDate = new Date();
//   document.write(GeolocationCoordinates(myDate, myDate));
// }
// getUserDateAndPrintLocation();

// לא פתור!

// 174 צרו פונקציה שיוצרת תאריך רנדומלי בין 31/01/1990 ל 31/01/2022
// ומדפיסה את התוצאה.

function getRandomDate() {
  var month = Math.floor(Math.random() * (12 - 1) + 1);
  var day = Math.floor(Math.random() * (31 - 1) + 1);
  var year = Math.floor(Math.random() * (2022 - 1990) + 1);
  var strDate = month + "/" + day + "/" + year;
  var date = new Date(strDate);
  console.log(date);
  return date;
}
getRandomDate();
