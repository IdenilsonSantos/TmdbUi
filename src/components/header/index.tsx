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
            
            <div className="menu--left-bar">
              <Menu color="#C3C3C3" />
            </div>
            <img
              className="menu--left-image"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            />
          </div>
          <div className="header__nav-search">
            <div className="search-filter">
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
