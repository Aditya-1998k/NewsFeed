```
NewsFeed/
 └── server/
     ├── app/
     │   ├── main.py          # FastAPI entrypoint
     │   ├── routes/
     │   │   ├── auth.py      # login, register
     │   │   ├── news.py      # fetch news from News API
     │   │   ├── bookmarks.py # save/get user bookmarks
     │   ├── models.py        # Pydantic models (schemas)
     │   ├── database.py      # MongoDB connection
     │   ├── auth_utils.py    # JWT helpers
     │   └── summarizer.py    # optional HuggingFace summarizer
     ├── requirements.txt
     ├── .env
     └── README.md
```
