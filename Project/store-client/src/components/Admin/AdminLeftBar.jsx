import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLeftBar = () => {
  const navigate = useNavigate();

  const Linksdata = [
    { title: 'Dashboard', path: '/admin/dashboard' },
    { title: 'Products', path: '/admin/products' },
    { title: 'Orders', path: '/admin/orders' },
    { title: 'Customers', path: '/admin/customers' },
    { title: 'Settings', path: '/admin/settings' },
  ];

  // Logout Handler
  const handleLogout = () => {
    // Add any logout logic here, like clearing tokens or user data
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="w-full h-screen bg-gray-100 shadow-md flex justify-center items-center">
      <div className="h-full w-full flex flex-col">
        
        {/* Logo Section */}
        <div className="h-[10%] w-full text-blue-600 flex justify-center font-bold text-2xl items-center">
          ShopEase
        </div>

        {/* Links Section */}
        <div className="h-[80%] w-full flex flex-col items-center gap-2 mt-4">
          {Linksdata.map((link, index) => (
            <NavLink 
              to={link.path} 
              key={index} 
              className={({ isActive }) => 
                `h-[10%] w-full px-8 flex justify-start items-center rounded-sm transition-colors duration-200 ${
                  isActive 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-blue-600 hover:bg-blue-200'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Logout Section */}
        <div className="h-[10%] w-full flex items-end">
          <button 
            onClick={handleLogout}
            className="px-8 bg-red-500 w-full h-2/3 text-white font-bold rounded-sm hover:bg-red-600 transition-colors shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLeftBar;