// 로그인 페이지
import styles from './page.module.scss';
import Image from 'next/image';

export default function Login(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
            </main>
        </div>
    );
}
