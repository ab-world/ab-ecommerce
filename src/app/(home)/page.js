import Image from 'next/image';
import styles from './page.module.scss';
import { getMetadata } from '@/util/seo';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>홈</div>
            </main>
        </div>
    );
}

export const generateMetadata = async ({ params: { username } }) => {
    // return getMetadata({ title: `반짝반짝 빛날 ${username}님의 인생지도`, asPath: `/home/${username}` });
};
