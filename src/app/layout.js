import './globals.css';

export const metadata = {
  title: 'Instagram Clone',
  description: 'Instagram Clone built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fafafa]">
        {children}
      </body>
    </html>
  );
}