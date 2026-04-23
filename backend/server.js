const express = require("express");
const cors = require("cors");
const pricesRouter = require("./routes/prices");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Crypto Dashboard API is running"
  });
});

app.use("/api/prices", pricesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
