import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Navbar from "./Components/Navbar/index";
import Preveiw from "./Routes/Preveiw/index";
import Category from "./Routes/Category/index";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Preveiw />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
