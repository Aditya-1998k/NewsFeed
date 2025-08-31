Project Structure
```
newsfeed_app/
│── app/
│   ├── __init__.py
│   ├── main.py
│   ├── db.py
│   ├── routes/
│   │   ├── __init__.py
│   │   └── news.py
│   └── services/
│       ├── __init__.py
│       └── fetch_news.py
│── tests/
│   └── test_news.py
│── requirements.txt
│── .env
```

## How i am building my FASTAPI app
#### 1. First step:
app/main.py
```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
```

requirements.txt
```
fastapi>=0.110,<0.200
uvicorn[standard]>=0.23,<1.0
```

virtual environmnet
```shell
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

run the app
```shell
uvicorn app.main:app --reload
```

Visit API doc (FastApi comes inbuilt)
```
Swagger API DOC:
----------------
http://127.0.0.1:8000/docs

redoc:
----
http://127.0.0.1:8000/redoc
```

2. How I defined my routes (Modular application)
Define your routes

app/routes/news.py
```python
from fastapi import APIRouter
router = APIRouter(prefix="/news", tags=["news"])
# All routes in this router will be prefixed with /news
# Groups routes in the auto-generated documentation (/docs)
```
 Include the router in your main app
 
 main.py
```python
from .routes import news
# Include your routes here
app.include_router(news.router)
```
