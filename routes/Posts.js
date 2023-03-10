import express from 'express';
import { postImage, getPosts, getImage, } from '../controllers/Posts.js';
import multer from 'multer';
const router = express.Router();

// Set up multer storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/upload', postImage);
router.get('/getPosts', getPosts);
router.get('/image/:id', getImage);
// router.post('/upload-image', uploadImg);
export default router;
