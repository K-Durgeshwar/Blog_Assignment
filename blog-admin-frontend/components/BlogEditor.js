import { useState } from 'react';

const BlogEditor = ({ blog = {}, onSave }) => {
  const [title, setTitle] = useState(blog.title || '');
  const [content, setContent] = useState(blog.content || '');
  const [imageUrl, setImageUrl] = useState(blog.image_url || '');
  const [videoUrl, setVideoUrl] = useState(blog.video_url || '');
  const [metaTitle, setMetaTitle] = useState(blog.meta_title || '');
  const [metaDescription, setMetaDescription] = useState(blog.meta_description || '');
  const [tags, setTags] = useState(blog.tags || '');
  const [status, setStatus] = useState(blog.status || 'draft');

  const handleSubmit = () => {
    onSave({ title, content, image_url: imageUrl, video_url: videoUrl, meta_title: metaTitle, meta_description: metaDescription, tags, status });
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <input type="text" placeholder="Video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
      <input type="text" placeholder="Meta Title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
      <textarea placeholder="Meta Description" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
      <input type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default BlogEditor;
