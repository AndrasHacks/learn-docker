const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, resp) => resp.send("Hello from the Docker side."));
app.listen(port, () => console.log(`Example app listening on port  ${port}!`));
