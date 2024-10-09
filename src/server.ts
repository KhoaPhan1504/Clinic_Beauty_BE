import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  helmet({
    referrerPolicy: { policy: 'strict-origin-when-cross-origin'},
  })
);

const corsOptions = {
  origin: '*',
  methods: 'GET, PUT, POST, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

const PORT = process.env.PORt || 8080;

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
