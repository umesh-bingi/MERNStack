import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xs bg-gradient-to-b from-white to-gray-200 rounded-3xl p-6 border-5 border-white shadow-lg m-5">
        <div className="text-center font-bold text-3xl text-blue-600">Sign In</div>
        <form className="mt-5" action="">
          <input
            placeholder="E-mail"
            id="email"
            name="email"
            type="email"
            className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md focus:outline-none focus:border-blue-500"
            required
          />
          <span className="block mt-2 ml-2">
            <a href="#" className="text-blue-500 text-xs">Forgot Password?</a>
          </span>
          <input 
            value="Sign In" 
            type="submit" 
            className="w-full font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 mt-5 rounded-full shadow-md transition-transform duration-200 hover:scale-105 active:scale-95" 
          />
        </form>
        <div className="mt-6">
          <span className="block text-center text-gray-400 text-xs">Or Sign in with</span>
          <div className="flex justify-center gap-4 mt-2">
            <button className="bg-gradient-to-r from-black to-gray-600 border-white border-5 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 active:scale-90">
              <svg viewBox="0 0 488 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="bg-gradient-to-r from-black to-gray-600 border-white border-5 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 active:scale-90">
              <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7C165 .1 .1 .1 .1 .1C63 .1 .1 .1 .1 .1C63 .1 .1 .1 .1 .1C63 .1 .1 .1 .1 .1C63 .1 .1 .1"></path>
              </svg>
            </button>
            <button className="bg-gradient-to-r from-black to-gray-600 border-white border-5 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 active:scale-90">
              <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                <path d="M389.2,48h70.6L305.6,224,487,464H345L233.7,318,106,464H35L200,275,26,48H172L272,180,389,48zM364,421h39L151,88h -42L364,421z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="block text-center mt-4">
          <a href="#" className="text-blue-500 text-xs">Learn user license agreement</a>
        </span>
      </div>
    </div>
   );
};

export default SignIn;