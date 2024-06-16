import Header from "./components/header";
import Trailers from "./sections/TrailerMovie";
import Trending from "./sections/Tendences";
import "./styles.scss";

function App() {

  return (
    <>
      <Header />
      <Trailers/>
      <Trending/>
    </>
  );
}

export default App;