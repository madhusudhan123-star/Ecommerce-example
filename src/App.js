import { Routes, Route } from "react-router-dom";
import { Navbar, About, Home, Product } from "./components/index";
import { Carddetails } from "./components/Carddetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white  text-black">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" element={<Carddetails />} />
          <Route path="/product/category" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
