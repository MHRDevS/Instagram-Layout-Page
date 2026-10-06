'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile, X } from 'lucide-react';

export default function Post({ username, userImg, postImg, caption }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  
  // Modal aur Comments ki state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentsList, setCommentsList] = useState([
    { id: 1, user: 'alex_dev', text: 'Awesome photo! 🔥' },
    { id: 2, user: 'sarah_m', text: 'Love this vibe ✨' },
    { id: 3, user: 'john_doe', text: 'Great capture! 📸' }
  ]);
  const [newComment, setNewComment] = useState('');

  // Double click heart animation
  const handleDoubleClick = () => {
    if (!isLiked) setIsLiked(true);
    setShowHeartAnim(true);
    setTimeout(() => {
      setShowHeartAnim(false);
    }, 1000);
  };

  // Heart toggle
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  // New comment submit karne ka function
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setCommentsList([
      ...commentsList,
      {
        id: Date.now(),
        user: 'shirleyromero',
        text: newComment.trim()
      }
    ]);

    setNewComment('');
  };

  return (
    <>
      {/* --- STANDARD MAIN FEED POST --- */}
      <article className="bg-white my-6 border border-gray-300 rounded-sm select-none">
        {/* Header */}
        <div className="flex items-center p-3">
          <img 
            src={userImg || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"} 
            alt={username} 
            className="rounded-full h-8 w-8 object-cover border cursor-pointer mr-3"
          />
          <p className="flex-1 font-semibold text-sm text-black cursor-pointer">{username}</p>
          <MoreHorizontal className="h-5 text-gray-700 cursor-pointer" />
        </div>

        {/* Post Image */}
        <div 
          className="relative w-full bg-black cursor-pointer flex items-center justify-center overflow-hidden"
          onDoubleClick={handleDoubleClick}
        >
          <img 
            src={postImg} 
            alt="Post content" 
            className="w-full object-cover max-h-[550px]"
          />

          {showHeartAnim && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <Heart className="w-24 h-24 text-red-500 fill-red-500 animate-ping opacity-90 drop-shadow-lg" />
            </div>
          )}
        </div>

        {/* Action Buttons & Details */}
        <div className="p-4">
          <div className="flex justify-between mb-3">
            <div className="flex space-x-4 items-center">
              <button onClick={handleLikeClick} className="focus:outline-none">
                <Heart 
                  className={`h-6 w-6 cursor-pointer transition-transform duration-150 active:scale-125 ${
                    isLiked ? 'text-red-500 fill-red-500' : 'text-black hover:text-gray-500'
                  }`} 
                />
              </button>

              {/* Message Icon: Opens Separate Modal */}
              <button onClick={() => setIsModalOpen(true)} className="focus:outline-none">
                <MessageCircle className="h-6 w-6 text-black cursor-pointer hover:opacity-60 transition" />
              </button>

              <Send className="h-6 w-6 text-black cursor-pointer hover:opacity-60 transition -rotate-45" />
            </div>
            <Bookmark className="h-6 w-6 text-black cursor-pointer hover:opacity-60 transition" />
          </div>

          {/* Likes */}
          <p className="font-semibold text-sm text-black mb-1">
            {isLiked ? '1,001 likes' : '1,000 likes'}
          </p>

          {/* Caption */}
          <p className="text-sm text-black">
            <span className="font-semibold text-black mr-2">{username}</span>
            {caption}
          </p>

          {/* View All Comments Link -> Modal Kholega */}
          {commentsList.length > 0 && (
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="text-gray-500 text-sm mt-2 hover:underline focus:outline-none block"
            >
              View all {commentsList.length} comments
            </button>
          )}
        </div>

        {/* Quick Comment Input */}
        <form onSubmit={handleAddComment} className="flex items-center border-t border-gray-200 px-4 py-3">
          <Smile className="h-6 w-6 text-gray-500 mr-3 cursor-pointer hover:text-black transition" />
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full outline-none text-sm text-black bg-transparent"
          />
          <button 
            type="submit" 
            disabled={!newComment.trim()}
            className="text-sm font-semibold text-blue-500 disabled:opacity-40 ml-2 hover:text-blue-700"
          >
            Post
          </button>
        </form>
      </article>

      {/* --- SEPARATE INSTAGRAM COMMENT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4">
          
          {/* Close Button */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:opacity-70 focus:outline-none z-50"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Modal Content Box */}
          <div className="bg-white rounded-r sm:rounded-lg overflow-hidden max-w-4xl w-full h-[85vh] flex flex-col md:flex-row shadow-2xl">
            
            {/* Modal Left Side: Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center h-1/2 md:h-full">
              <img 
                src={postImg} 
                alt="Post detail" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Right Side: User Details & Comments List */}
            <div className="md:w-2/5 flex flex-col h-1/2 md:h-full bg-white">
              
              {/* Header */}
              <div className="flex items-center p-4 border-b border-gray-200">
                <img 
                  src={userImg || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"} 
                  alt={username} 
                  className="rounded-full h-8 w-8 object-cover border mr-3"
                />
                <p className="font-semibold text-sm text-black">{username}</p>
              </div>

              {/* Comments Scrollable Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-none">
                {/* Original Post Caption */}
                <div className="flex items-start space-x-3">
                  <img src={userImg} alt="" className="w-8 h-8 rounded-full object-cover border" />
                  <p className="text-sm text-black">
                    <span className="font-semibold mr-2">{username}</span>
                    {caption}
                  </p>
                </div>
                <hr className="border-gray-100" />

                {/* All Comments */}
                {commentsList.map((c) => (
                  <div key={c.id} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
                      {c.user[0].toUpperCase()}
                    </div>
                    <p className="text-sm text-black">
                      <span className="font-semibold mr-2">{c.user}</span>
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Actions & Comment Input inside Modal */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between mb-2">
                  <div className="flex space-x-4">
                    <Heart 
                      onClick={handleLikeClick}
                      className={`h-6 w-6 cursor-pointer ${isLiked ? 'text-red-500 fill-red-500' : 'text-black'}`} 
                    />
                    <MessageCircle className="h-6 w-6 text-black" />
                    <Send className="h-6 w-6 text-black -rotate-45" />
                  </div>
                  <Bookmark className="h-6 w-6 text-black" />
                </div>
                <p className="font-semibold text-sm text-black mb-2">
                  {isLiked ? '1,001 likes' : '1,000 likes'}
                </p>

                {/* Form inside Modal */}
                <form onSubmit={handleAddComment} className="flex items-center pt-2 border-t border-gray-100">
                  <Smile className="h-6 w-6 text-gray-500 mr-2 cursor-pointer" />
                  <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full outline-none text-sm text-black bg-transparent"
                  />
                  <button 
                    type="submit" 
                    disabled={!newComment.trim()}
                    className="text-sm font-semibold text-blue-500 disabled:opacity-40 ml-2"
                  >
                    Post
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}