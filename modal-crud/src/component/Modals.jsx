import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DetailContext } from "../DetailContext";

// eslint-disable-next-line react/prop-types
const Modals = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");

  const { list, handleDetail } = useContext(DetailContext);

  const value =
    list.length == 0 ? 1 : Math.max(...list.map((item) => item.id)) + 1;
  const handleSave = () => {
    let user = {
      id: value,
      name,
      email,
      mobile,
      username,
      website,
    };
    handleDetail(user);
    handleClose();
  };

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}> Add Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="inp-cont">
              <label htmlFor="name">Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="inp-cont">
              <label htmlFor="name">Email</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="inp-cont">
              <label htmlFor="name">Mobile</label>
              <div>
                <input
                  type="number"
                  placeholder="Enter your mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="inp-cont">
              <label htmlFor="name">Username</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="inp-cont">
              <label htmlFor="name">Website</label>
              <div>
                <input
                  type="text"
                  placeholder="enter your website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-sm" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn-sm" variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Modals;
