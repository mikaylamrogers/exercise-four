const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// configuration values for firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEDWMf7NuuWB17KHHGlm8OA5t0uM4K-Ko",
    authDomain: "exercise-four-6ef58.firebaseapp.com",
    databaseURL: "https://exercise-four-6ef58.firebaseio.com",
    projectId: "exercise-four-6ef58",
    storageBucket: "exercise-four-6ef58.appspot.com",
    messagingSenderId: "457626254982",
    appId: "1:457626254982:web:eb897ba701a0c0ec641b07"
  };

// Firebase
const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

// Routes Import
const indexRoute = require('./routes/index.js');
const postRoute = require('./routes/post.js');
const createRoute = require('./routes/createBlogpost.js');

// Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () => 
    console.log(`Exercise Four is running at localhost:${port}`)
);
