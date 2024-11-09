const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define routes for the blog operations
router.post('/blogs', blogController.createBlog);      // Create a blog
router.get('/blogs', blogController.getAllBlogs);      // Get all blogs
router.get('/blogs/:id', blogController.getBlogById);  // Get blog by ID
router.put('/blogs/:id', blogController.updateBlog);   // Update a blog
router.delete('/blogs/:id', blogController.deleteBlog); // Delete a blog

module.exports = router;
