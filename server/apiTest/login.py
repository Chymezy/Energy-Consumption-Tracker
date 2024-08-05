import requests
import json


login_url = "http://127.0.0.1:4444/api/auth/login"

def login(url: str):
    headers = {
        "Content-Type": "application/json"
    }

    data = {
        "username": "testuser",
        "password": "password"
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))
    rData = response.json()

    for key, value in rData.items():
        if key == "access_token":
            return value

def fetchData(url: str, token: str):
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    response = requests.get(url, headers=headers)
    return response.json()


token = login(login_url)

consumption = (fetchData("http://127.0.0.1:4444/api/energy_records", token))

for _ in consumption:
    for key, value in _.items():
        if key == "consumption":
            print(f"consumpiton: {value}")
