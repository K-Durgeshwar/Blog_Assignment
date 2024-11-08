const db = require('../config/db');

// Create a new blog
const createBlog = (data, callback) => {
    const { title, content, image_url, video_url, meta_title, meta_description, tags, status } = data;
    const query = 'INSERT INTO blogs (title, content, image_url, video_url, meta_title, meta_description, tags, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [title, content, image_url, video_url, meta_title, meta_description, tags, status], callback);
};

// Get all blogs
const getAllBlogs = (callback) => {
    const query = 'SELECT * FROM blogs';
    db.query(query, callback);
};

// Get a single blog by ID
const getBlogById = (id, callback) => {
    const query = 'SELECT * FROM blogs WHERE id = ?';
    db.query(query, [id], callback);
};

// Update a blog
const updateBlog = (id, data, callback) => {
    const { title, content, image_url, video_url, meta_title, meta_description, tags, status } = data;
    const query = 'UPDATE blogs SET title = ?, content = ?, image_url = ?, video_url = ?, meta_title = ?, meta_description = ?, tags = ?, status = ? WHERE id = ?';
    db.query(query, [title, content, image_url, video_url, meta_title, meta_description, tags, status, id], callback);
};

// Delete a blog
const deleteBlog = (id, callback) => {
    const query = 'DELETE FROM blogs WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
