// home 레이아웃
import '@/style/globals.scss';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import UpBtn from '@/component/common/UpBtn';
import { getMetadata } from '@/util/seo';

export const metadata = getMetadata();

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <UpBtn />
        </>
    );
}
