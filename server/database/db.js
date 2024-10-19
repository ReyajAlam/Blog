import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from the .env file

const Connection = async () => {
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const cluster = process.env.MONGO_CLUSTER;
    const dbName = process.env.DB_NAME;

    const URL = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL);
        console.log("Database connection successful");
    } catch (error) {
        console.log("Error while connecting with the database:", error);
    }
};

export default Connection;
