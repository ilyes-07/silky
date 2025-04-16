function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;
    
    const conversation = document.getElementById("conversation");
    
    // Display user message
    conversation.innerHTML += `<div><b>You:</b> ${userInput}</div>`;
    
    // Simulate response from Silky
    setTimeout(() => {
        const response = getSilkyResponse(userInput);
        conversation.innerHTML += `<div><b>Silky 🕷️:</b> ${response}</div>`;
        conversation.scrollTop = conversation.scrollHeight; // Scroll to bottom
    }, 1000);
    
    document.getElementById("userInput").value = "";
}

function getSilkyResponse(input) {
    // You can modify this function to use the chat_with_silky function you created earlier
    if (input.toLowerCase().includes("hello")) {
        return "Hey hey! Good to see ya!";
    } else if (input.toLowerCase().includes("joke")) {
        return "Why don’t spiders get caught in their own webs? Because they know the *net* code!";
    } else {
        return "Hmmm, I’m still learning. Ask me something else!";
    }
}
