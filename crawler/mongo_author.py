import os

import pymongo
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGODB_URL = os.getenv('MONGODB_URL')
DATABASE_NAME = 'ironman'
COLLECTION_NAME = "2022_ironman"

collection = None


def init_mongo():
    client = MongoClient(MONGODB_URL)
    db = client[DATABASE_NAME]
    return db.get_collection(COLLECTION_NAME)


def add_ironman(author_hash, collection):
    collection.insert_one(author_hash)



def get_ironman_list(collection):
    return list(collection.find())


# def main():
#     collection = init_mongo()
#     author_dict = {
#         'author_name': 'jddj42840', 'title': '資工琪琪的後端學習筆記(python&flask)',
#         'link': 'https://ithelp.ithome.com.tw/users/20150282/ironman/5135',
#         'description': '嗨摟~我是資工琪琪現在正在學習利用flask與python開發網頁後端，希望再未來的三十天大家可以與琪琪一同勤奮的學習吧~~~',
#         'progress': 100, 'tag': 'Modern Web'
#     }
#     add_ironman(author_dict, collection)
#     print(get_ironman_list(collection))
#
#
# main()
