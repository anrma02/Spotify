import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import {
    HomeActiveIcon,
    HomeIcon,
    LibraryActiveIcon,
    LibraryIcon,
    SearchActiveIcon,
    SearchIcon,
} from '~/components/Icons';
import '~/styles.css';
import styles from './Silebar.module.scss';
import images from '~/assets/images';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Silebar() {
    return (
        <nav className="pt-0 py-0">
            <div className={cx('pt-10 bg-black flex  text-white  min-h-screen ')}>
                <div className={cx('banner')}>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img src={images.logos} className={cx('images')} />
                    </Link>
                    <Menu>
                        <MenuItem
                            title="Trang Chủ"
                            to={config.routes.home}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Tìm kiếm"
                            to={config.routes.search}
                            icon={<SearchIcon />}
                            activeIcon={<SearchActiveIcon />}
                        />
                        {/* <MenuItem
                            title="Thư viện"
                            to={config.routes.library}
                            icon={<LibraryIcon />}
                            // activeIcon={<LibraryActiveIcon />}
                        /> */}
                    </Menu>
                </div>
            </div>
        </nav>
    );
}

Silebar.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Silebar;
