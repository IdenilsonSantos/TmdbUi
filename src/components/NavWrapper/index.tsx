import { useContext } from "react";
import Sidebar from "react-sidebar";
import Nav from "../Nav";
import { LayoutContext } from "../../utils/NavContext";

const NavWrapper = ({ children }) => {

  const { navOpen, setNavOpen, navAnimate } = useContext(LayoutContext);

  const sidebarStyles = {
    sidebar: {
      background: "white"
    }
  };

  return (
    <Sidebar
      sidebar={<Nav />}
      open={navOpen}
      onSetOpen={setNavOpen}
      styles={sidebarStyles}
      shadow={false} // Assuming this is part of your desired configuration
      transitions={navAnimate} // Assuming navAnimate controls transitions
    >
      {children}
    </Sidebar>
  );
};

export default NavWrapper;