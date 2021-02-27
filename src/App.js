import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Footer from "./components/Footer/Footer";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
