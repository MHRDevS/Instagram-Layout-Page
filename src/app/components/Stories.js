import React from 'react';

export default function Stories() {
  const storyUsers = [
    { id: 1, username: 'your story', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
    { id: 2, username: 'terrylucas', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { id: 3, username: 'lauranm...', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
    { id: 4, username: 'harrypres...', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100' },
    { id: 5, username: 'ednamanz', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100' },
    { id: 6, username: 'christinae...', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
    { id: 7, username: 'johnroch...', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
  ];

  return (
    <div className="flex space-x-3 p-4 bg-white border border-gray-300 rounded-sm overflow-x-auto scrollbar-none">
      {storyUsers.map((user) => (
        <div key={user.id} className="flex flex-col items-center cursor-pointer group shrink-0">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px] rounded-full">
            <div className="bg-white p-[2px] rounded-full">
              <img 
                src={user.img} 
                alt={user.username} 
                className="w-14 h-14 rounded-full object-cover group-hover:scale-105 transition transform duration-200 ease-out"
              />
            </div>
          </div>
          <p className="text-xs w-16 truncate text-center mt-1 text-gray-700">
            {user.username}
          </p>
        </div>
      ))}
    </div>
  );
}