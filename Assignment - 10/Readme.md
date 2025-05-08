
1. What is JavaScript?

    // JavaScript is a high-level, interpreted programming language commonly used in web development. 
    // It allows developers to create dynamic and interactive websites by manipulating HTML, CSS, and the DOM (Document Object Model). 
    // JavaScript runs on the client side (in the browser) and can also be used on the server side with technologies like Node.js.

2. Variables and Types:

    let userAge = 25; // Declare a variable named userAge and assign a numerical value
    let userName = "John Doe"; // Declare another variable named userName and assign a string value

    console.log(userAge); // Output the userAge variable
    console.log(userName); // Output the userName variable

 3. Comments in JavaScript:
 
     /* 
     This function below takes a name parameter and returns a greeting message. 
     It is useful for welcoming users by name in an application.
     */

4. Operations:

    let num1 = 10;
    let num2 = 5;

    // Perform basic operations
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

    console.log("Addition:", addition); // Output addition result
    console.log("Subtraction:", subtraction); // Output subtraction result
    console.log("Multiplication:", multiplication); // Output multiplication result
    console.log("Division:", division); // Output division result

5. Data Types:

    let str = "Hello, world!"; // String
    let num = 42; // Number
    let bool = true; // Boolean
    let arr = [1, 2, 3, 4, 5]; // Array

    console.log("String:", str);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("Array:", arr);

6. Functions in JavaScript:

    function greetUser(name) {
        return "Hello, " + name + "!";
    }
    console.log(greetUser("Alice")); // Call the function with a sample name and display the result

7. if-Else in JavaScript:

     let temperature = 35;
     if (temperature > 30) {
         console.log("It's hot outside!"); // Message if temperature is greater than 30
     } else {
         console.log("It's cool outside!"); // Message if temperature is 30 or lower
     }

8. FOR LOOP:

    for (let i = 1; i <= 5; i++) {
        console.log(i); // Print numbers from 1 to 5
    }

9. Loose vs Strict Equality:

    console.log(5 == "5"); // true, because "5" is converted to a number
    // Loose equality (==) allows type conversion before comparison:

    // Strict equality (===) checks both value and type:
    console.log(5 === "5"); // false, because the types are different (number vs string)
