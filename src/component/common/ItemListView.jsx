import React from 'react';
import Image from 'next/image';
import styles from './common.module.scss';
import Link from 'next/link';

const ItemListView = ({ title, subTitle, items }) => {
    return (
        <div className={styles.itemListView}>
            {title && (
                <div className={styles.titleView}>
                    <a>{title}</a>
                    {subTitle && <p>{subTitle}</p>}
                </div>
            )}

            <div className={styles.listView}>
                {items.map((item) => (
                    <ItemView key={item} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemListView;

const ItemView = ({ data }) => {
    return (
        <Link className={styles.itemView} href={'/item'}>
            <div className={styles.itemImgView}>
                <div className={styles.hoverView}>
                    <button>찜하기</button>
                    <button>장바구니</button>
                </div>

                <Image src="/itemSample.jpg" fill priority alt="item img" />
            </div>
            <div className={styles.itemInfoView}>
                <p className={styles.label}>AB Only</p>
                <p className={styles.itemName}>[Kiri] 스틱 치즈 케이크 3종 (50gX8개입) (택1)</p>
                <p className={styles.itemDescription}>깔끔하게 즐기는 녹진한 풍미</p>
                <div className={styles.priceView}>
                    <p className={styles.originPrice}>{(16950).toLocaleString()}원</p>
                    <div>
                        <p className={styles.discountRate}>15%</p>
                        <p className={styles.price}>{(14407).toLocaleString()}원</p>
                    </div>
                </div>

                <p className={styles.evaluation}>5.0 | {(1592).toLocaleString()}건</p>
            </div>
        </Link>
    );
};
