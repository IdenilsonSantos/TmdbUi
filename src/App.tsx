import Header from "./components/header";
import Trailers from "./sections/TrailerMovie";
import Trending from "./sections/Tendences";
import Popular from "./sections/Popular";
import "./styles.scss";
import NavWrapper from "./components/NavWrapper";
import Root from "./utils/NavContext";

function App() {
  return (
    <Root>
      <NavWrapper>
        <Header />
        <Trailers />
        <Trending />
        <Popular />
      </NavWrapper>
    </Root>
  );
}

export default App;
