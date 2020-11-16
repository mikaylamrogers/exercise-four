// Show all blogposts
const express = require('express');
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const { query } = require('express');

// Initialize Firestore Database
const db = firebase.firestore();

// Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
    // Inside of this arrow function, we can do anything we want so long as we return at the end
    const blogpostsArray = [];
    blogposts
        .get()
        .then((querySnapshot) => {
            console.log('querySnapshot', querySnapshot);
            // Loop through query snapshot and push into array
            querySnapshot.forEach(doc => {
                blogpostsArray.push(doc.data())
            });
            // return array
            return res.send(blogpostsArray);
        })
        .catch(function (e) {
            console.warn('error:', e);
            return res.send(error);
        });
});

module.exports = router;