// 홈 페이지
'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ItemListView from '@/component/common/item/ItemListView';
import { IconChevronRight } from '@tabler/icons-react';

export default function Home(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <div>
                        <picture>
                            <source srcSet="/bannerSampleSmall.png" media="(max-width: 900px)" />

                            <Image src="/bannerSample.png" fill priority alt="banner sample" />
                        </picture>
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <ItemListView
                        title={
                            <Link href={'/items'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                🛒 지금 가장 많이 담는 특가 <IconChevronRight />
                            </Link>
                        }
                        subTitle={'꼭 담아야 할 추천 특가템 최대 60% OFF'}
                        items={Array(40)
                            .fill(0)
                            .map((item, index) => index + 1)}
                    />
                </div>
            </main>
        </div>
    );
}
