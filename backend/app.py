from flask import Flask, jsonify
from services.crypto_api import get_prices

app = Flask(__name__)

@app.route("/api/prices")
def prices():
    data = get_prices()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
