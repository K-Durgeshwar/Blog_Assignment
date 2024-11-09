import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogId = window.location.pathname.split('/').pop(); 
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${blogId}`);
        setBlog(response.data[0]); 
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, []); 

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-lg mt-4 whitespace-pre-line break-words">{blog.content}</p> {/* Ensure content wraps */}
      <p><strong>Image:</strong> <img src={blog.image_url} alt={blog.title} className="w-full" /></p>
      <p><strong>Video:</strong> <a href={blog.video_url} target="_blank" rel="noopener noreferrer">Watch Video</a></p>
      <p><strong>Meta Title:</strong> {blog.meta_title}</p>
      <p><strong>Meta Description:</strong> {blog.meta_description}</p>
      <p><strong>Status:</strong> {blog.status}</p>
      <p><strong>Tags:</strong> {blog.tags}</p>
    </div>
  );
};

export default BlogDetail;
