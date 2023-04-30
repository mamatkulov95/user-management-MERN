const express =require('express');
const session = require('express-session');

const cors = require("cors");
const app=express();
app.use(cors());
const connectDBase = require('./config/db')
require('dotenv').config()

connectDBase();
app.use(session({
  secret: 'my-secret-key', // Replace with a secret key of your choice
  resave: false,
  saveUninitialized: false
}));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/user', require('./routes/userRoutes'))

const PORT = process.env.PORT || 5000

app.listen(5000,console.log(`Server is listening on port: ${PORT}`))