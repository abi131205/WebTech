const express = require('express');
const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views'); // Folder containing Pug templates

// Define a route to render the Pug file
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', message: 'Hello from Pug!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
