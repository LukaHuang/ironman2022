import os

from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGODB_URL = os.getenv('MONGODB_URL')
DATABASE_NAME = 'codeshiba'
COLLECTION_NAME = "ironman"

def init_mongo():
    client = MongoClient(MONGODB_URL)
    db = client[DATABASE_NAME]
    return db

def add_ironman(author_hash):
    db = init_mongo()
    db.ironman.insert_one(author_hash)

def get_ironman_list():
    db = init_mongo()
    cursor = db.ironman.find()
    return list(cursor)

print(get_ironman_list())
