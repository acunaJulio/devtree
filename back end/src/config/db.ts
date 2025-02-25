import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB connected at ${url}`);
  } catch (error: any) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};