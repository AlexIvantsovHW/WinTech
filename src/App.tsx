import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ROUTER } from "./routers";
import { BaseLayout } from "./widget/layouts/baselayout";
import { routeComponent } from "./shared/components";

const Contact = React.lazy(() => import("./pages/contact/index"));
const About = React.lazy(() => import("./pages/about/index"));
const NewestGames = React.lazy(() => import("./pages/newest-games/index"));
const HottestGames = React.lazy(() => import("./pages/hottest-games/index"));
const AllGames = React.lazy(() => import("./pages/all-games/index"));
const Cookies = React.lazy(() => import("./pages/cookies/index"));
const Terms = React.lazy(() => import("./pages/terms/index"));
const Register = React.lazy(() => import("./pages/register/index"));

const Home = React.lazy(() => import("./pages/home/index"));

function App() {
  return (
    <Router>
      <BaseLayout>
        <div className="App">
          <Routes>
            {routeComponent(ROUTER.HOME, Home)}
            {routeComponent(ROUTER.CONTACT, Contact)}
            {routeComponent(ROUTER.ABOUT_US, About)}
            {routeComponent(ROUTER.NEWEST_GAMES, NewestGames)}
            {routeComponent(ROUTER.ALL_GAMES, AllGames)}
            {routeComponent(ROUTER.HOTTEST_GAMES, HottestGames)}
            {routeComponent(ROUTER.COOKIES, Cookies)}
            {routeComponent(ROUTER.TERMS, Terms)}
            {routeComponent(ROUTER.REGISTER, Register)}
          </Routes>
        </div>
      </BaseLayout>
    </Router>
  );
}

export default App;
