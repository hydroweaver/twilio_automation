const twilio = require('twilio')
const express = require('express')
const { Twilio } = require('twilio')
const VoiceResponse = require('twilio/lib/twiml/VoiceResponse')

app = express()

app.post('/hello', (req, res)=>{
    const response = new VoiceResponse()
    res.setHeader('Content-Type', 'text/xml');
    response.say('Hello!');
    res.send(response.toString());
}).listen(5000);