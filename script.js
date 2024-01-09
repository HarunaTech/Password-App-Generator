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

    //  Confirmation prompt for user to choose Password characters 
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

   // This if statement check and  validate if user pick at least on character type 
  // It alerts user and make sure user choose one charater type before contnuing to generate password
      if (lowerCaseConfirmation === false && upperCaseConfirmation === false &&
            numericConfirmation === false && specialCharactersConfirmation === false){
                alert("At least one charater must be selected in order to generate password. Please choose one charater type from the previous option!");
                return;
            }

  // This function creates new object Password options and return back the calling function. 
 // It will check options for this password through the functions declared.
        let PasswordOptions = {
            passwordlength: passwordlength,
            lowerCaseConfirmation: lowerCaseConfirmation,
            upperCaseConfirmation: upperCaseConfirmation,
            numericConfirmation: numericConfirmation,
            specialCharactersConfirmation: specialCharactersConfirmation,
        };
        return PasswordOptions;

  }

  // Used the calling fucntion getPasswordOptions() in order for the prompt function above to work/display 
  getPasswordOptions()



  // Function for getting a random element from an array
  // This function provides a way to get a random element from an array each time it is called.
  function getRandom(arr) {

    // This will generate a random index within the bounds of the array
    let randomIndex = Math.floor(Math.random() * arr.length);
    
    // This line retrieves the element at the randomly generated index from the array arr. 
    // The selected element is then stored in the variable randomChar.
    let randomChar = arr[randomIndex];

    // This line logs the randomly selected character to the console. 
    console.log("Random Char = ", randomChar);
        
    // This function returns the randomly selected character to the caller.
    return randomChar;

  }
  
  
  // Function to generate password with user input
  function generatePassword() {

    // declaring new variables   
    // This line of code calls a function named getPasswordOptions() to obtain a set of options for generating a password.
    // 
    var passwordOptions =  getPasswordOptions();
    let newPasswordArray = [];
    let guaranteedCharacters = [];
    let possibleCharacters = [];

    //This line of code is checking if the user choose lowercase character, then pick random lowercase character and add it to guaranteed character arrays 
    // And also add the entire lowercase character to possible character 
    if (passwordOptions.lowercaseConfirmation){
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
        possibleCharacters=possibleCharacters.concat(lowerCasedCharacters);
      }
      
      //This line of code is checking if the user choose uppercase character, then pick random uppercase character and add it to guaranteed character arrays 
      // And also add the entire uppercase character to possible character  
      if (passwordOptions.upperCaseConfirmation){
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
        possibleCharacters=possibleCharacters.concat(upperCasedCharacters);
      }

      //This line of code is checking if the user choose numeric character, then pick random numeric character and add it to guaranteed character arrays 
      // And also add the entire numeric character to possible character 
      if (passwordOptions.numericConfirmation){
        guaranteedCharacters.push(getRandom(numericCharacters));
        possibleCharacters=possibleCharacters.concat(numericCharacters);
      }

      // This line of code is checking if the user choose specialCharacters, then pick random specialCharacters and add it to guaranteed character arrays 
      // And also add the entire specialCharacters to possible character 
      if (passwordOptions.specialCharactersConfirmation){
        guaranteedCharacters.push(getRandom(specialCharacters));
        possibleCharacters=possibleCharacters.concat(specialCharacters);
      }

      // This line of code will iterate the new password array with all the guranteed password characters 
        for (let i =0; i< guaranteedCharacters.length; i++){
            newPasswordArray[i] = guaranteedCharacters[i];
        }

        // This line of code will fill the rest of the new password array with random characters from possible characters
        // And continues until the desired password length is acheived
        for (let i =guaranteedCharacters.length; i< passwordOptions.passwordlength; i++){
            newPasswordArray[i] = getRandom(possibleCharacters);
        }
        // This line of code converts array to string and return.
        // This string is then returned as the final generated password.
        return newPasswordArray.join("");
      
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