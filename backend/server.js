import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

// rest object
const app = express();
// miidleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const productsPath = "./data/product.json";
const purchasesPath = "./data/purchase.json";

// rest api

// 1. Get Product

app.get("/products", (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  res.json(products);
});

// 2. Purchase Project

app.post("/purchase", (req, res) => {
  const { productId } = req.body;
  const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));

  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const purchases = JSON.parse(fs.readFileSync(purchasesPath, "utf8"));
  purchases.push({ id: productId, date: new Date() });

  fs.writeFileSync(purchasesPath, JSON.stringify(purchases, null, 2));
  res.json({ message: "Purchase successful" });
});

// 3. Search Product

app.get("/products/search", (req, res) => {
  const { q } = req.query;
  const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(q.toLowerCase())
  );
  res.json(filteredProducts);
});

// Port
// const PORT = 8080;
const PORT = 3000;

// run - listen
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
