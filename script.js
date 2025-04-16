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
    // Convert the input to lowercase to handle case-insensitivity
    input = input.toLowerCase();
    
    if (input.includes("hello")) {
        return "Hey hey! Good to see ya!";
    } else if (input.includes("joke")) {
        return "Why don’t spiders get caught in their own webs? Because they know the *net* code!";
    } else if (input.includes("spider fact")) {
        // Return a random spider fact
        const facts = [
            "Did you know spiders have hydraulic legs? They use fluid pressure to move!",
            "Some spiders can fly using a technique called ballooning — they ride the wind on silk threads.",
            "The Peacock Spider can dance! Male peacock spiders do colorful dances to attract mates.",
            "The Goliath Birdeater is the largest spider in the world. Its legs can span nearly a foot!",
            "Not all spiders spin webs — some hunt, some trap, some ambush!"
        ];
        return facts[Math.floor(Math.random() * facts.length)];
    } else {
        return "Hmmm, I’m still learning. Ask me something else!";
    }
}

