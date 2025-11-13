// 상품리스트 페이지
'use client';
import styles from './page.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ItemListView from '@/component/common/item/ItemListView';
import { CATEGORY_SAMPLE } from '@/const/sample';

export default function Categories(props) {
    const params = useParams();
    const [mainCategory, setMainCategory] = useState({});
    const [subCategoryList, setSubCategoryList] = useState([]);

    useEffect(() => {
        let data = CATEGORY_SAMPLE.find((row) => row.categorySeq == params.slug);
        let list = CATEGORY_SAMPLE.filter((row) => row.upCategorySeq == params.slug);

        if (data.upCategorySeq) {
            data = CATEGORY_SAMPLE.find((row) => row.categorySeq == data.upCategorySeq);
            list = CATEGORY_SAMPLE.filter((row) => row.upCategorySeq == data.categorySeq);
        }

        setMainCategory(data);
        setSubCategoryList(list);
    }, []);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.bannerSection}>
                    <picture>
                        <source srcSet="/categoryBannerSampleSmall.jpg" media="(max-width: 900px)" />

                        <Image src="/categoryBannerSample.jpg" width={1280} height={600} priority alt="banner sample" />
                    </picture>
                </div>

                <div className={styles.categorySection}>
                    <h2>{mainCategory.categoryName}</h2>

                    <div className={styles.categoryListView}>
                        <div key={mainCategory.categorySeq} className={styles.categoryItem}>
                            <Link href={`/categories/${mainCategory.categorySeq}`} className={`${params.slug == mainCategory.categorySeq ? styles.active : ''}`}>
                                전체보기
                            </Link>
                        </div>
                        {subCategoryList.map((row) => (
                            <div key={row.categorySeq} className={styles.categoryItem}>
                                <Link href={`/categories/${row.categorySeq}`} className={`${params.slug == row.categorySeq ? styles.active : ''}`}>
                                    {row.categoryName}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.mainSection}>
                    <ItemListView
                        items={Array(40)
                            .fill(0)
                            .map((item, index) => index + 1)}
                    />
                </div>
            </main>
        </div>
    );
}
