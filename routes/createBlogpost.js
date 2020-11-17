// Create blogpost
const express = require('express');
const router = express.Router();

// Require Firebase
const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore();

// Reference a specific collection
const blogposts = db.collection("blogposts");

const form = `
<form action="/create/submit">
    <input type="text" name="title" placeholder="Title of Post" />
    <input type="text" name="text" placeholder="Text of Post" />
    <input type="text" name="author" placeholder="Author" />
    <button type="submit">Submit Post</button>
</form>
`;

// Default route serves form
router.get("/", (req, res) => res.send(form));

// Route for submitting the form
router.get("/submit", (req, res) => {
    const queryParams = req.query; // ?title=words&text=words&author=words...

    // custom IDs for our posts
    const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase(); // replace any spaces with a dash

    blogposts
        .doc(idFromTitle) // allows you to create new posts or update them
        .set(queryParams)
        .then(function (doc) {
            res.send("Successful Submission");
        })
        .catch(function (error) {
            console.log("error", error);   
            res.send("Failed Submission"); 
        });
});

module.exports = router;