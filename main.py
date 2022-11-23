import random
import time

import requests
from bs4 import BeautifulSoup

ATTENDEE_URL = 'https://ithelp.ithome.com.tw/2022ironman/signup/list'


def parse_data(list_card_element):
    temp_dict = {
        'author_name': list_card_element.find('div', class_='contestants-list__name').getText(),
        'title': list_card_element.find('a', class_='contestants-list__title').getText(),
        'link': list_card_element.find('a', class_='contestants-list__title')['href'],
        'description': list_card_element.find('p', class_='contestants-list__desc').getText(),
        'progress': int(list_card_element.find('div', class_='progress-bar')['aria-valuenow']),
        'tag': list_card_element.find('div', class_='tag').find('span').getText()
    }
    print(temp_dict)
    return temp_dict


def parse_page(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    response = requests.get(f'{ATTENDEE_URL}', headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    list_card_elements = soup.findAll('section', class_='sec-contestants')[0].findAll('div', class_='list-card')
    attendee_list = []
    for list_card_element in list_card_elements:
        temp = parse_data(list_card_element)
        attendee_list.append(temp)
    return attendee_list


def get_web_page(page):
    if page == 1:
        url = ATTENDEE_URL
    else:
        url = f"{ATTENDEE_URL}?page=#{page}"
    return url


def update_page_info(url, my_hash={}):
    print('updating item ...')
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    my_hash['follower_number'] = int(soup.find('span', class_='profile-header__follow-num').getText())
    my_hash['page_view'] = int(soup.find('span', class_='profile-header__view-num').getText())
    print("result is", my_hash)
    return my_hash


def main():
    attendee_list = None
    for page in range(1, 10):
        print(f"parsing page {page}")
        time.sleep(random.uniform(1, 3.3))
        attendee_list = parse_page(get_web_page(page))

    for a_item in attendee_list:
        update_page_info(a_item['link'], a_item)


main()
