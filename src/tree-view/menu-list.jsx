import MenuItem from "./menu-item";
import "./style.css";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((listitem) => {
            return <MenuItem item={listitem}></MenuItem>;
          })
        : null}
    </ul>
  );
}

export default MenuList;
