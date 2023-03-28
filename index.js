const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is working",
  });
});

app.listen(PORT, () => {
  console.log("server has started on port 5000");
});
