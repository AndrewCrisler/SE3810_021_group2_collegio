const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

const port = 3002;

// app.set('views', path.join(__dirname, 'frontend/views/public_views')); //set the view path
// app.set('view engine', 'ejs'); //allows ejs usage
app.use(express.static(path.join(__dirname, 'frontend/views/msoe_views/')));
app.use(express.static(path.join(__dirname, 'frontend/assets')));
app.use(helmet());

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/views/msoe_views/home.html'));
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});