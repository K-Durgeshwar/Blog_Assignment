import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const BlogEditor = ({ id }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('draft');
  const [isEditMode, setIsEditMode] = useState(false);
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      setBlogId(id);
      
      const fetchBlog = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
          const blog = response.data[0];
          setTitle(blog.title);
          setContent(blog.content);
          setImageUrl(blog.image_url);
          setVideoUrl(blog.video_url);
          setMetaTitle(blog.meta_title);
          setMetaDescription(blog.meta_description);
          setTags(blog.tags);
          setStatus(blog.status);
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };
      fetchBlog();
    }
  }, [id]);

  const handleSave = async () => {
    const blogData = {
      title,
      content,
      image_url: imageUrl,
      video_url: videoUrl,
      meta_title: metaTitle,
      meta_description: metaDescription,
      tags,
      status,
    };
  
    try {
      if (isEditMode) {
        if (!blogId) {
          console.error("Blog ID is missing. Cannot update.");
          return;
        }
        await axios.put(`http://localhost:5000/api/blogs/${blogId}`, blogData);
      } else {
        await axios.post('http://localhost:5000/api/blogs', blogData);
      }
      window.location.href = '/'; 
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">{isEditMode ? 'Edit Blog' : 'Create New Blog'}</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Video URL</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Meta Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter meta title"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Meta Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter meta description"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Tags</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Status</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        {isEditMode ? 'Update Blog' : 'Create Blog'}
      </button>

      <Link href="/" passHref>
        <button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
          Cancel
        </button>
      </Link>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: {
      id: id || null,
    },
  };
};

export default BlogEditor;
