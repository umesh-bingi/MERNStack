import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-2 text-gray-600">We'd love to hear from you!</p>
      </header>

      <main className="mt-8">
        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-blue-500" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-blue-500" 
              placeholder="Your Email"
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea 
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
      </main>

      <footer className='mt12 text-center'>
        <p className='text-gray -600'>&copy; 2024 E-Shop. All rights reserved.</p> 
      </footer> 
    </div> 
  ); 
};

export default Contact;