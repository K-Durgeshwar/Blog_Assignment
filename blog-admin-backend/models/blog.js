const db = require('../config/db');

// Create a new blog
const createBlog = (data, callback) => {
    const { title, content, image_url, video_url, meta_title, meta_description, tags, status } = data;
    const query = 'INSERT INTO blogs (title, content, image_url, video_url, meta_title, meta_description, tags, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    db.query(query, [title, content, image_url, video_url, meta_title, meta_description, tags, status], (err, result) => {
        if (err) return callback(err);
        callback(null, result.rows[0]);  // Return the newly created blog
    });
};

// Get all blogs
const getAllBlogs = (callback) => {
    const query = 'SELECT * FROM blogs';
    db.query(query, (err, results) => {
        if (err) return callback(err);
        callback(null, results.rows);  // Return all blogs
    });
};

// Get a single blog by ID
const getBlogById = (id, callback) => {
    const query = 'SELECT * FROM blogs WHERE id = $1';
    db.query(query, [id], (err, result) => {
        if (err) return callback(err);
        if (result.rows.length === 0) return callback(null, null);
        callback(null, result.rows[0]);  // Return the blog by ID
    });
};

// Update a blog
const updateBlog = (id, data, callback) => {
    const { title, content, image_url, video_url, meta_title, meta_description, tags, status } = data;
    const query = 'UPDATE blogs SET title = $1, content = $2, image_url = $3, video_url = $4, meta_title = $5, meta_description = $6, tags = $7, status = $8 WHERE id = $9 RETURNING *';
    db.query(query, [title, content, image_url, video_url, meta_title, meta_description, tags, status, id], (err, result) => {
        if (err) return callback(err);
        callback(null, result.rows[0]);  // Return the updated blog
    });
};

// Delete a blog
const deleteBlog = (id, callback) => {
    const query = 'DELETE FROM blogs WHERE id = $1';
    db.query(query, [id], (err, result) => {
        if (err) return callback(err);
        callback(null, result.rowCount);  // Return the number of rows deleted
    });
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
