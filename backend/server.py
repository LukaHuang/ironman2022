import os

from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv('MONGO_URI')
COLLECTION_NAME = "2022_ironman"

app = Flask(__name__)
app.config["MONGO_URI"] = f"{MONGO_URI}"
mongo = PyMongo(app)
collection = mongo.db.get_collection(COLLECTION_NAME)
print(list(collection.find()))

@app.route('/')
def hello():
    return render_template('hello.html')


@app.route('/ironman2022')
def ironman2022():
    ironman_list = list(collection.find())
    return jsonify({"ironman_list": ironman_list})


if __name__ == "__main__":
    app.run(debug=True)
