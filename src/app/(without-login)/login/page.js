import Image from 'next/image';
import styles from './page.module.scss';

export default function Login() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
            </main>
        </div>
    );
}
