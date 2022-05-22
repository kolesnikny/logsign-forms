const express = require('express');
const app = express();
const UserController = require('./controlles/user.controller');
const {
  validate: validateBody,
  validateLogin,
} = require('./middlewares/validate.mw');

const PORT = 3001;

const bodyParser = express.json();

app.post('/login', bodyParser, validateLogin, UserController.getSingleUser);
app.post('/signup', bodyParser, validateBody, UserController.createUser);

app.listen(PORT, () => {
  console.log(`server start on ${PORT}`);
});
