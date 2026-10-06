import React from 'react';
import Image from 'next/image';
import logo from '../../assets/insta.png'; // Agar assets folder src/assets me hai
import { 
  Home, 
  Send, 
  PlusSquare, 
  Compass, 
  Heart,
  Search
} from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <div className="flex items-center justify-between max-w-5xl h-14 px-4 mx-auto">
        
        {/* Left: Instagram Logo */}
        <div className="flex items-center cursor-pointer pt-1">
          <Image 
            src={logo} 
            alt="Instagram Logo" 
            width={105}
            priority
            className="object-contain"
          />
        </div>

        {/* Center: Search Input (Sahi Styled) */}
        <div className="hidden sm:flex items-center bg-[#efefef] border border-gray-300 rounded-lg px-3 py-1.5 text-xs w-64">
          <Search className="w-4 h-4 mr-2 text-gray-500 shrink-0" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent outline-none w-full text-sm text-black placeholder-gray-500"
          />
        </div>

        {/* Right: Right Nav Icons (Explicit Dark Colors) */}
        <div className="flex items-center space-x-4">
          <Home className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition" />
          <Send className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition -rotate-45" />
          <PlusSquare className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition" />
          <Compass className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition" />
          <Heart className="w-6 h-6 text-black cursor-pointer hover:opacity-70 transition" />
          
          {/* User Profile Avatar */}
          <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-300 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </header>
  );
}