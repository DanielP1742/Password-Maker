
//Function begins here:

function generatePassword() {
  var passwordLength = parseInt(window.prompt("How many characters would you like? Choose between 8-129"));
  console.log(passwordLength)

  // Original: while (passwordLength is smaller than 8 && passwordLength is greater than 129) {
  var condition = passwordLength >= 8 && passwordLength <= 129;
  
  while (!condition) {
    if (passwordLength <= 7) {
      window.alert("Password needs to be Greater or equal to 8 characters");
    } else if (passwordLength >= 130) {
      window.alert("Password needs to be Smaller or equal to 129 characters");
    }
    
    passwordLength = window.prompt("How many characters would you like? Choose between 8-130");
    // how do we set the value of "condition" here?
    condition = passwordLength >= 8 && passwordLength <= 129;
  }

  // Password Prompts:

  var lowerCaseConfirm = window.confirm("Password include lowercase characters?");
  if (lowerCaseConfirm === true) {
    
    console.log("Lower Case Selected")
    
  } else {
    console.log("Lower Case NOT Selected")
  }

  var upperCaseConfirm = window.confirm("Password include uppercase characters?");
  if (upperCaseConfirm === true) {
    
    console.log("Upper Case Selected")
    
  } else {
    console.log("Upper Case NOT Selected")
  }

  var numericCaseConfirm = window.confirm("Password include numeric characters?");
  if (numericCaseConfirm === true) {
    
    console.log("Numeric Case Selected")
    
  } else {
    console.log("Numeric Case NOT Selected")
  }

  var specialCaseConfirm = window.confirm("Password include special characters?");
  if (specialCaseConfirm === true) {
    
    console.log("Special Case Selected")
  } else {
    console.log("Special Case Not Selected")
  }
  
// Password Array Creator:

    var passwordCharactersArray = [];


     var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if (lowerCaseConfirm) {

    passwordCharactersArray = passwordCharactersArray.concat(lowerCaseArray);
    }

    var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', "J", 'K', 'L', 'M', 'N', 'O', 'P', "Q", "R", 'S', 'T', 'U', 'V', 'W', "X", "Y", 'Z']
    if (upperCaseConfirm) {

      passwordCharactersArray = passwordCharactersArray.concat(upperCaseArray);
    }

    var numericCaseArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


     if (numericCaseConfirm) {
      passwordCharactersArray = passwordCharactersArray.concat(numericCaseArray);
    }

    var specialCaseArray = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "+", "?", ":", ";", "-"]

    if (specialCaseConfirm) {passwordCharactersArray = passwordCharactersArray.concat(specialCaseArray);
    }

    //Password Generator:

    // Borrowed array shuffling function from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];

      }
    
      return array;
    }

      //Password Printer:

    passwordCharactersArray = shuffle(passwordCharactersArray);

    console.log(passwordCharactersArray);
    var resultPassword = [];
    for (var i=0; i<passwordLength; i++) {
      var randomeLetter = passwordCharactersArray[Math.floor(Math.random()*passwordLength)];
      resultPassword.push(randomeLetter);
    }
    
    console.log(resultPassword);

    let finalpassword = resultPassword.join("");

    console.log(finalpassword);

   return finalpassword 
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  console.log(password)
  var passwordText = document.querySelector("#password");

 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);