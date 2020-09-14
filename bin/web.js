const http = require("http");
const app = require("../app");

const port = process.env.PORT || 4000;
const server = http.createServer(app);

app.set("port", port);

server.listen(port);
server.on("listening", () => {
  console.log(`server is listening at localhost:${port}`);
});
