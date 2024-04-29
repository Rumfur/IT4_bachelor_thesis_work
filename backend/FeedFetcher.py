import feedparser
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

def getNewsTitles(link):
    news_feed = feedparser.parse("https://www.lsm.lv/rss/")
    entries = news_feed.entries
    titles = [[str(i.get("title")).replace('«', '"').replace('»', '"') for i in entries]]
    return titles

# # debug
# res = {
#         "https://www.lsm.lv/rss/": getNewsTitles("https://www.lsm.lv/rss/"),
#         "https://www.delfi.lv/rss/index.xml": getNewsTitles("https://www.delfi.lv/rss/index.xml"),
#         "https://feeds.feedburner.com/Apollolv-AllArticles": getNewsTitles("https://feeds.feedburner.com/Apollolv-AllArticles"),
#         "https://www.la.lv/feed": getNewsTitles("https://www.la.lv/feed")
#         }
# for site in res:
#     print(site)
#     print(res[site])

@app.get("/run")
def read_user():
    return {
        "https://www.lsm.lv/rss/": getNewsTitles("https://www.lsm.lv/rss/"),
        "https://www.delfi.lv/rss/index.xml": getNewsTitles("https://www.delfi.lv/rss/index.xml"),
        "https://feeds.feedburner.com/Apollolv-AllArticles": getNewsTitles("https://feeds.feedburner.com/Apollolv-AllArticles"),
        "https://www.la.lv/feed": getNewsTitles("https://www.la.lv/feed")
        }

origins = [
    "http://localhost:19006"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# uvicorn FeedFetcher:app --host 127.0.0.1 --port 80