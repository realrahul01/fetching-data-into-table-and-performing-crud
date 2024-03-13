import { GoPlusCircle } from "react-icons/go";
import Modals from "./Modals";
import { useState } from "react";

const Header = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(false);
  };

  const modalHandler = () => {
    setClose(true);
  };

  return (
    <nav>
      {close && <Modals handleClose={handleClose} />}
      <div className="left-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <GoPlusCircle onClick={modalHandler} />
      </div>
    </nav>
  );
};
export default Header;
