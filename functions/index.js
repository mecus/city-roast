const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const mailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { sendMail, orderSuccessMail } = require('./controllers/mailer.controller');


const app = express();


app.get("/function", function(req, res){
    res.send("this is the function route");
});
app.get("/mail", sendMail);

exports.mailers = functions.https.onRequest(app);
exports.sendWelcomeEmail = functions.auth.user().onCreate(function(event){
    sendMail(event);
    console(event.data);
    return admin.database().ref("/users").push({name: "Johnny", email: event.data.email })
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

exports.server = functions.https.onRequest(app);
