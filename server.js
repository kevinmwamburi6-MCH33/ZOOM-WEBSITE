const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ZOOM Backend Running 🚀");
});

app.post("/api/order", (req, res) => {
  const { name, phone, product, quantity, notes } = req.body;

  if (!name || !phone || !product || !quantity) {
    return res.status(400).json({ message: "Missing fields" });
  }

  console.log("📦 NEW ORDER:", req.body);

  res.json({ message: "Order received successfully" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  console.log("📩 NEW MESSAGE:", req.body);

  res.json({ message: "Message sent successfully" });
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
