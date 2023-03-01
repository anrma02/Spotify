import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import '~/styles.css';
import Sidebar from '~/layouts/components/Silebar';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={'flex'}>
                <Sidebar />
                <div className={cx('conten relative')}>{children}</div>
            </div>
            <div className={cx('footer')}>54</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
