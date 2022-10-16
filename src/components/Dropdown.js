import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ items }) {
  // boolean state maintained to show and hide the dropdown list
  const [visible, setVisible] = useState(false);

  // shows the dropdown list
  const showDropdownMenu = () => {
    setVisible(true);
  };

  // hides the dropdown list
  const hideDropdownMenu = () => {
    setVisible(false);
  };

  return (
    <div
      className="container"
      onMouseOver={showDropdownMenu}
      onMouseOut={hideDropdownMenu}
    >
      <div className="select-button">
        Select
        <span>
          <FontAwesomeIcon style={{ fontSize: 15 }} icon={faAngleDown} />
        </span>
      </div>
      {visible && (
        <div className="dropdown-list">
          {items.map((item) => (
            <div className="dropdown-item" onClick={hideDropdownMenu}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
