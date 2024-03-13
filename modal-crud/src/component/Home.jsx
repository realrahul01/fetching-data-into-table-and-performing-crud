import { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { DetailContext } from "../DetailContext";
import Button from "react-bootstrap/Button";
import EditModals from "./EditModals";
import { CiWifiOff } from "react-icons/ci";
import { FaWifi } from "react-icons/fa6";

const Home = () => {
  const { list, removeHandler, objectHandler } = useContext(DetailContext);
  const [close, setClose] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  const deleteHandler = (index) => {
    removeHandler(index);
  };

  const handleClose = () => {
    setClose(false);
  };

  const handleOpen = () => {
    setClose(true);
  };

  const EditHandler = (x) => {
    objectHandler(x);
    handleOpen();
  };

  return (
    <>
      {isOnline && (
        <div className="main">
          <span>
            connected <FaWifi />
          </span>
          <h1>Fetch data into the table</h1>
          {close && <EditModals handleClose={handleClose} />}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Username</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {list.map((x, index) => (
                <tr key={index}>
                  <td>{x.id}</td>
                  <td>
                    {x.name}
                    <td>{x.email}</td>
                  </td>
                  <td>{x.mobile}</td>
                  <td>{x.username}</td>
                  <td>{x.website}</td>
                  <td>
                    <Button
                      className="btn-sm mx-1"
                      variant="primary"
                      onClick={() => EditHandler(x)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn-sm"
                      variant="danger"
                      onClick={() => deleteHandler(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      {!isOnline && (
        <div className="network">
          <h1>Check your internet.......</h1>
          <CiWifiOff className="wifi" />
        </div>
      )}
    </>
  );
};
export default Home;
