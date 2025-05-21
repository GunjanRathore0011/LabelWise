# LabelWise – AI-Powered Nutrition Insight Platform

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Project Overview

**LabelWise** is an AI-powered web application developed using the **MERN stack** that enables users to analyze **FMCG (Fast-Moving Consumer Goods)** product labels for nutritional value and health implications. Users can upload product label images, which are processed using **OCR (Optical Character Recognition)** to extract text, and then interpreted by **Generative AI** models to summarize ingredients, additives, calorie content, and their health impacts.

The platform is built with a **mobile-first, accessible UI**, targeting users with varying technical backgrounds. Whether you're managing conditions like **diabetes, hypertension, or obesity**, or just want to make healthier food choices, LabelWise provides personalized, AI-generated insights to support informed decisions.

**GitHub Repository:**  
📂 [https://github.com/GunjanRathore0011/LabelWise](https://github.com/GunjanRathore0011/LabelWise)

---

## Features

### 🧾 Core Functionality
- Upload images of packaged food product labels
- Extract ingredient and nutritional text via OCR
- Get real-time, AI-generated analysis of:
  - Calories
  - Additives and preservatives
  - Allergen risks
  - Health impact summaries

### 🤖 AI Integrations
- **OCR Functionality:**  
  - Implemented using Python's `Tesseract` library
  - Served via a **FastAPI** backend for integration with the MERN stack frontend

- **Health Analysis & Summarization:**  
  - Powered by **Google Gemini (Generative AI)**
  - Provides easy-to-understand summaries about ingredients and their health effects

### 📱 Mobile-First Design
- Responsive and accessible interface
- Designed for users with limited tech knowledge
- Emphasis on readability and user-friendliness

---

## Technologies Used

### 💻 Frontend
- React.js
- Tailwind CSS
- ShadCN UI 
- Axios for API communication

### 🌐 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcrypt for secure authentication

### 🔗 Additional Services
- Cloudinary (for image storage)
- Python (Tesseract OCR via FastAPI)
- Gemini API (Google Generative AI)

---

## Installation

### ⚙️ Prerequisites
- Node.js
- npm or yarn
- MongoDB instance
- Python 3.x
- Tesseract installed locally
- Gemini API key

---

### 🔧 Backend Setup

```bash
git clone https://github.com/GunjanRathore0011/LabelWise.git
cd LabelWise/backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FASTAPI_OCR_URL=http://localhost:8000/ocr
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npm start
```

---

### 🧠 OCR FastAPI Server (Python)

```bash
cd ../ocr-backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Ensure `tesseract` is installed and in your system path.

---

### 💻 Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm start
```

---

## Usage

1. Visit the LabelWise frontend in your browser  
2. Upload a product label image  
3. View extracted ingredients and nutritional info  
4. Receive an AI-generated summary of health impacts  
5. Make more informed food choices!

---

## Contributing

Contributions are welcome!

### Steps:
1. Fork the repository  
2. Create a new feature branch  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit and push your changes  
   ```bash
   git commit -m "Add Your Feature"
   git push origin feature/YourFeature
   ```
4. Open a pull request

---

## Contact

**Gunjan Rathore**  
🔗 [LinkedIn](https://www.linkedin.com/in/gunjanrathore11/)  
💻 [GitHub](https://github.com/GunjanRathore0011)
