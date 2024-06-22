import Header from "./components/Header";
import Trailers from "./sections/TrailerMovie";
import Trending from "./sections/Tendences";
import Popular from "./sections/Popular";
import NavWrapper from "./components/NavWrapper";
import Root from "./utils/NavContext";
import "./styles.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <Root>
      <NavWrapper>
        <Header />
        <Trailers />
        <Trending />
        <Popular />
        <Footer/>
      </NavWrapper>
    </Root>
  );
}

export default App;
