import { Fragment } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";
import SingleCoin from "./pages/SingleCoin/SingleCoin";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Global from "./components/GlobalStyles/Global";

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <Global />
      <Header />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/market" component={Market} />
        <Route exact path="/market/:coin" component={SingleCoin} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={Error} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
