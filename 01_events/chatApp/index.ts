import ChatRoom from "./chatRoom.js";

const chat = new ChatRoom()

chat.on('join', (user) => {
    console.log(`${user} has joined the chat`);
});
chat.on('message', (user, message) => {
    console.log(`${user} : ${message}`);
});
chat.on('leave', (user) => {
    console.log(`${user} has left the chat`);
});

//simulating 
chat.join("Ishwar")
chat.join("Nakul")

chat.sendMessage("Ishwar", "Hy Nakul");
chat.sendMessage("Nakul", "Hy Ishwar");

chat.leave("Ishwar");
chat.sendMessage("Ishwar", "This message wont be sent.");