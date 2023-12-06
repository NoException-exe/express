const Express = require("express");

const app = Express();

app.get("/test", (request, response) => {
  return response.send("test endpoint");
});

app.get("/", (request, response) => {
  return response.send("/ endpoint");
});

module.exports = { app };
