'use client';
import styles from './itemView.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { showSuccessNoti } from '@/util/noti';

const SAMPLE_DATA = {
    mainImageUrl: '/itemSample.jpg',
    labels: ['AB Only'],
    itemName: '[Kiri] 스틱 치즈 케이크 3종 (50gX8개입) (택1)',
    itemDetail: '깔끔하게 즐기는 녹진한 풍미',
    price: 14407,
    originPrice: 16950,
    evaluation: '5.0',
    reviewCount: 1900
};

const ItemView = ({ data = SAMPLE_DATA }) => {
    const onClickWishBtn = (e) => {
        e.preventDefault();

        showSuccessNoti('찜하기 완료!');
    };

    const onClickCartBtn = (e) => {
        e.preventDefault();
    };

    return (
        <Link className={styles.itemView} href={'/item'}>
            <div className={styles.itemImgView}>
                <div className={styles.hoverView}>
                    <button onClick={onClickWishBtn}>찜하기</button>
                    <button onClick={onClickCartBtn}>장바구니</button>
                </div>

                <Image src={data.mainImageUrl} fill priority alt="item img" />
            </div>
            <div className={styles.itemInfoView}>
                {data.labels.map((row, index) => (
                    <p key={index} className={styles.label}>
                        {row}
                    </p>
                ))}
                <p className={styles.itemName}>{data.itemName}</p>
                <p className={styles.itemDescription}>{data.itemDetail}</p>
                <div className={styles.priceView}>
                    <p className={styles.originPrice}>{Number(data.originPrice).toLocaleString()}원</p>
                    <div>
                        <p className={styles.discountRate}>{data.discountRate}%</p>
                        <p className={styles.price}>{Number(data.price).toLocaleString()}원</p>
                    </div>
                </div>

                <p className={styles.evaluation}>
                    {data.evaluation} | {Number(data.reviewCount).toLocaleString()}건
                </p>
            </div>
        </Link>
    );
};

export default ItemView;
