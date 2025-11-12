import '@/style/globals.scss';
import NotiStackProvider from '@/component/common/snackbar/NotiStackProvider';

export const metadata = {
    title: 'AB마켓',
    description: 'AB마켓',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <>
            {children}
            <NotiStackProvider />
        </>
    );
}
