import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import '@/style/globals.scss';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata = {
    title: 'AB마켓',
    description: 'AB마켓',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
