import 'next-google-fonts';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Header from './components/Header';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
  username: string;
}

export const metadata = {
  title: 'Clerk App',
  description: 'Example Clerk App',
};

export default function RootLayout({ children, username }: RootLayoutProps) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'> {}
        <body>
          <Header username={username} /> {}
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
