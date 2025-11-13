'use client';
import styles from './itemListView.module.scss';
import React, { Fragment } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ItemView from './ItemView';

const SORT_OPTION_LIST = [
    { seq: 1, label: '추천순', sort: 'recommendation' },
    { seq: 2, label: '신상품순', sort: 'created_at' },
    { seq: 3, label: '판매량순', sort: 'sales' },
    { seq: 4, label: '낮은 가격순', sort: 'price_desc' },
    { seq: 5, label: '높은 가격순', sort: 'price_asc' }
];

const ItemListView = ({ title, subTitle, items }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || SORT_OPTION_LIST[0].sort;

    return (
        <div className={styles.itemListView}>
            {title && (
                <div className={styles.titleView}>
                    {title}
                    {subTitle && <p>{subTitle}</p>}
                </div>
            )}

            <div className={styles.sortView}>
                <p>
                    총 <span>{Number(items.length).toLocaleString()}</span>건
                </p>

                <div className={styles.sortBtnView}>
                    {SORT_OPTION_LIST.map((row, index) => (
                        <Fragment key={row.seq}>
                            <Link href={`${pathname}?sort=${row.sort}`} className={`${sort == row.sort ? styles.active : ''}`}>
                                {row.label}
                            </Link>
                            {index != SORT_OPTION_LIST.length - 1 && <span>{`  |  `}</span>}
                        </Fragment>
                    ))}
                </div>
            </div>

            <div className={styles.listView}>
                {items.map((item) => (
                    <ItemView key={item} data={undefined} />
                ))}
            </div>
        </div>
    );
};

export default ItemListView;
