import React from 'react';

export default function Sidebar() {
  const suggestions = [
    { id: 1, username: 'terrylucas', relation: 'Followed by terrylucas + 2 more', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { id: 2, username: 'lauranmatthews', relation: 'Followed by lauranmatthews + 2...', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
    { id: 3, username: 'harryprescott', relation: 'Followed by harryprescott + 2 more', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100' },
    { id: 4, username: 'ednamanz', relation: 'Followed by ednamanz + 2 more', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100' },
    { id: 5, username: 'christinasterling', relation: 'Followed by christinasterling + 2...', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  ];

  return (
    <div className="w-full">
      {/* Current Logged-in User Profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
            alt="Current User" 
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <p className="font-semibold text-sm text-black cursor-pointer">shirleyromero</p>
            <p className="text-xs text-gray-600">Shirley Romero</p>
          </div>
        </div>
        <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between items-center my-4">
        <p className="text-sm font-semibold text-gray-600">Suggestions For You</p>
        <button className="text-xs font-semibold text-black hover:opacity-70">
          See All
        </button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-3">
        {suggestions.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={item.img} 
                alt={item.username} 
                className="w-8 h-8 rounded-full object-cover border"
              />
              <div className="max-w-[170px]">
                <p className="font-semibold text-sm text-black cursor-pointer truncate">{item.username}</p>
                <p className="text-[11px] text-gray-600 truncate">{item.relation}</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-8 text-xs text-gray-500 leading-5">
        <p className="break-words">
          About • Press • API • Jobs • Privacy • Terms • Locations • Top Accounts • Hashtags • Language
        </p>
        <p className="mt-4 uppercase text-[10px] text-gray-500">© 2026 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}