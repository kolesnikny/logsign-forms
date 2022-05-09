const express = require('express');
const app = express();
const UserController = require('./controlles/user.controller');
const { validate: validateBody } = require('./middlewares/validate.mw');
const PORT = 3001;

const bodyParser = express.json();

app.get('/login', UserController.getSingleUser);
app.get('/login/:email', UserController.getSingleUser);
app.post('/signup', bodyParser, validateBody, UserController.createUser);

app.listen(PORT, () => {
  console.log(`server start on ${PORT}`);
});
