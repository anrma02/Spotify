import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className="wrapper">
            <Header />
        </div>
    );
}

export default Home;
