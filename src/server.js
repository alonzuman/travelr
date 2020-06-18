const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors');

// DB
connectDB()

// Middlewares
app.use(cors());
app.use(express.json());

// Auth Routes
app.use('/api/v1/auth', require('./routes/api/auth'));
app.use('/api/v1/users', require('./routes/api/users'));

// Volunteering Hours Routes
app.use('/api/v1/jobs', require('./routes/api/jobs'));

// Initialization

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
