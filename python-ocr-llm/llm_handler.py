# llm_handler.py
from langchain_google_genai import ChatGoogleGenerativeAI

API_KEY = "AIzaSyD_uEFyr9gMxbei57n4yYem5eBSMBTOzYU"
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", api_key=API_KEY)

def extract_nutrition_details(text):
    prompt = f"""
You are an intelligent text analyzer. The following text is extracted from the label of an FMCG food product (e.g., chocolate, biscuit, noodles, or ready-to-eat food) using OCR. The text may contain noise, inconsistent formatting, and duplicate or unclear information.

Your task is to clean and organize the information into the following clearly defined sections:

1. **Product Name** (if available)  
2. **Ingredients** – A list of ingredients in the order mentioned.  
3. **Additives** – List all food additives along with their E-numbers or codes, if present (e.g., E100 - Curcumin).  
4. **Allergens** – Extract all allergens mentioned (e.g., milk, nuts, soy, gluten).  
5. **Nutrition Information** – If any values are found (e.g., per 100g: Energy, Protein, Carbohydrates, Sugar, Fat, etc.), list them in tabular format.  
6. **Warnings** – Any allergy warnings, suitability (e.g., “Not suitable for vegans”), or consumption restrictions.  
7. **Other Labels** – e.g., "100% vegetarian", "No artificial preservatives", "FSSAI approved", etc.

Make sure the output is well-organized in markdown format with clear headings. If a section is missing from the input, mention `Not Available`.

Here is the raw text extracted from the image:

{text}
"""
    response = llm.invoke(prompt)
    return response.content
