from fastapi import FastAPI

app = FastAPI(title="Newsfeed App")

@app.get("/")
async def root():
    return {"message": "Welcome to the Newsfeed API."}
