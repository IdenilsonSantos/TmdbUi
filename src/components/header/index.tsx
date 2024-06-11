import {
  BookmarkPlus,
  ChevronDown,
  Menu,
  Search,
  UserCircle,
} from "lucide-react";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__nav-logo-menu--left">
            <img
              className="menu--left-image"
              src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_BrandBanner_1920x425.jpg"
            />
            <div className="menu--left-bar">
              <Menu color="#C3C3C3" />
              <span>Menu</span>
            </div>
          </div>
          <div className="header__nav-search">
            <div className="search-filter">
              <div className="search-filter__drop-down">
                <span>All</span>
                <ChevronDown size={16} />
              </div>
              <input
                className="search-filter__input"
                placeholder="Search IMdb"
              />
              <div className="search-filter__drop-down">
                <Search />
              </div>
            </div>
          </div>
          <div className="header__nav-logo-menu--right">
            <img
              className="menu--right-image"
              src="https://m.media-amazon.com/images/S/sash/plpk1uWJsI--$Bh.png"
            />
            <div className="menu--right-items">
              <BookmarkPlus color="#C3C3C3" />
              <span>Lista</span>
              <UserCircle color="#C3C3C3" />
              <span>Usuário</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
