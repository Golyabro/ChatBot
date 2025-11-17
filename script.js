const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const botResponse = getBotResponse(message);
    addMessage(botResponse, "bot");
  }, 700);
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);

  const bubbleDiv = document.createElement("div");
  bubbleDiv.classList.add("bubble");
  bubbleDiv.textContent = text;

  const avatar = document.createElement("img");
  avatar.classList.add("avatar");
  if (sender === "bot") {
    avatar.src = "https://cdn-icons-png.flaticon.com/512/4712/4712107.png"; // bot icon
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubbleDiv);
  } else {
    avatar.src = "https://cdn-icons-png.flaticon.com/512/4333/4333609.png"; // user icon
    messageDiv.appendChild(bubbleDiv);
    messageDiv.appendChild(avatar);
  }

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hey there! 😊 How are you today?";
  } else if (input.includes("your name")) {
    return "I'm ChatBot 🤖, your friendly assistant!";
  } else if (input.includes("time")) {
    return "⏰ The time is " + new Date().toLocaleTimeString();
  } else if (input.includes("date")) {
    return "📅 Today's date is " + new Date().toLocaleDateString();
  } else if (input.includes("bye")) {
    return "Goodbye! 👋 Have a great day!";
  } else {
    return "🤔 Hmm... I’m still learning. Try asking something else!";
  }
}

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});
