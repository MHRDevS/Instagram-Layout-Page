import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

export default function Home() {
  // Post data with different images
  const postsList = [
    {
      id: 1,
      username: 'terrylucas',
      userImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      postImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
      caption: 'Exploring the mountains today! ⛰️✨'
    },
    {
      id: 2,
      username: 'lauranmatthews',
      userImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
      postImg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      caption: 'Home sweet home 🌿'
    },
    {
      id: 3,
      username: 'harryprescott',
      userImg: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100',
      postImg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      caption: 'Night sky view is insane! 🌌'
    }
  ];

  return (
    <div className="bg-[#fafafa] h-screen overflow-hidden flex flex-col">
      {/* Fixed Top Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow max-w-4xl mx-auto flex justify-center space-x-8 w-full h-full pt-6 px-4">
        
        {/* Left Side: Feed (Scrollable) */}
        <section className="w-full max-w-[470px] shrink-0 h-full overflow-y-auto pb-24 scrollbar-none">
          <Stories />
          
          {postsList.map((item) => (
            <Post 
              key={item.id}
              username={item.username}
              userImg={item.userImg}
              postImg={item.postImg}
              caption={item.caption}
            />
          ))}
        </section>

        {/* Right Side: Sidebar (Independently Scrollable) */}
        <section className="hidden lg:block w-[320px] shrink-0 h-full overflow-y-auto pb-24 scrollbar-none">
          <Sidebar />
        </section>

      </main>
    </div>
  );
}