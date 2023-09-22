$(document).ready(function() {
    $("#reverseButton").click(function() {
        // Get the user's input
        var userInput = $("#inputText").val();

        // Reverse the input string
        var reversedString = reverseString(userInput);

        // Display the reversed string
        $("#result").html("Your name backwards is... " + reversedString);
    });

    // Function to reverse a string
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
});
