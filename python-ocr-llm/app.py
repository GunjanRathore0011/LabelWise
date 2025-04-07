# app.py
from fastapi import FastAPI, UploadFile, File, Form
import shutil
from ocr_handler import extract_text_from_image
from llm_handler import extract_nutrition_details

app = FastAPI()

@app.post("/analyze-image")
async def analyze_image(file: UploadFile = File(...),
    productName: str = Form(...),
    companyName: str = Form(...)):
    temp_image_path = f"temp_{file.filename}"
    
    # print("Product:", productName)
    # print("Company:", companyName)

    # Save uploaded image
    with open(temp_image_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    # Extract text via OCR
    raw_text = extract_text_from_image(temp_image_path)

    # Analyze using Gemini
    structured_data = extract_nutrition_details(raw_text)

    return {"output": structured_data}
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
