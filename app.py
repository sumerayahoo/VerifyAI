from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import pickle

app = Flask(__name__)
CORS(app)

API_KEY = "ae2cc91211ed42a495cd19aa11193e78"  # better: use environment variable

# Load model
model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))


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

    # ML prediction
    vector = vectorizer.transform([news])
    pred = model.predict(vector)[0]

    label = "Real News" if pred == 1 else "Fake News"

    # 🔥 NewsAPI verification
    related_news = get_real_news(news[:100])
    score = model.decision_function(vector)[0]

    return jsonify({
        "prediction": label,
        "score":float(score),
        "related_news": related_news
    })



if __name__ == "__main__":
    print("Flask server starting...")
    app.run(debug=True)