// 찜하기 페이지
'use client';
import styles from './page.module.scss';
import Image from 'next/image';

export default function Wish(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>찜하기</div>
            </main>
        </div>
    );
}
