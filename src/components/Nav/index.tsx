import React, { useContext } from "react";
import { LayoutContext } from "../../utils/NavContext";
import "./styles.scss";

const Nav: React.FC = () => {
  const ctx = useContext(LayoutContext);

  const { navWidth } = ctx;

  return (
    <div
      className="bg-light border-right sidebar"
      style={{ width: navWidth, height: "100%" }}
    >
      <div className="sidebar-logo">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
      </div>
      <div className="sidebar-list">
      <ul>
        <li>Filmes</li>
        <li>Series</li>
        <li>Pessoas</li>
        <li>Mais</li>
      </ul>
      </div>
    </div>
  );
};

export default Nav;
