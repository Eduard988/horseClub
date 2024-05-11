import react from "react";


import './App.css';
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {ContentFirst} from "./Body/ContentFirst/ContentFirst";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentFirst/>
      <Footer />
    </div>
  );
}

export default App;
