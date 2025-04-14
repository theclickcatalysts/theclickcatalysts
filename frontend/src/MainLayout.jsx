import { useLocation } from "react-router-dom";
import MessageBox from "./Components/Common/MessageBox";
import Footer from "./Components/Common/Footer";
import NavMenu from "./Components/Common/NavMenu";

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <NavMenu />
      {children}
      <Footer />
      {location.pathname === "/" && <MessageBox />}
    </>
  );
}
