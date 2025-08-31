"""Imports Start"""
from fastapi import FastAPI
from .routes import news
"""Imports complete"""

app = FastAPI(title="Newsfeed App")


# register your routes here
app.include_router(news.router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Newsfeed API."}
