'use client';
import styles from './Header.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconSearch, IconXboxXFilled, IconHeart, IconShoppingCart, IconMenu2 } from '@tabler/icons-react';
import CategoryModal from '@/modal/CategoryModal';

const NAV_ITEMS = [
    { label: '신상품', url: '/items' },
    { label: '베스트', url: '/items' },
    { label: '알뜰쇼핑', url: '/items' },
    { label: '이벤트', url: '/items' },
    { label: '브랜드', url: '/items' }
];

const Header = () => {
    const [categoryModal, setCategoryModal] = useState(false);
    const [keyword, setKeywrod] = useState('');

    const onClickClearBtn = () => {
        setKeywrod('');
    };

    const onClickSearchBtn = () => {};

    // 카테고리 버튼 click
    const onClickCategoryBtn = (e) => {
        e.stopPropagation();

        setCategoryModal(true);
    };

    return (
        <div className={styles.container}>
            {categoryModal && <CategoryModal open={categoryModal} setOpen={(open) => setCategoryModal(open)} />}

            <div className={styles.wrapper}>
                <div className={styles.topSection}>
                    <Link className={styles.point} href={'signup'}>
                        회원가입
                    </Link>
                    <span>{`  |  `}</span>
                    <Link href={'login'}>로그인</Link>
                </div>

                <div className={styles.midSection}>
                    <div className={styles.leftView}>
                        <div className={styles.imgWrapper}>
                            <Link href={'/'}>
                                <Image src="/ablogo.png" fill priority alt="ab logo" />
                            </Link>
                        </div>
                    </div>

                    <div className={styles.centerView}>
                        <input type="text" value={keyword} onChange={(e) => setKeywrod(e.target.value)} />
                        {keyword.length > 0 && (
                            <button className={styles.clearBtn} onClick={onClickClearBtn}>
                                <IconXboxXFilled />
                            </button>
                        )}
                        <button className={styles.searchBtn} onClick={onClickSearchBtn}>
                            <IconSearch />
                        </button>
                    </div>

                    <div className={styles.rightView}>
                        <Link href={'/wish'}>
                            <IconHeart />
                        </Link>
                        <Link href={'/cart'}>
                            <IconShoppingCart />
                        </Link>
                    </div>
                </div>

                <div className={styles.btmSection}>
                    <div className={styles.leftView}>
                        <button className={styles.hamburgerBtn} onClick={onClickCategoryBtn}>
                            <IconMenu2 />
                            <span>카테고리</span>
                        </button>
                    </div>

                    <div className={styles.centerView}>
                        <ul className={styles.navList}>
                            {NAV_ITEMS.map((nav) => (
                                <li key={nav.label} className={styles.navItem}>
                                    <Link href={nav.url}>{nav.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.rightView}></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
