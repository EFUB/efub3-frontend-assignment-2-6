import { Michroma } from 'next/font/google';
import './globals.css';

const michroma = Michroma({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={michroma.className}>{children}</body>
    </html>
  );
}
