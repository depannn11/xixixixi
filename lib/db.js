import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/depankenzo8_db');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;