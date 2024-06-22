import React, { useState, useEffect } from "react";
import Media from "react-media";

const BootrapBreakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

interface LayoutState {
  navAnimate: boolean;
  navBreakpoint: "xs" | "sm" | "md" | "lg";
  navOpen: boolean;
  navDocked: boolean;
  navWidth: number;
  setNavOpen: (open: boolean) => void;
  setNavDocked: (docked: boolean) => void;
}

export const LayoutContext = React.createContext<LayoutState>({
  navAnimate: false,
  navBreakpoint: "sm",
  navOpen: false,
  navDocked: true,
  navWidth: 256,
  setNavOpen: () => {},
  setNavDocked: () => {},
});

const Root = ({ children }) => {
  const [navAnimate, setNavAnimate] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [navDocked, setNavDocked] = useState(true);

  useEffect(() => {
    const startingWidth = window.innerWidth;
    const navStartsOpen = startingWidth > BootrapBreakpoints.sm;

    setNavOpen(navStartsOpen);

    // Timeout to enable animation after initial load
    const timer = setTimeout(() => {
      setNavAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const layout: LayoutState = {
    navAnimate,
    navBreakpoint: "sm",
    navOpen,
    navDocked,
    navWidth: 256,
    setNavOpen,
    setNavDocked,
  };

  return (
    <LayoutContext.Provider value={layout}>
      <Media
        query={{ minWidth: BootrapBreakpoints.sm }}
        onChange={(isLarge: boolean) => {
          setNavDocked(isLarge);
          setNavOpen(isLarge);
        }}
      />
      <div>{children}</div>
    </LayoutContext.Provider>
  );
};

export default Root;
