'use client';
import { IconArrowUp } from '@tabler/icons-react';

const UpBtn = () => {
    const onClickUpBtn = () => {
        window.scrollTo(0, 0);
    };

    return (
        <button className={'upBtn'} onClick={onClickUpBtn}>
            <IconArrowUp size={35} />
        </button>
    );
};

export default UpBtn;
