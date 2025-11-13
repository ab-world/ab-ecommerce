'use client';
import '@/style/globals.scss';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NotiStackProvider from '@/component/common/snackbar/NotiStackProvider';

export default function RootLayout({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <>
            {children}
            <NotiStackProvider />
        </>
    );
}
