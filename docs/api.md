# API Documentation

## GET /api/health

Sprawdza, czy backend działa.

### Response

```json
{
  "status": "ok",
  "message": "Crypto Dashboard API is running"
}
```

## GET /api/prices

Zwraca listę kryptowalut i podstawowe dane.

### Response

```json
[
  {
    "id": "bitcoin",
    "symbol": "BTC",
    "name": "Bitcoin",
    "priceUsd": 68420,
    "change24h": 2.31
  }
]
```
