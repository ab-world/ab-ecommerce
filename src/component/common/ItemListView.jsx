import styles from './itemListView.module.scss';
import React, { Fragment } from 'react';
import ItemView from './ItemView';

const SORT_OPTION_LIST = [
    { seq: 1, label: '추천순' },
    { seq: 2, label: '신상품순' },
    { seq: 3, label: '판매량순' },
    { seq: 4, label: '낮은 가격순' },
    { seq: 5, label: '높은 가격순' }
];

const ItemListView = ({ title, subTitle, items }) => {
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
                            <a>{row.label}</a>
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
