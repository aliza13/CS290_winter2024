document.getElementById("submitButton").disabled = false; // no display right now

let person_info = {
    name: "",
    levelsArray: [],
    highs: [],
    lows: [],
    average: 0,
    displayInfo: function() {
        if (this.average == 0) {
            console.log(`${this.name} your avg isn't available`);
            return;
        } else {
            console.log(`${this.name} your average levels is ${this.average}`);}    }
};

function greetingUser(name) {
    var name = document.getElementById('nameInput').value;
    var outputDiv = document.getElementById("outputName");
    var lettersAndSpacesOnly = /^[A-Za-z\s]+$/;

    if (name === '' || !name.match(lettersAndSpacesOnly)) {
        alert("Please enter a valid name containing only letters and spaces.");
        return; // Exit the function early if validation fails
    }
    outputDiv.innerHTML = "<p>Hey there, " + name + "!</p>";
    console.log(name);

    // Disable button after name is submitted
    document.getElementById("submitButton").disabled = true;
    nameInput.disabled = true;

    person_info.name = name;

    document.getElementById("levelInput").style.display = "block";
}

function storeLevels() {
    var userInput = document.getElementById("userLevels").value.trim();
    var levelsArray = []; // empty array to them store
    var levelsArray = userInput.split(/[,\s]+/).map(Number); // split nums by , and space
    
    console.log(levelsArray);
}

function showAlert() {
    alert("ALERT ALERT lol");
}

