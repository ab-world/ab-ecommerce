import Image from 'next/image';
import styles from './Header.module.scss';
import { IconSearch, IconXboxXFilled, IconHeart, IconShoppingCart, IconMenu2 } from '@tabler/icons-react';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.buttonSection}>
                    <a>회원가입</a>
                    <a>로그인</a>
                </div>

                <div className={styles.topSection}>
                    <div className={styles.logoView}>
                        <Image src="/ablogo.png" alt="Next.js logo" width={50} height={50} priority />
                    </div>
                    <div className={styles.searchView}>
                        <input type="text" />
                        <button className={styles.clearBtn}>
                            <IconXboxXFilled size={18} />
                        </button>
                        <button className={styles.searchBtn}>
                            <IconSearch size={24} />
                        </button>
                    </div>
                    <div className={styles.btnView}>
                        <button>
                            <IconHeart size={28} />
                        </button>
                        <button>
                            <IconShoppingCart size={28} />
                        </button>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <button className={styles.hamburgerBtn}>
                        <IconMenu2 size={28} style={{ marginRight: '4px' }} />
                        카테고리
                    </button>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a>nav1</a>
                        </li>
                        <li className={styles.navItem}>
                            <a>nav2</a>
                        </li>
                        <li className={styles.navItem}>
                            <a>nav3</a>
                        </li>
                        <li className={styles.navItem}>
                            <a>nav4</a>
                        </li>
                        <li className={styles.navItem}>
                            <a>nav5</a>
                        </li>
                    </ul>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
