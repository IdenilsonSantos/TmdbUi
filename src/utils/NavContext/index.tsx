import React, { useState, useEffect } from "react";

import Media from "react-media";

const BootrapBreakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
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
  navDocked: false,
  navWidth: 256,
  setNavOpen: () => {},
  setNavDocked: () => {}
});

interface RootProps {}

const Root: React.FC<RootProps> = ({ children }) => {
  const navBreakpoint = "sm";

  const startingWidth = 0;
  const navStartsOpen = startingWidth > BootrapBreakpoints[navBreakpoint];

  const [navAnimate, setNavAnimate] = useState(false);
  const [navOpen, setNavOpen] = useState(navStartsOpen);
  const [navDocked, setNavDocked] = useState(false);

  // Allow the sidebar to render without animated. By defualt, it
  // animates when it initially loads, making the page jump around with
  // every page load. This enables it to appear fully in instantly, but
  // then enables animations for menu interactions after the initial
  // load.
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Genereate desired Layout state here.
  const layout: LayoutState = {
    navAnimate: navAnimate,
    navBreakpoint: "sm",
    navOpen,
    navDocked,
    navWidth: 256,
    setNavOpen,
    setNavDocked
  };

  return (
    <LayoutContext.Provider value={layout}>
      <Media query={{ minWidth: BootrapBreakpoints.sm }}/>
      <div>{children}</div>
    </LayoutContext.Provider>
  );
};

export default Root;
