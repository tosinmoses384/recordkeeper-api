const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.get('/', (req, res) => {
    res.json({message: 'Welcome to record keeper'});
})

//api/teachrecords
const teachrecordsRouter = require('./routes/teachrecords')
const studrecordsRouter = require('./routes/studrecords')
app.use('/api/teachrecords', teachrecordsRouter)

//api/studrecords
app.use('/api/studrecords', studrecordsRouter)



app.listen(port, () => console.log(`Server listening on port ${port}`));