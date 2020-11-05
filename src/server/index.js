import express from 'express';
import bodyParser from 'body-parser';
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
const clients = [];

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

const server = http.createServer(app);
const io = socketIo(server);

app.use('/api', api(io));

app.use(
  errorHandler({
    debug: !inProduction(),
    log: true,
  }),
);

io.on("connection", socket => {
  storeCLient(socket);
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const storeCLient = socket => {
  const user = socket.handshake.query;

  socket.join(user.name);
  clients.push(user);
  socket.to(user.name).emit("FromAPI", user);
};

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});