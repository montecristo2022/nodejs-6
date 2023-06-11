const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRouter = require("./routes/api/auth");

const contactsRouter = require('./routes/api/contacts');



const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found! 404' });
})


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message }) // here the status of the error is used if it exists, otherwise 500 is used
})

module.exports = app
