// 13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

//     - The same groups apply to both men and women.
//     - _Underweight_: BMI is less than 18.5
//     - _Normal weight_: BMI is 18.5 to 24.9
//     - _Overweight_: BMI is 25 to 29.9
//     - _Obese_: BMI is 30 or more

function calcBMI (weight, height) {
  let BMI = weight / (height * height);
   let roundedBMI = Number(BMI.toFixed(1));;
  
  if (roundedBMI < 18.5) {
    console.log(`You're underweight, your BMI is ${roundedBMI}.`)
  } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
    console.log(`You have normal weight, your BMI is ${roundedBMI}.`)
  } else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
    console.log(`You're overweight, your BMI is ${roundedBMI}.`)
  } else if (roundedBMI >= 30) {
    console.log(`You're obese, your BMI is ${roundedBMI}.`)
}
return roundedBMI;
}

// console.log(calcBMI(55, 1.63))

// 14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason (month) {
  if (month === 'December' || month === 'January' || month ===  'February') {
    console.log('Winter');
  } else if (month === 'March' || month ===  'April' || month ===  'May') {
    console.log('Spring');
  } else if (month === 'June' || month ===  'July' || month ===  'August') {
    console.log('Summer');
  } else if (month === 'September' || month === 'October' || month ===  'November') {
    console.log('Autumn');
  }
}
// checkSeason('August');

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//     ```js
//     console.log(findMax(0, 10, 5))
//     10
//     console.log(findMax(0, -10, -2))
//     0
//     ```

function findMax (a, b, c) {
 let max = a;
if (b > max) {
  max = b;
}
if (c > max){
  max = c;
}
return max;
}
// console.log(findMax(5, 7, 71));