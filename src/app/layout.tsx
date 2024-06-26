import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideNav from './_components/sidenav/sidenav';
import Header from './_components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='container max-w-full'>
                    <SideNav />
                    <div>
                        <Header />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
