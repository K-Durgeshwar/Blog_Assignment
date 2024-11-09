import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import Link from 'next/link';  

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-6">
        <Link href="/create" className="bg-blue-500 text-white px-4 py-2 mb-4 rounded">
          Create New Blog
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
