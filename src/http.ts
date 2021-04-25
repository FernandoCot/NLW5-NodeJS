import express, { response } from 'express';
import './database';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { routes } from './routes';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set("views", path.join(__dirname, '..', 'public'));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
  return res.render("html/client.html");
});

const http = createServer(app); // Creating the HTTP server
const io = new Server(http); // Creating the WS server

io.on("connection", (socket: Socket) => {
  console.log('Here', socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };