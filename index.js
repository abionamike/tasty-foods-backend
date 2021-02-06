import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import productRoute from './routes/ProductRoute.js'
import userRoute from './routes/UserRoute.js'
import uploadRoute from './routes/UploadRoute.js'

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello backend');
});

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/uploads', uploadRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server run on port ${PORT}`))