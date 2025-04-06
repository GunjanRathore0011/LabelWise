const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/analyze', upload.single('image'), async (req, res) => {
  const formData = new FormData();
  formData.append('image', fs.createReadStream(req.file.path));

  try {
    const response = await axios.post('http://localhost:5000/analyze', formData, {
      headers: formData.getHeaders(),
    });

    res.json(response.data); // LLM-organized data
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

module.exports = router;
