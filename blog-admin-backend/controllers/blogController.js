const Blog = require('../models/blog');

// Utility function for validating blog data
const validateBlogData = (data) => {
    const { title, content, image_url, video_url, meta_title, meta_description, tags, status } = data;
    if (!title || !content || !status) {
        return 'Title, content, and status are required fields.';
    }
    // Add further validation if needed for other fields (e.g., image_url, meta_title, etc.)
    return null;
};

// Create a new blog
const createBlog = (req, res) => {
    const data = req.body;

    // Validate data before creating blog
    const validationError = validateBlogData(data);
    if (validationError) {
        return res.status(400).send(validationError);
    }

    Blog.createBlog(data, (err, result) => {
        if (err) {
            console.error('Error creating blog:', err);
            return res.status(500).send('Error creating blog');
        }
        res.status(201).json(result);  // Return the created blog
    });
};

// Get all blogs
const getAllBlogs = (req, res) => {
    Blog.getAllBlogs((err, results) => {
        if (err) {
            console.error('Error fetching blogs:', err);
            return res.status(500).send('Error fetching blogs');
        }
        res.json(results);
    });
};

// Get a blog by ID
const getBlogById = (req, res) => {
    const { id } = req.params;
    Blog.getBlogById(id, (err, result) => {
        if (err) {
            console.error('Error fetching blog:', err);
            return res.status(500).send('Error fetching blog');
        }
        if (!result) return res.status(404).send('Blog not found');
        res.json(result);
    });
};

// Update a blog
const updateBlog = (req, res) => {
    const { id } = req.params;
    const data = req.body;

    // Validate data before updating blog
    const validationError = validateBlogData(data);
    if (validationError) {
        return res.status(400).send(validationError);
    }

    Blog.updateBlog(id, data, (err, result) => {
        if (err) {
            console.error('Error updating blog:', err);
            return res.status(500).send('Error updating blog');
        }
        res.json(result);  // Return the updated blog
    });
};

// Delete a blog
const deleteBlog = (req, res) => {
    const { id } = req.params;
    Blog.deleteBlog(id, (err, result) => {
        if (err) {
            console.error('Error deleting blog:', err);
            return res.status(500).send('Error deleting blog');
        }
        res.send('Blog deleted successfully');
    });
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
