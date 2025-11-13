export const CATEGORY_SAMPLE = [
    { categorySeq: 1, categoryName: '채소', imageUrl: '/categorySample.png' },
    { categorySeq: 101, categoryName: '친환경', upCategorySeq: 1, imageUrl: '/categorySample.png' },
    { categorySeq: 102, categoryName: '고구마/감자/당근', upCategorySeq: 1, imageUrl: '/categorySample.png' },
    { categorySeq: 103, categoryName: '시금치/쌈채소/나물', upCategorySeq: 1, imageUrl: '/categorySample.png' },
    { categorySeq: 104, categoryName: '브로콜리/파프리카/양배추', upCategorySeq: 1, imageUrl: '/categorySample.png' },
    { categorySeq: 105, categoryName: '양파/대파/마늘/배추', upCategorySeq: 1, imageUrl: '/categorySample.png' },
    { categorySeq: 2, categoryName: '과일/견과/쌀', imageUrl: '/categorySample.png' },
    { categorySeq: 201, categoryName: '친환경', upCategorySeq: 2, imageUrl: '/categorySample.png' },
    { categorySeq: 202, categoryName: '제철과일', upCategorySeq: 2, imageUrl: '/categorySample.png' },
    { categorySeq: 203, categoryName: '국산과일', upCategorySeq: 2, imageUrl: '/categorySample.png' },
    { categorySeq: 204, categoryName: '수입과일', upCategorySeq: 2, imageUrl: '/categorySample.png' },
    { categorySeq: 3, categoryName: '수산/해산/건어물', imageUrl: '/categorySample.png' },
    { categorySeq: 301, categoryName: '제철수산', upCategorySeq: 3, imageUrl: '/categorySample.png' },
    { categorySeq: 302, categoryName: '생선류', upCategorySeq: 3, imageUrl: '/categorySample.png' },
    { categorySeq: 303, categoryName: '굴비/반건류', upCategorySeq: 3, imageUrl: '/categorySample.png' },
    { categorySeq: 304, categoryName: '연어/참치', upCategorySeq: 3, imageUrl: '/categorySample.png' },
    { categorySeq: 4, categoryName: '정육/가공육/달걀', imageUrl: '/categorySample.png' },
    { categorySeq: 401, categoryName: '국내산 소고기', upCategorySeq: 4, imageUrl: '/categorySample.png' },
    { categorySeq: 402, categoryName: '수입산 소고기', upCategorySeq: 4, imageUrl: '/categorySample.png' },
    { categorySeq: 403, categoryName: '국내산 돼지고기', upCategorySeq: 4, imageUrl: '/categorySample.png' },
    { categorySeq: 404, categoryName: '수입산 돼지고기/양고기', upCategorySeq: 4, imageUrl: '/categorySample.png' },
    { categorySeq: 405, categoryName: '닭/오리고기', upCategorySeq: 4, imageUrl: '/categorySample.png' },
    { categorySeq: 406, categoryName: '식단관리용 가공육', upCategorySeq: 4, imageUrl: '/categorySample.png' },
    { categorySeq: 407, categoryName: '양념육', upCategorySeq: 4, imageUrl: '/categorySample.png' },
    { categorySeq: 5, categoryName: '국/반찬/메인요리', imageUrl: '/categorySample.png' },
    { categorySeq: 501, categoryName: '국/탕/찌개', upCategorySeq: 5 },
    { categorySeq: 502, categoryName: '밑반찬', upCategorySeq: 5 },
    { categorySeq: 503, categoryName: '김치/젖갈/장류', upCategorySeq: 5 },
    { categorySeq: 504, categoryName: '두부/어묵/부침개', upCategorySeq: 5 },
    { categorySeq: 505, categoryName: '메인요리', upCategorySeq: 5 }
];

export const SAMPLE_ITEM = {
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
        evaluation: '5.0',
        reviewCount: 1900,
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
            answerContent: '잘못보냈습니다~\n죄송합니다~',
            answerRegDate: '2025-11-01'
        }
    ]
};
