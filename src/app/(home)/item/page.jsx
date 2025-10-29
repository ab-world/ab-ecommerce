// 상품상세 페이지
'use client';
import styles from './page.module.scss';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { IconHeart } from '@tabler/icons-react';
import { STICKY } from '@/const/variable';

export default function ItemDetail(props) {
    const containerRef = useRef(null);

    const onClickTab = (id) => {
        const target = containerRef.current.querySelector(id).getBoundingClientRect();
        window.scrollTo({ top: target.top + window.scrollY - STICKY });
    };

    return (
        <div ref={containerRef} className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    {/* 메인 */}
                    <div className={styles.mainView}>
                        <div className={styles.imgView}>
                            <div className={styles.imgWrapper}>
                                <Image src="/itemSample.jpg" fill priority alt="item sample" />
                            </div>

                            <div className={styles.imgListView}>
                                {Array(3)
                                    .fill(0)
                                    .map((row, idx) => (
                                        <div key={idx + 1} className={styles.imgWrapper}>
                                            <Image src="/itemSample.jpg" fill priority alt="item sample" />
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className={styles.infoView}>
                            <p className={styles.label}>AB Only</p>
                            <p className={styles.itemName}>[Kiri] 스틱 치즈 케이크 3종 (50gX8개입) (택1)</p>
                            <p className={styles.itemDescription}>깔끔하게 즐기는 녹진한 풍미</p>
                            <div className={styles.priceView}>
                                <p className={styles.discountRate}>15%</p>
                                <p className={styles.price}>
                                    {(14407).toLocaleString()}
                                    <span>원</span>
                                </p>
                                <p className={styles.originPrice}>{(16950).toLocaleString()}원</p>
                            </div>
                            <div className={styles.infoListView}>
                                <ul>
                                    {[
                                        { title: '배송', content: '일반배송' },
                                        { title: '판매자', content: '컬리' },
                                        { title: '포장타입', content: '냉동 (종이포장)' },
                                        { title: '판매단위', content: 'BOX' },
                                        { title: '중량/용량', content: '50g/8개입' }
                                    ].map((row, idx) => (
                                        <li key={idx + 1}>
                                            <dt>{row.title}</dt>
                                            <dd>{row.content}</dd>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.selectView}>
                                <p className={styles.title}>상품선택</p>

                                <div className={styles.optionView}>옵션선택창</div>

                                <div className={styles.selectedOptionView}>선택된 옵션창</div>

                                <div className={styles.buttonView}>
                                    <button className={styles.wishBtn}>
                                        <IconHeart size={28} />
                                    </button>

                                    <div>
                                        <button className={styles.cartBtn}>장바구니</button>
                                        <button className={styles.orderBtn}>바로 주문하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 탭 */}
                    <div className={styles.tabView}>
                        <button onClick={() => onClickTab('#description')}>상품설명</button>
                        <button onClick={() => onClickTab('#detail')}>상세정보</button>
                        <button onClick={() => onClickTab('#review')}>후기</button>
                        <button onClick={() => onClickTab('#inquiry')}>문의</button>
                    </div>

                    {/* 상품설명 */}
                    <div id={'description'} className={styles.descriptionView}>
                        <h2 className={styles.tabTitle}>상품설명</h2>
                        <div className={styles.imgWrapper}>
                            <Image src="/itemDescriptionSample.jpg" fill priority alt="itemDescription sample" />
                        </div>
                        ...
                    </div>

                    {/* 상세정보 */}
                    <div id={'detail'} className={styles.detailView}>
                        <h2 className={styles.tabTitle}>상세정보</h2>

                        <Image src="/itemDetailSample.jpg" width={1280} height={0} priority alt="itemDetail sample" />

                        <h2>상품고시정보</h2>

                        <div className={styles.gridView}>
                            {[
                                { title: '제품명', content: '상품설명 및 상품이미지 참조' },
                                { title: '식품의 유형', content: '상품설명 및 상품이미지 참조' },
                                { title: '생산자 및 소재지 (수입품의 경우 생상자, 수입자 및 제조국)', content: '상품설명 및 상품이미지 참조' },
                                { title: '제조연월일, 소비기한 또는 품질유지기한', content: '상품설명 및 상품이미지 참조' },
                                { title: '포장단위별 내용물의 용량', content: '상품설명 및 상품이미지 참조' },
                                {
                                    title: '원재료명 (｢농수산물의 원산지 표시 등에 관한 법률｣에 따른 원산지 표시 포함) 및 함량(원재료 함량 표시대상 식품에 한함)',
                                    content: '상품설명 및 상품이미지 참조'
                                },
                                { title: '영양성분 (영양성분 표시대상 식품에 한함)', content: '상품설명 및 상품이미지 참조' }
                            ].map((row, idx) => (
                                <div key={idx + 1} className={styles.gridItem}>
                                    <div>{row.title}</div>
                                    <div>{row.content}</div>
                                </div>
                            ))}
                        </div>

                        <div>주문 취소 안내</div>
                        <div>교환 및 환불 안내</div>
                    </div>

                    {/* 후기 */}
                    <div id={'review'} className={styles.reviewView}>
                        <h2 className={styles.tabTitle}>상품 후기</h2>
                        <div style={{ height: 800 }}></div>
                    </div>

                    {/* 문의 */}
                    <div id={'inquiry'} className={styles.inquiryView}>
                        <div className={styles.titleView}>
                            <h2 className={styles.tabTitle}>상품 문의</h2>
                            <button>문의하기</button>
                        </div>

                        <div className={styles.tableView}>
                            <table>
                                <colgroup>
                                    <col style={{}} />
                                    <col style={{ width: '120px' }} />
                                    <col style={{ width: '120px' }} />
                                    <col style={{ width: '120px' }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>답변상태</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <>
                                        <tr className={styles.inquiry}>
                                            <td>오배송</td>
                                            <td>신*수</td>
                                            <td>2025-10-29</td>
                                            <td>답변대기</td>
                                        </tr>
                                        <tr className={styles.answer}>
                                            <td colSpan={4}>하위</td>
                                        </tr>
                                    </>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
