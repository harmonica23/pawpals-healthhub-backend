///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// start the mongoose db connection
require('./config/db.connection.js')

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

// import routers
const dietRouter = require('./routes/diet')
const incidentRouter = require('./routes/incident')
const medRouter = require('./routes/med')
const petRouter = require('./routes/pet')
const userRouter = require('./routes/user')
const vaxRouter = require('./routes/vax')
const vetConsultRouter = require('./routes/vetConsult')
const AuthRouter = require('./routes/AuthRouter')
const PostRouter = require('./routes/PostRouter')

const cors = require("cors")
const morgan = require("morgan")

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.use('/diet', dietRouter)
app.use('/incident', incidentRouter)
app.use('/med', medRouter)
app.use('/pet', petRouter)
app.use('/user', userRouter)
app.use('/vax', vaxRouter)
app.use('/vetconsult', vetConsultRouter)
app.use('/auth', AuthRouter)
app.use('/posts', PostRouter)

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

