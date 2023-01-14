const express = require("express");

const fileController = require("../controllers/fileController");

const router = express.Router();

// GET /file/posts
router.get("/posts", fileController.getPosts);

// POST /file/posts
router.post("/posts", fileController.createPost);

module.exports = router;
