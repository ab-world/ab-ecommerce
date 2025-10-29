// 홈 페이지
import styles from './page.module.scss';
import Image from 'next/image';
import { IconChevronRight } from '@tabler/icons-react';
import ItemListView from '@/component/common/ItemListView';

export default function Home(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <Image src="/bannerSample.jpg" fill priority alt="banner sample" />
                </div>

                <div className={styles.mainSection}>
                    <ItemListView
                        title={
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                🛒 지금 가장 많이 담는 특가 <IconChevronRight />
                            </div>
                        }
                        items={Array(40)
                            .fill(0)
                            .map((item, itemIdx) => itemIdx + 1)}
                    />
                </div>
            </main>
        </div>
    );
}
