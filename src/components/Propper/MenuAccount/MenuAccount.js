import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Propper';
import MenuAccountItem from './MenuAccountItem';
import styles from './MenuAccount.module.scss';

const cx = classNames.bind(styles);

function MenuAccount({ children, items = [] }, hideOnclick = false) {
    const renderItems = () => {
        return items.map((item, index) => <MenuAccountItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            trigger="click"
            hideOnClick={hideOnclick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={'bg-[#282828] rounded p-1 h-[208px] m-0   min-w-[196px]'} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx(' grid')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
MenuAccount.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
};
export default MenuAccount;
