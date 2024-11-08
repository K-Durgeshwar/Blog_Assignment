import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get the blog ID from the URL

  useEffect(() => {
    if (id) {
      console.log("Fetching blog with ID:", id);  // Debugging log
      axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(response => {
          console.log("Blog data:", response.data);  // Debugging log
          // Access the first element of the array (response.data[0])
          setBlog(response.data[0]); // Store the fetched blog data
        })
        .catch(error => {
          console.error('Error fetching blog:', error);  // Debugging log
          setBlog(null); // Optionally handle error by setting blog to null
        });
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-lg mt-4 whitespace-pre-line break-words">{blog.content}</p> {/* Ensure content wraps */}
      {/* Display other fields */}
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
