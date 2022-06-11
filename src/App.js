import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
