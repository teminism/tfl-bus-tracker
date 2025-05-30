import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const tfl = axios.create({
  baseURL: 'https://api.tfl.gov.uk',
  params: {
    app_id: process.env.TFL_APP_ID,
    app_key: process.env.TFL_PRIMARY_KEY,
  },
});

export default tfl;
