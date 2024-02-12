function greetingUser() {
    var theName = document.getElementById('nameInput').value;
    var outputDiv = document.getElementById("outputName");
    var lettersAndSpacesOnly = /^[A-Za-z\s]+$/;

    if (theName === '' || !theName.match(lettersAndSpacesOnly)) {
        alert("Please enter a valid name containing only letters and spaces.");
        return; // Exit the function early if validation fails
    }
    outputDiv.innerHTML = "<p>Hey there, " + theName + "!</p>";
    console.log(theName);

    // Disable button after name is submitted
    document.getElementById("submitButton").disabled = true;
    nameInput.disabled = true;

    document.getElementById("levelInput").style.display = "block";
}

function storeLevels() {
    var userInput = document.getElementById("userLevels").value.trim();
    var levelsArray = [];
    var levelsArray = userInput.split(/[,\s]+/).map(Number);
    
    console.log(levelsArray);
}

function showAlert() {
    alert("ALERT ALERT lol");
}

