const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Listening on port 3000 🚀");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/");
});
