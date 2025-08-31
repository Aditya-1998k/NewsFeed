import httpx
import os
from datetime import datetime
from loguru import logger
from ..db import db
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("NEWS_API_KEY")
NEWS_API_URL = "https://newsapi.org/v2/top-headlines"

async def fetch_and_store_news(country: str = "us"):
    if not API_KEY:
        logger.error("❌ NEWS_API_KEY not set in .env")
        return

    params = {"country": country, "apiKey": API_KEY}

    async with httpx.AsyncClient() as client:
        resp = await client.get(NEWS_API_URL, params=params)

    if resp.status_code != 200:
        logger.error(f"❌ Failed to fetch news: {resp.text}")
        return

    articles = resp.json().get("articles", [])
    inserted_count = 0

    for article in articles:
        news_doc = {
            "title": article.get("title"),
            "description": article.get("description"),
            "url": article.get("url"),
            "source": article.get("source", {}).get("name"),
            "published_at": (
                datetime.fromisoformat(article["publishedAt"].replace("Z", "+00:00"))
                if article.get("publishedAt") else datetime.utcnow()
            ),
        }

        result = await db.news.update_one(
            {"url": news_doc["url"]}, {"$setOnInsert": news_doc}, upsert=True
        )
        if result.upserted_id:
            inserted_count += 1

    logger.info(f"✅ Inserted {inserted_count} new articles")
