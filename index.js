const express = require('express');
const path = require('path');

const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/submit-name', (req, res) => {
    const name = req.body.Name
    const message = `Welcome ${name}`
    res.send(message);
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})

