import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Image from '~/components/Image';
import '~/styles.css';
import Button from '~/components/Button';

import MenuAccount from '~/components/Propper/MenuAccount/MenuAccount';

const cx = classNames.bind(styles);

function Header({ hideOnclick = false }) {
    const currentUser = true;

    const MENU_ITEMS = [];
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    const userMenu = [
        { name: 'Ann' },
        {
            title: 'Tài khoản',
            to: '/taikhoan',
        },
        {
            title: 'Hồ sơ của bạn',
            to: '/profile',
        },
        {
            title: 'Cài đặt',
            to: '/settings',
        },

        {
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <button className={cx('btn-icon ')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                </button>
                <button className={cx('btn-icon ')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                </button>
            </div>
            <div className={cx('acction')}>
                {currentUser ? (
                    <>
                        <MenuAccount items={userMenu}>
                            <button className={cx('btn-avt')}>
                                <Image
                                    className={cx('avatar')}
                                    src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-1/328433481_1406658940076478_7981203303045632559_n.jpg?stp=c1.0.240.240a_dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7APXQjPjsHMAX9o45oH&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAgf910eSmTzxKKjz61KwSibGbMiUdR5Y_mkvao2AdW2g&oe=63FDB769"
                                />
                                <div className="text-white text-xl">Ann</div>
                                <FontAwesomeIcon icon={faChevronDown} className={'text-white'} />
                            </button>
                        </MenuAccount>
                    </>
                ) : (
                    <div className={cx('btn')}>
                        <button className={cx('btn-signup')}>Đăng kí</button>
                        <Button className={cx('btn-login')}>Đăng nhập</Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
