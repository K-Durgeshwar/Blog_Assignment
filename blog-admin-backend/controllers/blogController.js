const Blog = require('../models/blog');

// Create a new blog
const createBlog = (req, res) => {
    const data = req.body;
    Blog.createBlog(data, (err, result) => {
        if (err) return res.status(500).send('Error creating blog');
        res.status(201).send('Blog created successfully');
    });
};

// Get all blogs
const getAllBlogs = (req, res) => {
    Blog.getAllBlogs((err, results) => {
        if (err) return res.status(500).send('Error fetching blogs');
        res.json(results);
    });
};

// Get a blog by ID
const getBlogById = (req, res) => {
    const { id } = req.params;
    Blog.getBlogById(id, (err, result) => {
        if (err) return res.status(500).send('Error fetching blog');
        if (!result) return res.status(404).send('Blog not found');
        res.json(result);
    });
};

// Update a blog
const updateBlog = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Blog.updateBlog(id, data, (err, result) => {
        if (err) return res.status(500).send('Error updating blog');
        res.send('Blog updated successfully');
    });
};

// Delete a blog
const deleteBlog = (req, res) => {
    const { id } = req.params;
    Blog.deleteBlog(id, (err, result) => {
        if (err) return res.status(500).send('Error deleting blog');
        res.send('Blog deleted successfully');
    });
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
