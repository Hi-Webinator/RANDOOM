import { useScroll, motion } from "framer-motion";
import Header from "../Components/Header/Header";
import Routers from "../Routers/Routers";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "#FF9142",
          transformOrigin: "center",
          zIndex: "9999",
        }}
      ></motion.div>

      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
