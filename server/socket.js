import { Server } from "socket.io";

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("client connected:", socket.id);
    socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
})
};

export const getIO = () => io;
