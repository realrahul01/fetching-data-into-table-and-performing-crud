import { createContext, useEffect, useState } from "react";

export const DetailContext = createContext();

const DetailProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [obj, setObj] = useState({
    name: "",
    email: "",
    mobile: "",
    username: "",
    website: "",
  });

  const handleDetail = (val) => {
    setList([...list, val]);
  };

  const removeHandler = (index) => {
    let item = [...list];
    item.splice(index, 1);
    setList(item);
  };

  const objectHandler = (val) => {
    setObj(val);
  };

  return (
    <DetailContext.Provider
      value={{ list, handleDetail, removeHandler, objectHandler, obj }}
    >
      {children}
    </DetailContext.Provider>
  );
};
export default DetailProvider;
