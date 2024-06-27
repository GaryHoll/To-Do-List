


function addItem() {
    
    var userData = document.getElementById("userInput").value;

    // Check if the input is not empty
    if (userData.trim() !== "") {
        // Create a new list item (li) element
        var li = document.createElement("li");

        // Set the text of the list item to the input value
        li.textContent = userData;

        // Add the list item to the unordered list (ul)
        document.getElementById("itemList").appendChild(li);

        // Clear the input field
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
