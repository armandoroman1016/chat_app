import express from "express";
import { createServer } from "http";
import cors from "cors"

const app = express();
const server = createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:19007"
    }
});

const PORT = 3000;

app.get("/", (req, res) => {
    res.send('HELLO WORLD 🎉')
});
app.use(cors())


// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function (socket: any) {
  console.log("user connected");
  socket.on("chat message", (msg: string) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
