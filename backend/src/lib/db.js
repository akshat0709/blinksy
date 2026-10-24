
import mongoose from "mongoose";

export async function connectorDB() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MONGO_URI is missing");
        }

        const connection = await mongoose.connect(mongoUri);

        console.log(
            "MongoDB connected:",
            connection.connection.host
        );
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}
