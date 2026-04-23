import requests

def get_price(crypto="bitcoin"):
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={crypto}&vs_currencies=usd"
    data = requests.get(url).json()
    return data[crypto]["usd"]

if __name__ == "__main__":
    price = get_price("bitcoin")
    print(f"Bitcoin price: ${price}")
