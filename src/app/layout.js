import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './context/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Logicea Test',
  description: 'Test with Jokes API from Retool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
