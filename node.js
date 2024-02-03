const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;

    // Perform actual authentication (replace with your logic)
    if (username === 'Science' && password === 'Year8!') {
        res.status(200).send('Authentication successful');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
