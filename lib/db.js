import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/akunmanager');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;