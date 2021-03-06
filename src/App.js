import {useEffect, useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Modal from "./Modal";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogDetail from "./BlogDetail";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/assets/js/custom.js`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* MENU  */}
        <Nav />

        <Switch>
          <Route path="/blog-detail">
            <BlogDetail />
          </Route>

          <Route exact path="/" component={Home} />
        </Switch>

        {/* FOOTER  */}
        <Footer />

        {/* MODAL  */}
        <Modal />
      </div>
    </Router>
  );
}

export default App;
