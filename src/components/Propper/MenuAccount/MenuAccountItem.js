import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './MenuAccount.module.scss';

const cx = classNames.bind(styles);

function MenuAccountItem({ data }) {
    return (
        <Button className={cx('hover:bg-[#9D9D9D] text-white py-3 pl-[12px] pr-[8px] ')} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuAccountItem;
