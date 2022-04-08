import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
