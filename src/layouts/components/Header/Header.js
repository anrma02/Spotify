import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import '~/styles.css';
const cx = classNames.bind(styles);
function Header() {
    return <div className={cx('wrapper')}> sss</div>;
}
Header.protoType = {
    children: PropTypes.node.isRequired,
};

export default Header;
