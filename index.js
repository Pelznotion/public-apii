const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    email: "pelznotion@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Pelznotion",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
