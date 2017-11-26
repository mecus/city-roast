const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const mailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { WelcomeEmail, orderSuccessMail } = require('./controllers/mailer.controller');


const app = express();
app.use(express.static(path.join(__dirname, './dist')));

app.get("**", (req, res)=>{
    
    // if(req.path.includes("/welcome")){
    //     let email = req.query.email;
    //     console.log(req.query);
    //     console.log(req.body);
    //     WelcomeEmail(email);
    //     return res.status(201).redirect("/");
    //     // res.status(201).json({status: "completed"});
    // }else if(req.path.includes("/success_order")){
    //     let user = req.query;
    //     orderSuccessMail(user);
    //     return res.status(201).json({status: "completed"});
    // }
    res.sendFile(path.join(__dirname, "./dist", "index.html"));
    console.log("Serving from http function");
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((event)=>{
    let email = event.data.email;
    return WelcomeEmail(email);
    // return admin.database().ref("/users").push({name: "Johnny", email: event.data.email })
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
});
exports.sendOrderEmail = functions.database.ref('/sales')
    .onCreate((event)=>{
        console.log(event.data);
        // orderSuccessMail(user);
    });

exports.server = functions.https.onRequest(app);
