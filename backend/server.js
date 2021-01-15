import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (!product) return res.status(404).send("No products found!");

  res.send(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at=>${PORT}`);
});
