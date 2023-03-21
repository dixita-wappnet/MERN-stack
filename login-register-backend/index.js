// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
const cors = require("cors");
const express = require('express');
const mongoose = require("mongoose");

//configuration
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// database connections
mongoose.connect('mongodb://127.0.0.1:27017/myLoginRegister', { useNewUrlParser: true })
    .then(() => console.log('Connected to database'))
    .catch((error) => console.error(error))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// Routes
app.get('/', (req, res) => {
    res.send("My API Login")
})

app.post('/login', (req, res) => {
    const { email, password} = req.body
    User.findOne({ email: email})
    .then((user) => {
        if(user){
            if(password === user.password){
                res.send({message: "Login Successfully", user: user})
            }
            else {
                res.send({message: "Password did not match"})
            }
        }    
        else {
            res.send({message: "User not registered"})
        }
    })
})

app.post('/register', (req, res) => {
   const {name, email, password} = req.body
   User.findOne({email:email})
   .then(user => {
      if(user){
        res.send({message: "User already registered"})
      }
      else {
        const user = new User({
            name,
            email,
            password
           })
           user.save()
             .then(savedDoc => {
                res.send({message: "Successfully Registered, Please login now."})
              })
            
            .catch(err => {
                res.send(err)
            })   
        }     
      
   })
   .catch(err => {
         res.send({message:"error"})
   })
   
})

app.listen(9002, () => {
    console.log("BE started at port 9002")
})
