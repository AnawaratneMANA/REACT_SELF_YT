import express from 'express'
const router = express.Router();
import { getPosts, createPost, updatePost } from "../controllers/post.js";

router.get('/', getPosts );
router.post('/', createPost );
router.get('/:id', updatePost );

export default router;
