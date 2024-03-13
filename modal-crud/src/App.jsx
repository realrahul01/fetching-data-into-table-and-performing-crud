import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailProvider from "./DetailContext";

function App() {
  return (
    <>
    <DetailProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DetailProvider>
    </>
  );
}

export default App;
