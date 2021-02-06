import express from 'express';
import fs from 'fs';

const router = express.Router();

router.post('/', (req, res) => {
  const date = Date.now();

  fs.writeFile(`./upload/images/image_${date}.jpg`, req.body.image, 'base64', (err) => {
    if(err){
      res.json({ error: err.message });
    }
  })
  res.json({ filename: `uploads/image_${date}.jpg` });
});

export default router;