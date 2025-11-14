'use client';
import '@/style/globals.scss';
import { Suspense, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import NotiStackProvider from '@/component/common/snackbar/NotiStackProvider';

export default function RootLayout({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>{children}</Provider>
            <NotiStackProvider />
        </Suspense>
    );
}
