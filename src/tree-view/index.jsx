import MenuList from "./menu-list";
import "./style.css";

function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus}></MenuList>
    </div>
  );
}

export default TreeView;
