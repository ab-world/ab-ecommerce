import styles from './CategoryModal.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/component/layout/Modal';
import { CATEGORY_SAMPLE, SAMPLE_ITEM } from '@/const/sample';

export default function CategoryModal(props) {
    const { open, setOpen, data = SAMPLE_ITEM.info } = props;

    const [mainCategory, setMainCategory] = useState({});
    const [mainCategoryList, setMainCategoryList] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState([]);

    useEffect(() => {
        setMainCategoryList(CATEGORY_SAMPLE.filter((row) => !row.upCategorySeq));
    }, []);

    useEffect(() => {
        setSubCategoryList(CATEGORY_SAMPLE.filter((row) => row.upCategorySeq == mainCategory.categorySeq));
    }, [mainCategory]);

    const onClickMainCategory = (e, category) => {
        setMainCategory(category);
    };

    const onClickButton = (v) => {
        // if (v == '장바구니 담기') {
        //     if (selectedOptionList.length == 0) return showErrorNoti('선택된 옵션이 없습니다.');

        //     showSuccessNoti('장바구니 담기 완료!');
        // }

        setOpen(false);
    };

    return (
        <Modal open={open} setOpen={onClickButton} title={'카테고리'} isBackBlur>
            <div className={styles.container}>
                <div className={styles.categoryListView}>
                    <ul className={styles.mainCategoryListView}>
                        {mainCategoryList.map((row, index) => (
                            <li key={index}>
                                <button className={styles.mainCategoryItemView} onClick={(e) => onClickMainCategory(e, row)}>
                                    {row.imageUrl && (
                                        <div className={styles.mainCategoryImg}>
                                            <Image src={row.imageUrl} fill priority alt="category logo" />
                                        </div>
                                    )}

                                    <p>{row.categoryName}</p>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <ul className={`${styles.subCategoryListView} ${Object.keys(mainCategory).length ? styles.active : ''}`}>
                        <li key={mainCategory.categorySeq}>
                            <Link href={`/categories/${mainCategory.categorySeq}`} className={styles.subCategoryItemView} onClick={onClickButton}>
                                <p>전체보기</p>
                            </Link>
                        </li>

                        {subCategoryList.map((row, index) => (
                            <li key={index}>
                                <Link href={`/categories/${row.categorySeq}`} className={styles.subCategoryItemView} onClick={onClickButton}>
                                    {row.imageUrl && (
                                        <div className={styles.subCategoryImg}>
                                            <Image src={row.imageUrl} fill priority alt="category logo" />
                                        </div>
                                    )}

                                    <p>{row.categoryName}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Modal>
    );
}
