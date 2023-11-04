const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/recipes', require('./routes/recipesRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`))
