# VerifyAI

# VerifyAI 📰

A machine learning web application that detects whether a news article is **real or fake** using Natural Language Processing (NLP) and Scikit-learn.

##Live Demo
[Add your link here once deployed]

## Project Structure
VerifyAI/

├── index.html          # Logo animation intro

├── style.css           # Styling

├── script.js           # Animation logic

├── verify.html         # Main website

├── app.py              # Flask backend

├── model.pkl           # Trained fake news detection model

├── notebook.ipynb      # Model training notebook

├── data.csv            # News dataset

└── requirements.txt    # Python dependencies

## ⚙️ Installation

1. Clone the repo
```bash
git clone https://github.com/yourusername/verifyai.git
cd verifyai
```

2. Create a virtual environment
```bash
python -m venv .venv
.venv\Scripts\activate      # Windows
source .venv/bin/activate   # Mac/Linux
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Run the app
```bash
python app.py
```

5. Open terminal and type command python -m http.server 5500
6. Then go to http://localhost:5000
   ## How It Works
1. User pastes a news article or headline into the website
2. The text is cleaned and vectorized using TF-IDF
3. The trained Scikit-learn model predicts if it's **REAL** or **FAKE**
4. The result is displayed instantly on the screen

## Built With
- Python
- Scikit-learn
- Flask
- TF-IDF Vectorizer
- HTML, CSS, JavaScript

## 📦 Dataset
Kaggle

## Author
Sumera Feroz Yahoo,
Suhani Bhargava

