// Ticket price
const age = parseInt(prompt("Enter your age:"));

if(isNaN(age) || age < 0){
    console.log ("Invalid age");
    }
else if (age <= 12){
    console.log("Ticket price is $10");
}
else if (age >=13 && age <=17 ){
    console.log("Ticket price is $15");
}
else if(age >= 18){
    console.log("Ticket price is $20");
}

// Prompt the user for the current temperature
const temperature = parseFloat(prompt("Enter the current temperature in degrees Celsius:"));

// Prompt the user for whether it is raining
const isRaining = prompt("Is it raining? (yes/no)").toLowerCase();

// Determine clothing advice based on temperature and rain status
let clothingAdvice;

if (isNaN(temperature) || (isRaining !== 'yes' && isRaining !== 'no')) {
    clothingAdvice = "Invalid input. Please enter a valid temperature and rain status.";
} else if (temperature < 0) {
    clothingAdvice = "It's freezing! Wear a heavy winter coat, gloves, and a hat. Also, be sure to wear waterproof boots if it's raining.";
} else if (temperature >= 0 && temperature < 10) {
    clothingAdvice = "It's quite cold. Wear a warm coat and layer up. Don't forget an umbrella if it's raining.";
} else if (temperature >= 10 && temperature < 20) {
    clothingAdvice = "It's a bit chilly. A light jacket or sweater should be fine. Bring an umbrella if it's raining.";
} else if (temperature >= 20 && temperature < 30) {
    clothingAdvice = "It's warm. Wear comfortable clothes. If it's raining, a light raincoat or umbrella will help.";
} else if (temperature >= 30) {
    clothingAdvice = "It's hot. Wear light and breathable clothing. Stay hydrated and use sunscreen. If it's raining, a raincoat might still be necessary.";
}

// Display the clothing advice
console.log(clothingAdvice);

// power function
function power(base, exponent){
  
 if(exponent == 0){
        return 1 }
 else if(exponent == 1){
        return base }
 else if (exponent > 1){
        return base * power(base, exponent - 1)}
else{
        return 1 / power(base, -exponent)}

}

// palindrome function
function isPalindrome(str) {
    // Helper function to preprocess the string
    function preprocess(s) {
        // Remove punctuation and spaces, and convert to lowercase
        return s
            .replace(/[^a-zA-Z0-9]/g, '')  // Remove non-alphanumeric characters
            .toLowerCase();                // Convert to lowercase
    }

    // Recursive function to check palindrome
    function checkPalindrome(s, left, right) {
        // Base case: if left index >= right index, the string is a palindrome
        if (left >= right) {
            return true;
        }
        // Recursive case: check the characters at left and right
        if (s[left] !== s[right]) {
            return false;
        }
        // Move towards the middle
        return checkPalindrome(s, left + 1, right - 1);
    }

    // Preprocess the input string
    const sanitizedStr = preprocess(str);
    // Check palindrome
    return checkPalindrome(sanitizedStr, 0, sanitizedStr.length - 1);
}
