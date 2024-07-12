import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to database0")
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log("Database connection is failed", error);
        process.exit(1);
    }
}

export default dbConect;
