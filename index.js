


function addItem() {
    
    var userData = document.getElementById("userInput").value;

    // Check if the input is not empty
    if (userData.trim() !== "") {
        
        

        // Creates container var
        var listContainer = document.getElementById("listContainer");
        var buttonContainer = document.getElementById("buttonContainer");

        
        
        //Creates button
        var newButton = document.createElement('button');
        newButton.textContent = "Completed!";
        buttonContainer.appendChild(newButton);
        
        //Creates list item
        var li = document.createElement("li");
        li.textContent = userData;
        listContainer.appendChild(li);


        //Clear input field
        document.getElementById("userInput").value = "";
    } else {
        alert("Please enter a valid item.");
    }
}

// Add an event listener to the input field to handle the Enter key press
document.getElementById("userInput").addEventListener("keydown", function(event) {
    // Check if the Enter key (key code 13) was pressed
    if (event.key === "Enter") {
        addItem();
    }
})
