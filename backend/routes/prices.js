const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = [
    {
      id: "bitcoin",
      symbol: "BTC",
      name: "Bitcoin",
      priceUsd: 68420,
      change24h: 2.31
    },
    {
      id: "ethereum",
      symbol: "ETH",
      name: "Ethereum",
      priceUsd: 3520,
      change24h: -1.12
    },
    {
      id: "solana",
      symbol: "SOL",
      name: "Solana",
      priceUsd: 148.7,
      change24h: 4.85
    },
    {
      id: "cardano",
      symbol: "ADA",
      name: "Cardano",
      priceUsd: 0.59,
      change24h: 0.74
    }
  ];

  res.json(data);
});

module.exports = router;
