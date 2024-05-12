import react from "react";


import './App.css';
import {ContentSecond} from "./ContentSecond/ContentSecond";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {ContentFirst} from "./Body/ContentFirst/ContentFirst";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentFirst/>
      <ContentSecond />
      <Footer />
    </div>
  );
}

export default App;
