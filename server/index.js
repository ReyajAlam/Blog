import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Router from './routes/routes.js'

dotenv.config();
const app = express();

app.use('/',Router);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

// Call the Connection function to connect to MongoDB
Connection();
