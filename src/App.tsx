import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTER } from "./routers";

const Contact = React.lazy(() => import("./pages/contact/index"));
const About = React.lazy(() => import("./pages/about/index"));

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={ROUTER.CONTACT} element={<Contact />} />
          <Route path={ROUTER.ABOUT_US} element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
