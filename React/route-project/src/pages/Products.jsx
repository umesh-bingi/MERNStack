import React from 'react';

const Products = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">E-Shop</h1>
      </header>

      <main className="mt-8">
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Welcome to E-Shop!</h2>
          <p className="mt-2 text-gray-600">Your one-stop shop for all your needs.</p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Shop Now</button>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Card */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
                <img src={`https://via.placeholder.com/150?text=Product+${index + 1}`} alt={`Product ${index + 1}`} className="w-full h-auto rounded-md" />
                <h4 className="mt-2 font-semibold">{`Product ${index + 1}`}</h4>
                <p className="text-gray-500">{`$${(index + 1) * 10}.00`}</p>
                <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration=300">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt12 text-center">
        <p className='text-gray -600'>&copy; 2024 E-Shop. All rights reserved.</p> 
      </footer> 
    </div> 
  ); 
};

export default Products;