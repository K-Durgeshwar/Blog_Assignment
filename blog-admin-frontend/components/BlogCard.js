import Link from 'next/link';

const BlogCard = ({ blog, onDelete }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
    <p className="text-gray-600 line-clamp-3">{blog.content}</p>
    <div className="mt-4">
      <Link href={`/blog/${blog.id}`}>
        <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded">Read More</button>
      </Link>
      <Link href={{ pathname: '/create', query: { id: blog.id } }}>
        <button className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded">Edit</button>
      </Link>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => onDelete(blog.id)}>
        Delete
      </button>
    </div>
  </div>
);

export default BlogCard;
