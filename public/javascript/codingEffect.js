
// "Programming is ..." effect
let message = "Programming is pretty fun as well 💻";
let messageIndex = 0;
let interval = setInterval(function () {
  document.getElementById("Codingtext").innerHTML += message.charAt(messageIndex);
  messageIndex++;
  if (messageIndex > message.length) {
    // Reset the message index and clear the text
    messageIndex = 0;
    document.getElementById("Codingtext").innerHTML = "";
  }
}, 100);
