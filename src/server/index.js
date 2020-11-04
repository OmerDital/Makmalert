import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from 'strong-error-handler';
import process from 'process';
import api from './api';
import socketIo from 'socket.io';
import http from 'http';

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

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  getApiAndEmit(socket);
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});