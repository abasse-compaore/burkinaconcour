const express = require("express");

const app = express();
const product = require("./api/product");
app.use(express.json({ extended: false }));
app.use("/api/product", product);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`serveur en cour de lecteure au port ${PORT}`)
);
