import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.footerSection}>
                    <div className={styles.logoView}>
                        <Image src="/ablogo.png" width={55} height={55} priority alt="ab logo" />
                    </div>

                    <div className={styles.infoView}>
                        <p>{`회사명 : (주)에이비  |  대표 : 류정  |  사업자등록번호 : 667-88-02513  |  통신판매업 신고번호 : 제2024-서울강서-2501호`}</p>
                        <p>{`본사 : 서울 강서구 화곡로68길 15, 가양아벨테크노지식산업센터 406 (우)07548`}</p>
                        <p>
                            {`대표전화 : 070-4077-0265  |  팩스 : 0504-219-5292  |  이메일 : `}
                            <a href="mailto:support@abworld.co.kr">support@abworld.co.kr</a>
                        </p>
                        <p className={styles.copyRight}>Copyright © AB Co.,Ltd. All Rights Reserved.</p>
                    </div>

                    <div className={styles.policyView}>
                        <a>이용약관</a>
                        <a className={styles.privacypolicy}>개인정보처리방침</a>
                        <a>이메일무단수집거부</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
