import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const resp = await mongoose.connect(process.env.MONGOBD_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongDB connected: ${resp.connection.host}`);

  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

export default connectDB;