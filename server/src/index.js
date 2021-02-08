import express from 'express';
import cors from 'cors';
import http from 'http';
import io from 'socket.io';

import db from './middlewares/db';
import productRoutes from './apis/productRoutes';
import commentRoutes from './apis/commentRoutes';

const app = express();
app.use(express.json());
app.use(cors());

const HTTP = http.createServer(app);
const socketIO = io(HTTP);

app.use('/api', productRoutes);
app.use('/api', commentRoutes);

db();

socketIO.on('connection', (socket) => {
  console.log(socket.id + 'connected.');

  socket.io('disconnect', (socket) => {
    console.log(socket.id + 'disconnected');
  });
});

app.use('/', (req, res) => {
  res.json({ msg: 'hello' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('server is listening on port ' + port));
