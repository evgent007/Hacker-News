const API_URL = 'http:////jsonplaceholder.typicode.com/'
const API_URL_Hacker_News = 'https://hacker-news.firebaseio.com/v0/'

const getHackerNews = type => {
  return fetch(API_URL_Hacker_News + type + '.json?print=pretty').then(resp => resp.json())
}

const getItem = n => {
  return fetch(API_URL_Hacker_News + '/item/' + n + '.json?print=pretty').then(resp => resp.json())
}

export { API_URL, getHackerNews, getItem }
