const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/about', (req, res) => {
    console.log("About Request");
    res.send("This is about page");
})

app.get('/login', (req, res) => {
    console.log("Login Request");
    res.send("This is login page");
})

app.listen(port, () => {
    console.log("Server is up");
})