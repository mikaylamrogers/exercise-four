// Query one blogpost
const express = require('express');
const router = express.Router();

// Require Firebase
const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore();

// Reference a specific collection
const blogposts = db.collection("blogposts");

// if there is no ID provided, send this message
router.get('/', (req, res) => res.send('No Id provided'));

// get a post by ID
router.get("/:id", (req, res) => {
    // get the query parameter from the URL and set it to a variable
    const queryId = req.params.id;
    // query the collection
    blogposts
    .doc(queryId) // looking up the document by ID
    .get()
    .then(function (doc) {
        if (doc.exists) { // checking if document exists
            const data = doc.data(); // assigning the document data to a variable
            return res.send(data); // send data to user who queries
        } else {
            // if not document exists
            return res.send("no document exists");
        }
    })
    .catch(function (error) {
        return res.send(error);
    });
});




module.exports = router;

