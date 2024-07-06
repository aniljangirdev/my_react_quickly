import MenuItem from "./MenuItem";

function Menu() {
    return (
        <nav className="navbar">
            <h1 className="title">TheMenuCompany</h1>
            <ul className="menu">
                <MenuItem label="Home" href='' />
                <MenuItem label="About" href='/about/' id='about_link' />
                <MenuItem label="Blog" href='/blog/' target='_blank' id='blog_link' />
            </ul>
        </nav>
    );
}
export default Menu;