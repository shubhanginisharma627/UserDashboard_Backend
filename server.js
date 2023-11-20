import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // Ensure correct path
import 'dotenv/config.js'
// Initialize express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json()); // Using Express's built-in json parser
app.use('/api/users', userRoutes);

// MongoDB connection
const dbUri = process.env.MONGODB_URI;
console.log("uri", process.env.MONGODB_URI)
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
