import './App.css';
import {BodyThree} from "./Body-three/Body-three";
import {ContentSecond} from "./ContentSecond/ContentSecond";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {ContentFirst} from "./Body/ContentFirst/ContentFirst";
import {BodyFour} from "./BodyFour/BodyFour";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentFirst/>
      <ContentSecond />
      <BodyThree />
      <BodyFour />
      <Footer />
    </div>
  );
}

export default App;
