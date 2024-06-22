import React, { useContext } from "react";
import { LayoutContext } from "../../utils/NavContext";
import TmdbLogoLarge from "../../assets/tmdb-logo-large.svg"
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
        <img src={TmdbLogoLarge} />
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
