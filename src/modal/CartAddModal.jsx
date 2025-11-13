import styles from './CartAddModal.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/component/layout/Modal';
import { SAMPLE_ITEM } from '@/const/sample';
import { showErrorNoti, showSuccessNoti } from '@/util/noti';
import { IconCaretDownFilled, IconMinus, IconPlus, IconX } from '@tabler/icons-react';

export default function CartAddModal(props) {
    const { open, setOpen, data = SAMPLE_ITEM.info } = props;
    const [selectedOptionList, setSelectedOptionList] = useState([]); // 선택된 옵션 리스트

    // 옵션 select
    const onSelectItemOption = (e) => {
        const item = data?.optionList.find((row) => row.optionSeq == e.target.value);

        const index = selectedOptionList.findIndex((row) => row.optionSeq == e.target.value);

        const list = [...selectedOptionList];

        if (index > -1) {
            list[index].qty += 1;
        } else {
            list.push({ ...item, qty: 1 });
        }

        setSelectedOptionList(list);
    };

    // 선택된 옵션 삭제
    const onClickOptionRemove = (e, optionSeq) => {
        const list = [...selectedOptionList];

        const index = list.findIndex((row) => row.optionSeq == optionSeq);

        list.splice(index, 1);

        setSelectedOptionList(list);
    };

    // 선택된 옵션 수량 빼기
    const onClickOptionMinus = (e, optionSeq) => {
        const list = [...selectedOptionList];

        const index = list.findIndex((row) => row.optionSeq == optionSeq);

        if (list[index].qty == 1) return;

        list[index].qty -= 1;

        setSelectedOptionList(list);
    };

    // 선택된 옵션 수량 더하기
    const onClickOptionPlus = (e, optionSeq) => {
        const list = [...selectedOptionList];

        const index = list.findIndex((row) => row.optionSeq == optionSeq);

        list[index].qty += 1;

        setSelectedOptionList(list);
    };

    const onClickButton = (v) => {
        if (v == '장바구니 담기') {
            if (selectedOptionList.length == 0) return showErrorNoti('선택된 옵션이 없습니다.');

            showSuccessNoti('장바구니 담기 완료!');
        }

        setOpen(false);
    };

    return (
        <Modal open={open} setOpen={onClickButton} buttons={['취소', '장바구니 담기']} onClickButton={onClickButton} isBackBlur>
            <div className={styles.container}>
                <div className={styles.itemInfoView}>
                    <div className={styles.itemImg}>
                        <Image src={data?.mainImageUrl} fill priority alt="item img" />
                    </div>
                    <p>{data?.itemName}</p>
                </div>

                <div className={styles.optionView}>
                    <select value={''} onChange={onSelectItemOption}>
                        <option value="" disabled hidden>
                            옵션을 선택해주세요.
                        </option>

                        {data?.optionList.map((row, index) => (
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

                <div className={styles.totalAmtView}>
                    <p className={styles.label}>합계금액</p>
                    <p className={styles.price}>
                        {Number(selectedOptionList.reduce((acc, cur) => acc + cur.qty * cur.price, 0)).toLocaleString()}
                        <span>원</span>
                    </p>
                </div>
            </div>
        </Modal>
    );
}
