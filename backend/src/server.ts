import app from './app';
import dotenv from 'dotenv';
dotenv.config();
console.log('Loaded env:', process.env.TFL_APP_ID, process.env.TFL_PRIMARY_KEY);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚍 Backend server running on http://localhost:${PORT}`);
});
