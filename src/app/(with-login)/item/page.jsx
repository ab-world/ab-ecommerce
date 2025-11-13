// 상품상세 페이지
'use client';
import styles from './page.module.scss';
import { useState, useEffect, useRef, Fragment } from 'react';
import Image from 'next/image';
import { IconHeart, IconCaretDownFilled, IconX, IconPlus, IconMinus, IconLetterQ, IconLetterA } from '@tabler/icons-react';
import { HEADER_1280, HEADER_900, HEADER_600 } from '@/const/variable';
import { showErrorNoti, showSuccessNoti } from '@/util/noti';

const SAMPLE_DATA = {
    info: {
        mainImageUrl: '/itemSample.jpg',
        subImageUrls: ['/itemSample.jpg', '/itemSample.jpg', '/itemSample.jpg'],
        labels: ['AB Only'],
        itemName: '[Kiri] 스틱 치즈 케이크 3종 (50gX8개입) (택1)',
        itemDetail: '깔끔하게 즐기는 녹진한 풍미',
        price: 14407,
        originPrice: 16950,
        details: [
            { title: '배송', content: '일반배송' },
            { title: '판매자', content: '에이비' },
            { title: '포장타입', content: '냉동 (종이포장)' },
            { title: '판매단위', content: 'BOX' },
            { title: '중량/용량', content: '50g/8개입' }
        ],
        optionList: [
            { optionSeq: 1, optionName: '쿠키앤크림', price: 14407 },
            { optionSeq: 2, optionName: '말차', price: 14407 },
            { optionSeq: 3, optionName: '초코', price: 14407 }
        ],
        isWish: 0
    },
    description: {
        detail: {
            imageUrl: '/itemDescriptionSample.jpg',
            imageUrl2: '/itemDetailSample.jpg'
        },
        sellerInfos: [
            { title: '상호/대표자', content: '(주)에이비/류정' },
            { title: '사업장 소재지', content: '서울 강서구 화곡로68길 15, 가양아벨테크노지식산업센터 406' },
            { title: '연락처', content: '070-4077-0265' },
            { title: '이메일', content: 'support@abworld.co.kr' },
            { title: '사업자번호', content: '667-88-02513' },
            { title: '통신판매업 신고번호', content: '제2024-서울강서-2501호' }
        ],
        itemInfos: [
            { title: '제품명', content: '상품설명 및 상품이미지 참조' },
            { title: '식품의 유형', content: '상품설명 및 상품이미지 참조' },
            { title: '생산자 및 소재지 (수입품의 경우 생상자, 수입자 및 제조국)', content: '상품설명 및 상품이미지 참조' },
            { title: '제조연월일, 소비기한 또는 품질유지기한', content: '상품설명 및 상품이미지 참조' },
            { title: '포장단위별 내용물의 용량', content: '상품설명 및 상품이미지 참조' },
            { title: '원재료명 (｢농수산물의 원산지 표시 등에 관한 법률｣에 따른 원산지 표시 포함) 및 함량(원재료 함량 표시대상 식품에 한함)', content: '상품설명 및 상품이미지 참조' },
            { title: '영양성분 (영양성분 표시대상 식품에 한함)', content: '상품설명 및 상품이미지 참조' }
        ]
    },
    reviews: [
        {
            userName: '신*수',
            itemName: '[Kiri] 스틱 치즈 케이크 3종 (50gX8개입) (택1)',
            optionName: '쿠키앤크림',
            content: '녹차맛 사고싶은데 없어서 쿠키앤크림 샀어요',
            imageUrl: '/itemSample.jpg',
            regDate: '2025-11-10'
        }
    ],
    inquirys: [
        {
            title: '오배송',
            inquiryContent: '녹차맛 샀는데 왜 쿠키맛이 왔죠?;;',
            userName: '신*수',
            inquiryRegDate: '2025-10-29',
            inquiryStatus: 1,
            inquiryStatusName: '답변대기',
            answerContent: '잘못보냈습니다~ 죄송합니다~',
            answerRegDate: '2025-11-01'
        }
    ]
};

