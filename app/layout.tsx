import './globals.css';
import { Inter } from 'next/font/google';

import Footer from './(shared)/Footer';
import Navbar from './(shared)/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Origin Story Creator',
  description: 'Create a Dungeons and Dragons Origin Story',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-[url(../public/assets/originBackground.png)] bg-cover ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
