import Header from "./components/header";
import Trailers from "./sections/TrailerMovie";
import Trending from "./sections/Tendences";
import Popular from "./sections/Popular";
import "./styles.scss";

function App() {
  return (
    <>
      <Header />
      <Trailers/>
      <Trending/>
      <Popular/>
    </>
  );
}

export default App;