import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateOrEditBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('draft');
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(response => {
          const blog = response.data;
          setTitle(blog.title);
          setContent(blog.content);
          setImageUrl(blog.image_url);
          setVideoUrl(blog.video_url);
          setMetaTitle(blog.meta_title);
          setMetaDescription(blog.meta_description);
          setTags(Array.isArray(blog.tags) ? blog.tags.join(', ') : ''); // Check if tags is an array
          setStatus(blog.status);
        })
        .catch(error => console.error('Error fetching blog:', error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      title,
      content,
      image_url: imageUrl,
      video_url: videoUrl,
      meta_title: metaTitle,
      meta_description: metaDescription,
      tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags to array
      status
    };
    try {
      if (isEdit) {
        await axios.put(`http://localhost:5000/api/blogs/${id}`, blogData);
      } else {
        await axios.post('http://localhost:5000/api/blogs', blogData);
      }
      router.push('/');
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Blog' : 'Create Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className="border p-2 mb-4 w-full" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          className="border p-2 mb-4 w-full" 
          placeholder="Meta Title" 
          value={metaTitle} 
          onChange={(e) => setMetaTitle(e.target.value)} 
        />
        <textarea 
          className="border p-2 mb-4 w-full" 
          placeholder="Meta Description" 
          rows="2"
          value={metaDescription} 
          onChange={(e) => setMetaDescription(e.target.value)}
        />
        <textarea 
          className="border p-2 mb-4 w-full" 
          placeholder="Content" 
          rows="10"
          value={content} 
          onChange={(e) => setContent(e.target.value)}
        />
        <input 
          className="border p-2 mb-4 w-full" 
          placeholder="Image URL" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
        />
        <input 
          className="border p-2 mb-4 w-full" 
          placeholder="Video URL" 
          value={videoUrl} 
          onChange={(e) => setVideoUrl(e.target.value)} 
        />
        <input 
          className="border p-2 mb-4 w-full" 
          placeholder="Tags (comma-separated)" 
          value={tags} 
          onChange={(e) => setTags(e.target.value)} 
        />
        <select 
          className="border p-2 mb-4 w-full" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEdit ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
};

export default CreateOrEditBlog;
