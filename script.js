// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  // Declaring password length variable, checking the prompt & alert function and 
  // consologing to verify and and calling the function with [getPasswordOptions()]
  // parseInt() is used to converts a string to an integer. 
  // (isNaN())This will consolog and convert to "NaN" Not-a-Number if something else is entered other than a number 
  // Creates a prompt box which takes the user text input.

  function getPasswordOptions() {
    var passwordlength = parseInt(prompt("How many characters do you want in your password?"));
    if (passwordlength < 8 || passwordlength > 128 ){ 
        // Alerts user to input correct data.
        alert("Please enter a number greater than 8 or less than 128");
       return;
      } 
      // This will check if the user input is not a number and prompt user to enter a number
      if (isNaN(passwordlength)){
        alert("Please enter a number greater than 8 or less than 128");
        return;
      }

      var lowerCaseConfirmation = confirm("Do you want to have lower case characters in your Password?")
      var upperCaseConfirmation = confirm("Do you want to have UPPERCASE characters in your Password?")
      var numericConfirmation = confirm("Do you want to have Numeric characters in your Password?")
      var specialCharactersConfirmation = confirm("Do you want to have Special characters in your Password?")


// This console.log is testing if thing are working correctly in the browser console
  console.log(passwordlength)
  console.log(lowerCaseConfirmation)
  console.log(upperCaseConfirmation)
  console.log(numericConfirmation)
  console.log(specialCharactersConfirmation)

  }

  // Used the calling fucntion getPasswordOptions() in order for the prompt function above to work/display 
  getPasswordOptions()

  
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
    
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);