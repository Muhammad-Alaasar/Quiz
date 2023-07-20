const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const appRoutes = require('./routes/router');

app.use(express.json());
app.use(cors());
app.use(appRoutes);

app.get('/', (req, res) => res.send('Welcome to Quiz API'));
app.listen(port, () => console.log(`Server Running Now On http://localhost:${port}`));
