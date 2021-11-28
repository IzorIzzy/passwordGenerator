// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()+{}[]:<>?";


// Write password to the #password input
function writePassword() {
    //userChoice stores the user's selected characters
    var userChoice = ""
    // ctrl /  for quick comment
    var passwordLength = parseInt( prompt("Please choose the amount of characters you would like in your password between 8 and 128"))
    console.log(passwordLength) 

    if(passwordLength < 8){
        alert("Please choose a number greater than 8")
    } else if(passwordLength > 128){
        alert("Please choose a number less than 128" )
    } else {
    var littleLetters = confirm("Would you like lowercase letters in your password?")
    console.log("LittleLetters", littleLetters)

    if(littleLetters === true){
        userChoice += lowercase
    }

    var bigLetters = confirm("Would you like uppercase letters in your password?")

    if(bigLetters === true){
        userChoice += uppercase
    }
    console.log(userChoice)

    var numerical = confirm("Would you like numbers in your password?")
        if(numerical === true){
            userChoice += numbers 
        }

        console.log(userChoice)

    }
    var characters = confirm("Would you like specialChar in your password?")
        if(characters ===true){
            userChoice += specialChar
        }

        console.log(userChoice)
  var passwordText = document.querySelector("#password");

  /**TA Comment please delete before submission:
        * we have a string that represents all the characters the user wants
        * For loop
        * function that randomly selects a character
        * A B C D E -> 
        * 4.5 -> floor rounds down, ceiling rounds up -> 4
        * */
       var passwordGenerated = ""

       for (let index = 0; index < passwordLength; index++) {
        var randomNum = Math.floor(Math.random()
        *userChoice.length)
         //square brackets = array
          var characterSelected = userChoice
        [randomNum]
          console.log(characterSelected)
          passwordGenerated += characterSelected 
       }     
  passwordText.value = passwordGenerated;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