export default function ItemDetail(props) {
    const containerRef = useRef(null);
    const [currentID, setCurrentID] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);

    const [itemInfo, setItemInfo] = useState(SAMPLE_DATA); // 상품 정보
    const [selectedOptionList, setSelectedOptionList] = useState([]); // 선택된 옵션 리스트

    const [selectedInquiry, setSelectedInquiry] = useState(-1); // 선택된 문의

    useEffect(() => {
        setCurrentWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [currentWidth]);

    const handleResize = () => {
        setCurrentWidth(window.innerWidth);
    };

    const handleScroll = () => {
        const id1 = containerRef.current.querySelector('#description').getBoundingClientRect();
        const id2 = containerRef.current.querySelector('#notice').getBoundingClientRect();
        const id3 = containerRef.current.querySelector('#review').getBoundingClientRect();
        const id4 = containerRef.current.querySelector('#inquiry').getBoundingClientRect();

        const headerHeight = currentWidth >= 1280 ? HEADER_1280 : currentWidth >= 900 ? HEADER_900 : HEADER_600;

        const id1ScrollY = id1.y - headerHeight;
        const id2ScrollY = id2.y - headerHeight;
        const id3ScrollY = id3.y - headerHeight;
        const id4ScrollY = id4.y - headerHeight;

        if (id4ScrollY < 0) setCurrentID(4);
        else if (id3ScrollY < 0) setCurrentID(3);
        else if (id2ScrollY < 0) setCurrentID(2);
        else if (id1ScrollY < 0) setCurrentID(1);
        else setCurrentID(0);
    };

    const onClickTab = (id) => {
        const target = containerRef.current.querySelector(id).getBoundingClientRect();

        const headerHeight = currentWidth >= 1280 ? HEADER_1280 : currentWidth >= 900 ? HEADER_900 : HEADER_600;

        window.scrollTo({ top: target.top + window.scrollY - headerHeight + 1 });
    };

    const onSelectItemOption = (e) => {
        const item = itemInfo?.info.optionList.find((row) => row.optionSeq == e.target.value);

        const index = selectedOptionList.findIndex((row) => row.optionSeq == e.target.value);

        const list = [...selectedOptionList];

        if (index > -1) {
            list[index].qty += 1;
        } else {
            list.push({ ...item, qty: 1 });
        }

        setSelectedOptionList(list);
    };

    const onClickOptionRemove = (e, optionSeq) => {
        const list = [...selectedOptionList];

        const index = list.findIndex((row) => row.optionSeq == optionSeq);

        list.splice(index, 1);

        setSelectedOptionList(list);
    };

    const onClickOptionMinus = (e, optionSeq) => {
        const list = [...selectedOptionList];

        const index = list.findIndex((row) => row.optionSeq == optionSeq);

        if (list[index].qty == 1) return;

        list[index].qty -= 1;

        setSelectedOptionList(list);
    };

    const onClickOptionPlus = (e, optionSeq) => {
        const list = [...selectedOptionList];

        const index = list.findIndex((row) => row.optionSeq == optionSeq);

        list[index].qty += 1;

        setSelectedOptionList(list);
    };

    const onClickWishBtn = () => {
        let info = { ...itemInfo?.info };

        if (itemInfo?.info.isWish) {
            info.isWish = 0;
            showSuccessNoti('찜하기 취소!');
        } else {
            info.isWish = 1;
            showSuccessNoti('찜하기 완료!');
        }

        setItemInfo({ ...itemInfo, info: info });
    };

    const onClickCartBtn = () => {
        if (selectedOptionList.length == 0) return showErrorNoti('선택된 옵션이 없습니다.');

        showSuccessNoti('장바구니 담기 완료!');
    };

    const onClickOrderBtn = () => {
        if (selectedOptionList.length == 0) return showErrorNoti('선택된 옵션이 없습니다.');
    };

    return (
        <div ref={containerRef} className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    {/* 메인 */}
                    <div className={styles.mainView}>
                        <div className={styles.imgView}>
                            <div className={styles.imgWrapper}>
                                <Image src={itemInfo?.info.mainImageUrl} fill priority alt="main item img" />
                            </div>

                            <div className={styles.imgListView}>
                                {itemInfo?.info.subImageUrls.map((row, idx) => (
                                    <div key={idx + 1} className={styles.imgWrapper}>
                                        <Image src={row} fill priority alt="sub item img" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.infoView}>
                            {itemInfo?.info.labels.map((row, index) => (
                                <p key={index} className={styles.label}>
                                    {row}
                                </p>
                            ))}
                            <p className={styles.itemName}>{itemInfo?.info.itemName}</p>
                            <p className={styles.itemDescription}>{itemInfo?.info.itemDetail}</p>
                            <div className={styles.priceView}>
                                <p className={styles.discountRate}>{itemInfo?.info.discountRate}%</p>
                                <p className={styles.price}>
                                    {Number(itemInfo?.info.price).toLocaleString()}
                                    <span>원</span>
                                </p>
                                <p className={styles.originPrice}>{Number(itemInfo?.info.originPrice).toLocaleString()}원</p>
                            </div>
                            <div className={styles.infoListView}>
                                <ul>
                                    {itemInfo?.info.details.map((row, idx) => (
                                        <li key={idx + 1}>
                                            <dt>{row.title}</dt>
                                            <dd>{row.content}</dd>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.selectView}>
                                <p className={styles.title}>상품선택</p>

                                <div className={styles.optionView}>
                                    <select value={''} onChange={onSelectItemOption}>
                                        <option value="" disabled hidden>
                                            옵션을 선택해주세요.
                                        </option>

                                        {itemInfo?.info.optionList.map((row, index) => (
                                            <option key={row.optionSeq} value={row.optionSeq}>
                                                {row.optionName}
                                            </option>
                                        ))}
                                    </select>

                                    <IconCaretDownFilled />
                                </div>

                                <div className={styles.selectedOptionView}>
                                    {selectedOptionList.map((row, index) => (
                                        <div key={index} className={styles.selectedOptionItem}>
                                            <div className={styles.topView}>
                                                <p>{row.optionName}</p>
                                                <button onClick={(e) => onClickOptionRemove(e, row.optionSeq)}>
                                                    <IconX />
                                                </button>
                                            </div>

                                            <div className={styles.btmView}>
                                                <div className={styles.countView}>
                                                    <button onClick={(e) => onClickOptionMinus(e, row.optionSeq)}>
                                                        <IconMinus />
                                                    </button>
                                                    <div>{Number(row.qty).toLocaleString()}</div>
                                                    <button onClick={(e) => onClickOptionPlus(e, row.optionSeq)}>
                                                        <IconPlus />
                                                    </button>
                                                </div>

                                                <div className={styles.optionPriceView}>
                                                    <p>{Number(row.qty * row.price).toLocaleString()}원</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.buttonView}>
                                    <button className={`${styles.wishBtn} ${itemInfo?.info.isWish ? styles.active : ''}`} onClick={onClickWishBtn}>
                                        <IconHeart />
                                    </button>

                                    <div>
                                        <button className={styles.cartBtn} onClick={onClickCartBtn}>
                                            장바구니
                                        </button>
                                        <button className={styles.orderBtn} onClick={onClickOrderBtn}>
                                            바로 주문하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 탭 */}
                    <div className={styles.tabView}>
                        <button className={currentID == 1 ? styles.active : ''} onClick={() => onClickTab('#description')}>
                            상품설명
                        </button>
                        <button className={currentID == 2 ? styles.active : ''} onClick={() => onClickTab('#notice')}>
                            배송/교환/반품 안내
                        </button>
                        <button className={currentID == 3 ? styles.active : ''} onClick={() => onClickTab('#review')}>
                            후기
                        </button>
                        <button className={currentID == 4 ? styles.active : ''} onClick={() => onClickTab('#inquiry')}>
                            문의
                        </button>
                    </div>

                    {/* 상품설명 */}
                    <div id={'description'} className={styles.tabContent}>
                        <h2 className={styles.tabTitle}>상품설명</h2>

                        <div className={styles.descriptionView}>
                            <div className={styles.imgWrapper}>
                                <Image src={itemInfo?.description.detail.imageUrl} fill priority alt="itemDescription sample" />
                            </div>

                            <div className={styles.longImgWrapper}>
                                <Image src="/itemDetailSample.jpg" width={1280} height={0} priority alt="itemDetail sample" />
                            </div>

                            <h2 className={styles.gridTitle}>판매자 정보</h2>
                            <div className={styles.gridView}>
                                {itemInfo?.description.sellerInfos.map((row, idx) => (
                                    <div key={idx + 1} className={styles.gridItem}>
                                        <div className={styles.gridItemTitle}>{row.title}</div>
                                        <div className={styles.gridItemContent}>{row.content}</div>
                                    </div>
                                ))}
                            </div>

                            <h2 className={styles.gridTitle}>상품 정보 제공 고시</h2>
                            <div className={styles.gridView}>
                                {itemInfo?.description.itemInfos.map((row, idx) => (
                                    <div key={idx + 1} className={styles.gridItem}>
                                        <div className={styles.gridItemTitle}>{row.title}</div>
                                        <div className={styles.gridItemContent}>{row.content}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 배송/교환/반품 안내 */}
                    <div id={'notice'} className={styles.tabContent}>
                        <h2 className={styles.tabTitle}>배송/교환/반품 안내</h2>

                        <div className={styles.noticeView}>
                            <div className={styles.boxView}>
                                <h2>배송관련 안내</h2>
                                <p>{`배송 과정 중 기상 악화 및 도로교통 상황에 따라 부득이하게 지연 배송이 발생될 수 있습니다.`}</p>
                            </div>

                            <div className={styles.boxView}>
                                <h2>교환 및 환불 안내</h2>
                                <p>{`교환 및 환불이 필요하신 경우 [마이페이지 > 주문내역]에서 직접 반품 접수하거나 고객행복센터로 문의해 주시기 바랍니다.`}</p>
                            </div>
                            {[
                                {
                                    title: '01. 상품에 문제가 있는 경우',
                                    content: `받으신 상품이 표시·광고 내용 또는 계약 내용과 다른 경우에는 상품을 받은 날부터 3개월 이내,그 사실을 알게 된 날부터 30일 이내에 반품을 요청하실 수 있습니다.\n고객행복센터로 문의해 주시기 바랍니다.\n상품의 정확한 상태를 확인할 수 있도록 사진을 함께 보내주시면 더 빠른 상담이 가능합니다.\n※ 배송 상품에 문제가 있는 것으로 확인되면 배송비는 판매자가 부담합니다.`
                                },
                                {
                                    title: '02. 단순 변심, 주문 착오의 경우',
                                    content: `신선 / 냉장 / 냉동 식품\n상품의 특성상 재판매가 불가하여 단순 변심, 주문 착오, 주소 오입력 등 고객의 책임 있는 사유로 인한 교환 및 반품이 어려운 점 양해 부탁드립니다.\n상품에 따라 조금씩 맛이 다를 수 있으며, 개인의 기호에 따라 같은 상품도 다르게 느끼실 수 있습니다.\n\n유통기한 30일 이상 식품 (신선 / 냉장 / 냉동 제외) 기타 상품 (뷰티 제품, 생활용품)\n상품을 받은 날부터 7일 이내 반품 접수가 가능합니다. 직접 접수하시거나 고객행복센터로 문의해 주시기 바랍니다.\n\n※ 단순 변심, 주문 착오, 주소 오입력 등 고객의 책임 있는 사유로 인한 교환 및 반품의 경우 고객님께서 왕복배송비 6,000원(배송비를 낸 경우 3,000원)을 부담하셔야 합니다.`
                                },
                                {
                                    title: '03. 교환·환불이 불가한 경우',
                                    content: `다음에 해당하는 교환·환불 신청은 처리가 어려울 수 있으니 양해 부탁드립니다.\n\n- 고객님의 책임 있는 사유로 상품이 멸실되거나 훼손된 경우(단, 상품의 내용을 확인하기 위해 포장 등을 훼손한 경우는 제외)\n- 고객님의 사용 또는 일부 소비로 상품의 가치가 감소한 경우\n- 시간이 지나 다시 판매하기 곤란할 정도로 상품의 가치가 감소한 경우\n- 복제가 가능한 상품의 포장이 훼손된 경우\n- 고객님의 주문에 따라 개별적으로 생산되는 상품의 제작이 이미 진행된 경우\n- 반품 신청 후 14일 내에 물품이 반환되지 않고 고객님과 연락이 되지 않는 경우`
                                }
                            ].map((row, idx) => (
                                <div key={idx + 1} className={styles.gridItem}>
                                    <div className={styles.gridItemTitle}>{row.title}</div>
                                    <div className={styles.gridItemContent}>{row.content}</div>
                                </div>
                            ))}

                            <div className={styles.boxView}>
                                <h2>주문 취소 안내</h2>
                                <p>{`[마이페이지>주문내역]에서 직접 취소하실 수 있습니다.`}</p>
                            </div>
                            {[
                                {
                                    title: '주문 취소 관련',
                                    content: `- 주문취소는 [마이페이지>주문내역]에서 직접 하실 수 있습니다.\n- [배송중]부터는 배송이 시작되어 주문 취소가 불가하니, 반품 접수 부탁드립니다(상품에 따라 반품이 불가할 수 있습니다).\n- 주문취소 및 반품 접수와 관련하여 도움이 필요하신 경우 고객행복센터로 문의해 주시기 바랍니다.\n- 주문마감 시간에 임박할수록 취소 가능 시간이 짧아질 수 있습니다.\n- 일부 예약상품은 판매 시 안내된 취소 마감 기한 내에만 취소할 수 있습니다.\n- 파트너사 판매상품의 경우, 파트너사의 정책에 따라 주문취소가 가능합니다.\n- 미성년자 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.`
                                },
                                {
                                    title: '결제 승인 취소 / 환불 관련',
                                    content: `- 카드 환불은 카드사 정책에 따르며, 자세한 사항은 카드사에 문의해주세요.\n- 결제 취소 시, 사용하신 적립금과 쿠폰도 모두 복원됩니다.`
                                }
                            ].map((row, idx) => (
                                <div key={idx + 1} className={styles.gridItem}>
                                    <div className={styles.gridItemTitle}>{row.title}</div>
                                    <div className={styles.gridItemContent}>{row.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 후기 */}
                    <div id={'review'} className={styles.tabContent}>
                        <h2 className={styles.tabTitle}>상품 후기</h2>

                        <div className={styles.reviewView}>
                            <div className={styles.imgListView}>
                                {Array(8)
                                    .fill(0)
                                    .map((row, index) => (
                                        <div key={index} className={styles.imgWrapper}>
                                            <Image src="/itemSample.jpg" fill priority alt="item sample" />
                                        </div>
                                    ))}
                            </div>

                            <div className={styles.tableView}>
                                <div className={styles.titleView}>
                                    <p>총 {Number(itemInfo?.reviews.length).toLocaleString()}개</p>
                                </div>

                                <table>
                                    <tbody>
                                        {itemInfo?.reviews.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.userName}</td>
                                                <td>
                                                    <div>
                                                        <p className={styles.reviewOptionName}>
                                                            {row.itemName} / {row.optionName}
                                                        </p>
                                                        <p className={styles.reviewContent}>{row.content}</p>
                                                        <div className={styles.reviewImg}>
                                                            <Image src={row.imageUrl} fill priority alt="item sample" />
                                                        </div>
                                                        <p className={styles.reviewRegDate}>{row.regDate}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* 문의 */}
                    <div id={'inquiry'} className={styles.tabContent}>
                        <div className={styles.inquiryView}>
                            <div className={styles.titleView}>
                                <h2 className={styles.tabTitle}>상품 문의</h2>
                                <button>문의하기</button>
                            </div>

                            <div className={styles.tableView}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>제목</th>
                                            <th>작성자</th>
                                            <th>작성일</th>
                                            <th>답변상태</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itemInfo?.inquirys.map((row, index) => (
                                            <Fragment key={index}>
                                                <tr className={styles.inquiry} onClick={() => setSelectedInquiry(selectedInquiry == index ? -1 : index)}>
                                                    <td>{row.title}</td>
                                                    <td>{row.userName}</td>
                                                    <td>{row.inquiryRegDate}</td>
                                                    <td>{row.inquiryStatusName}</td>
                                                </tr>

                                                <tr className={`${styles.answer} ${selectedInquiry == index ? styles.active : ''}`}>
                                                    <td colSpan={4}>
                                                        <div className={styles.inquiryContent}>
                                                            <IconLetterQ />

                                                            <p>{row.inquiryContent}</p>
                                                        </div>

                                                        <div className={styles.answerContent}>
                                                            <IconLetterA />

                                                            <div>
                                                                <p>{row.answerContent}</p>

                                                                <p className={styles.answerRegDate}>{row.answerRegDate}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
