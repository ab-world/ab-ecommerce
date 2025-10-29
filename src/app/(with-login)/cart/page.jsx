// 장바구니 페이지
'use client';
import styles from './page.module.scss';

export default function Cart(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>장바구니</div>
            </main>
        </div>
    );
}
