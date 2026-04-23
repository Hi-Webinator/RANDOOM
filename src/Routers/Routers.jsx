import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Work from "../Pages/Work/Work";
import Contact from "../Pages/Contact/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="about" Component={About} />
      <Route path="works" Component={Work} />
      <Route path="contact" Component={Contact} />
    </Routes>
  );
};

export default Routers;
