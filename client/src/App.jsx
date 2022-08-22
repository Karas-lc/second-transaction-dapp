import "./App.css";

import Transaction from "./components/Transaction";
import Intro from "./components/Intro";
import {Route, Routes} from "react-router-dom";
import DetailPage from "./components/DetailPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return <div>
      <Routes>
          <Route path="/details" element={<Details />} />
          <Route exact path="/" element={<Home />} />
      </Routes>
  </div>



}

const Home = () => {
    return <div id="App" >
            <div className="container">
                <NavigationBar />
                <Intro/>
                <br/>
                <Transaction/>
            </div>
        </div>
}

const Details = () => {
    return <DetailPage />
}
export default App;
