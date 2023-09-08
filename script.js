function revealPregnancy() {
    const familyName = document.getElementById("familyName").value.toLowerCase(); // Convert to lowercase
    const greetingElement = document.getElementById("greeting");
    const hiddenImageElement = document.getElementById("hiddenImage");
    const revealSpeed = 50; // Speed in milliseconds (adjust as needed)

    // Define personalized messages based on names in lowercase
    const personalizedMessages = {
        "john": "Hello, John! We have exciting news to share.",
        "jane": "Hi, Jane! You're about to receive some wonderful news.",
        "mummum": "Hello, Mumum! I am excited to tell you that you are going to be a big sister once again.",
        // Add more names in lowercase and messages as needed
    };

    const headingElement = document.querySelector("h1"); // Get the heading element

    if (familyName) {
        // Change the heading to "Surprise!"
        headingElement.textContent = "Surprise!";

        greetingElement.textContent = ""; // Clear any previous text
        hiddenImageElement.style.display = "none"; // Hide the image

        let message = personalizedMessages[familyName];
        if (message) {
            let i = 0;
        const revealInterval = setInterval(function () {
            greetingElement.textContent += message[i];
            i++;
            if (i > message.length - 1) {
                clearInterval(revealInterval); // Stop the interval when text is fully revealed

                // Delay the image reveal by 1 second (1000 milliseconds)
                setTimeout(function () {
                    hiddenImageElement.style.display = "block"; // Show the image
                }, 1000); // Adjust the delay time as needed

                // Change the heading to "Surprise!"
                headingElement.textContent = "Surprise!";
            }
        }, revealSpeed);
        } else {
            greetingElement.textContent = `Enter your name again`;
        }


    } else {
        greetingElement.textContent = "Please enter your name before clicking 'Submit'.";
    }
}



 // Function to handle the "Enter" key press
function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
        revealPregnancy();
    }
}

// Add event listener for "keydown" on the input field
const familyNameInput = document.getElementById("familyName");
familyNameInput.addEventListener("keydown", handleEnterKeyPress);
