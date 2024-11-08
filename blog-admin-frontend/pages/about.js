// pages/about.js
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600">About This Application</h1>
      
      <div className="mt-6 text-center">
        <p className="text-xl text-gray-700 mb-4">
          Welcome to our Blog Admin Dashboard! This powerful tool allows you to manage, create, and edit blog posts with ease.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Built using modern technologies, it is designed to provide a seamless user experience for bloggers, writers, and content creators.
        </p>
      </div>

      {/* Hero Section with Image */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 bg-blue-50 p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            We aim to empower content creators by providing them with a fast, efficient, and intuitive platform to manage their blogs. Whether you're writing, editing, or publishing, this application is here to streamline your workflow.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <Image
            src="https://via.placeholder.com/500x300"
            alt="About Image"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Create Blog Posts</h3>
          <p className="text-gray-700">
            Effortlessly create new blog posts with rich text editing, multimedia support, and easy formatting tools.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Edit Existing Blogs</h3>
          <p className="text-gray-700">
            Easily edit existing blog posts with our user-friendly interface, offering complete control over your content.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">SEO Optimization</h3>
          <p className="text-gray-700">
            Automatically optimize your blog posts for search engines with built-in SEO tools, making your content discoverable.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">What Our Users Say</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our users love the simplicity and efficiency of this platform. Here's what they have to say:
        </p>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <p className="text-lg text-gray-700 mb-4">
              "This application made managing my blog posts so much easier. I can now focus more on writing, and less on the technical aspects."
            </p>
            <p className="font-semibold text-blue-600">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <p className="text-lg text-gray-700 mb-4">
              "I love the SEO tools built into the platform. They really helped me improve my blog's visibility on search engines!"
            </p>
            <p className="font-semibold text-blue-600">- John Smith</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center py-6 mt-12 bg-blue-600 text-white rounded-lg">
        <p>Blog Admin Dashboard - Empowering Content Creators</p>
      </div>
    </div>
  );
};

export default About;
