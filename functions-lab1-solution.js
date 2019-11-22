// Lab: Functions

// Define a `youRock` function that accepts a string argument of a name and returns a string using that name.

const youRock = function (name) {
    return name;
    } 

    youRock('Samar') // 'You rock Samar!'
    youRock('Sara') //'You rock Sara!'


// Define a `square` function that accepts a number argument and returns that number multipled by itself.

const square = function(num){ 
    return (num* num);
    }

    square(2) // 4
    square(3) // 9


// Define a `cube` function that accepts a number argument and returns that number raised to the third power.

const cube = function(num){ 
    return (num*num*num);
    }

    cube(2) // 8
    cube(3) // 27


// Define a `toTheFourth` function that accepts a number argument and returns that number raised to the fourth power.

const toTheFourth = function(num){ 
    return (num*num*num*num);
    }

    toTheFourth(2) // 16
    toTheFourth(3) // 81


// Extra Practice
// Write a function that will add, subtract, multiply or divide two numbers and return the answer 

const calculator = function(num1,num2,operation){
    if(isNaN(num1||num2)){
     return(`calculator only accepts numbers`);
   } else if (operation === "add"){
        return(num1 + num2);
      } else if (operation === "subtract"){
        return (num1 - num2);
      }else if (operation === "divide"){
         return(num1 / num2);
      }else if(operation === "multiply"){
        return(num1 * num2);
      }else{
         return ("calculator can only add, subtract, divide, or multiply")
      }
  } 

calculator(1, 2, "add") // should return 3 
calculator(1, 2, "subtract") // should return -1
calculator(1, 2, "divide") // should return .5
calculator(1, 2, "multiply") // should return 2
calculator(1, 2, "something else") // should return "calculator can only add, subtract, divide, or multiply
calculator("cat", 2, "add") // should return "calculator only accepts numbers"


// Lab: FizzBuzz Function
// Write a function that accepts an argument of a number
// If it is a multiple of 3, return “Fizz” instead of the number.
// If it is a multiple of 5, return “Buzz” instead of the number.
// If it is a multiple of both 3 and 5, return “FizzBuzz” instead of the number.
// Otherwise, return the number

function fizzBuzz(num1){

    let result = ""
    if(num1 % 3 == 0) {
      result += "Fizz"
      }
    if(num1 % 5 == 0) {
      result += "Buzz"
    }
    if(result == ''){
       result +=num1
       }
  
    return result
  }
  
    fizzBuzz(3) // Fizz
    fizzBuzz(15) // FizzBuzz
    fizzBuzz(7) // 7



// Lab: RainDrop Function
// Write a function that accepts an argument of a number
// the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
const rainDrop = function(num){
    let output='';
    if(num%3 ==0){
      output+= 'Pling';
    }
    if (num%5 ==0){
      output+='Plang';
    }
    if(num%7 ==0){
      output+='Plong';
    }
    return(output||num);
   }
   rainDrop(1755); // PlingPlang
   rainDrop(34) // 34
    rainDrop(28) // Plong

