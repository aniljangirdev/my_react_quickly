// here we can use properties by name directly
function MenuItem(props) {

    //destructuring

    // properties with default value
    // with rest and  spread properties
    const { href, label, ...rest } = props;

    return (
        <li className="menu-item">
            a<a className="menu-link" href={href} {...rest}>
                {label}
            </a>
        </li>
    );
}

export default MenuItem;