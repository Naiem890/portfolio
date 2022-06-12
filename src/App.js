import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import "react-toastify/dist/ReactToastify.css";
import ToolsHub from "./components/Projects/ToolsHub";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/project/manufacturer-tools-hub" element={<ToolsHub />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
