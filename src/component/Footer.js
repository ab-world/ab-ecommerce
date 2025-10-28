import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className="">
                    본사 : 서울 강서구 화곡로68길 15, 가양아벨테크노지식산업센터 406 (우)07548
                    <br />
                    대표전화 : 070-4077-0265 | 팩스 : 0504-219-5292 | 이메일 :<a href="mailto:support@abworld.co.kr">support@abworld.co.kr</a>
                    <br />
                    회사명 : (주)에이비 | 대표 : 류정 | 사업자등록번호 : 667-88-02513 | 통신판매업 신고번호 : 제2024-서울강서-2501호
                    <br />
                    <a>Copyright © AB Co.,Ltd. All Rights Reserved.</a>
                </div>

                {/* <div className="w-col w-col-4">
                    <div class="bottom-footer-link-box dark">
                        <a href="../policy/privacy.html" onclick="routerPush(event, '/policy/privacy.html');">
                            개인정보처리방침
                        </a>
                        <a href="../policy/email.html" onclick="routerPush(event, '/policy/email.html');">
                            이메일무단수집거부
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;
