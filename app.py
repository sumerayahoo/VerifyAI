from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests
import pickle
import os

app = Flask(__name__)
CORS(app)

API_KEY = os.environ.get("ae2cc91211ed42a495cd19aa11193e78")

# Load model
model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.route("/")
def home():
    return send_from_directory(".", "logo.html")

@app.route("/verify.html")
def verify():
    return send_from_directory(".", "verify.html")

@app.route("/<path:filename>")
def serve_file(filename):
    return send_from_directory(".", filename)

def get_real_news(query):
    url = "https://newsapi.org/v2/everything"
    params = {
        "q": query,
        "language": "en",
        "sortBy": "relevancy",
        "pageSize": 3,
        "apiKey": API_KEY
    }
    response = requests.get(url, params=params)
    data = response.json()
    articles = []
    for article in data.get("articles", []):
        articles.append({
            "title": article["title"],
            "url": article["url"],
            "source": article["source"]["name"]
        })
    return articles

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    news = data["news"]
    vector = vectorizer.transform([news])
    pred = model.predict(vector)[0]
    label = "Real News" if pred == 1 else "Fake News"
    related_news = get_real_news(news[:100])
    score = model.decision_function(vector)[0]
    return jsonify({
        "prediction": label,
        "score": float(score),
        "related_news": related_news
    })

if __name__ == "__main__":
    print("Flask server starting...")
    app.run(debug=True)
