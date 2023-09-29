import '../style/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';

import dynamic from 'next/dynamic';

const DynamicBootstrap = dynamic(
    () => require('bootstrap/dist/js/bootstrap.min.js'),
    { ssr: false }
);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Aditya Gautam',
    description: 'Aditya Gautam Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}