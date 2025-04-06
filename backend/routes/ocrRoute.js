const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/analyze', upload.single('image'), async (req, res) => {
  const formData = new FormData();
  const filePath = req.file.path;
  formData.append('file', fs.createReadStream(filePath));

  try {
    const response = await axios.post('http://localhost:8000/analyze-image', formData, {
      headers: formData.getHeaders(),
    });
    // console.log(response.data)
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to process image' });
  } finally {
    fs.unlink(filePath, err => {
      if (err) console.error('Failed to delete uploaded image:', err);
    });
  }
});

module.exports = router;
