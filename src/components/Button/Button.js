import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(to, href, onClick, children, ...passProp) {
    let Comp = 'button';

    const props = { onClick, ...passProp };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper');

    return (
        <Comp classNames={classes} {...props}>
            <span> {children} </span>
        </Comp>
    );
}
Button.protoType = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};
export default Button;
