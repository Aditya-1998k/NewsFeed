from fastapi import APIRouter
from ..db import db
from ..services.fetch_news import sync_news

router = APIRouter(prefix="/news", tags=["news"])

def serialize_doc(doc):
    doc["_id"] = str(doc["_id"])
    return doc

@router.get("/")
async def get_news():
    news = await db.news.find().to_list(100)
    return [serialize_doc(n) for n in news]

@router.post("/fetch")
async def fetch_news():
    """Fetch latest news from NewsAPI and store in MongoDB"""
    await sync_news()
    return {"status": "ok", "message": "Syncing successfull."}
