import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    disabled = false,
    btnText = false,
    small = false,
    large = false,
    primary = false,
    outline = false,
    rounded = false,
    onclick,
    children,
    leftIcon,
    className,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onclick, ...passProps };

    // remove event listener disabled

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        rounded,
        disabled,
        btnText,
        large,
        primary,
        outline,
        small,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}> {children}</span>
        </Comp>
    );
}
export default Button;
