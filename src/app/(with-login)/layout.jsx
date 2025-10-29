// with-login 레이아웃
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import UpBtn from '@/component/layout/UpBtn';
import '@/style/globals.scss';

export const metadata = {
    title: 'AB마켓',
    description: 'AB마켓',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <Header />
                {children}
                <Footer />
                <UpBtn />
            </body>
        </html>
    );
}
