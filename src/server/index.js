import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from 'strong-error-handler';
import process from 'process';
import api from './api';

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const inProduction = () => process.env.NODE_ENV === 'production';

if (!inProduction()) {
  app.use(morgan('dev'));
}

mongoose.connect('mongodb://localhost:27017/makmalert', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', api);

app.use(
  errorHandler({
    debug: !inProduction(),
    log: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
