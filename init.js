const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("Connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from : "Navya" ,
        to : "riya" ,
        msg : "Hello , how are you ?" ,
        created_at : new Date(),
    },

    { 
        from : "Harsh" ,
        to : "Supriya" ,
        msg : "Had you done your project...." ,
        created_at : new Date(),
    },

    {
        from : "Sakshi" ,
        to : "Preeti" ,
        msg : "Call me back......." ,
        created_at : new Date(),
    },

    {
        from : "Rahul" ,
        to : "Naveen" ,
        msg : "Bro , are you coming ??" ,
        created_at : new Date(),
    },
];

Chat.insertMany(allChats);