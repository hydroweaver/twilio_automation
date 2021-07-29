const { urlencoded } = require('express');
const express = require('express');
const twilio = require('twilio')
require('dotenv').config();

var app = express();
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'text/xml');
    const twilio_resp = new twilio.twiml.MessagingResponse()
    twilio_resp.message("Hello Caller!")
    res.send(twilio_resp.toString())
});

app.post('/messages', (req, res)=>{
    let incoming_sms = req.body.Body;
    res.setHeader('Content-Type', 'text/xml');
    const twilio_resp = new twilio.twiml.MessagingResponse()
    twilio_resp.message(`Incoming message was : "${incoming_sms}"`)
    res.send(twilio_resp.toString())
});

app.listen(3000, ()=>{
    console.log(`Listening at Port ${process.env.PORT}`)
})



