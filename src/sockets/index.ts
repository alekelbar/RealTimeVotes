import io, { Socket } from "socket.io-client";

export const socket = io("http://localhost:8081/", {
  transports: ["websocket"],
});

socket.on("connection", (client: Socket) => {
  console.log("connected");
});
