import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "../config/.env", // Ensure the correct path to your .env file
});

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds
};

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI, options)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Database connection error:", error.message);
        });
};

export default databaseConnection;
