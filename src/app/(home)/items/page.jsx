// 상품리스트 페이지
import styles from './page.module.scss';
import ItemListView from '@/component/common/ItemListView';

export default function Items(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    <ItemListView
                        items={Array(40)
                            .fill(0)
                            .map((item, itemIdx) => itemIdx + 1)}
                    />
                </div>
            </main>
        </div>
    );
}
