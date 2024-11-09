import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();  // Using Next.js's useRouter for route parameters

  useEffect(() => {
    const fetchBlog = async () => {
      // Get the blogId from the URL parameter using useRouter
      const { id } = router.query;
      if (!id) return;  // If id is not available, don't proceed further

      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        // Check the response
        if (response.data) {
          setBlog(response.data);  // Update the state with the fetched blog data
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [router.query.id]);  // Run this effect when the blog ID changes

  if (!blog) return <p>Loading...</p>;  // Show loading message while waiting for the data

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-lg mt-4 whitespace-pre-line break-words">{blog.content}</p> {/* Ensure content wraps */}
      {blog.image_url && (
        <div>
          <strong>Image:</strong>
          <img src={blog.image_url} alt={blog.title} className="w-full" />
        </div>
      )}
      {blog.video_url && (
        <div>
          <strong>Video:</strong>
          <a href={blog.video_url} target="_blank" rel="noopener noreferrer">Watch Video</a>
        </div>
      )}
      <div>
        <strong>Meta Title:</strong> {blog.meta_title}
      </div>
      <div>
        <strong>Meta Description:</strong> {blog.meta_description}
      </div>
      <div>
        <strong>Status:</strong> {blog.status}
      </div>
      <div>
        <strong>Tags:</strong> {blog.tags}
      </div>
    </div>
  );
};

export default BlogDetail;
