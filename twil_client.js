const twilio = require('twilio')
require('dotenv').config();
const client = twilio(process.env.accountSid, process.env.authToken);

client.messages.list({to:"+12626724551"}).then(messages=>{
    Array.from(new Set(messages.map(msg=>msg.from))).forEach(num=>{
        client.calls.create({
            from: "+12626724551",
            to: num,
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        })
    });
});