import React from "react";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Agency from "./components/Agency/Agency.jsx";
import Services from "./components/Services/Services.jsx";
import Work from "./components/Work/Work.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GetStarted from "./components/Get_Started/Get_Started.jsx";
import { data } from "./data.js";

const App = () => {
  return (
    <div>
      <Nav menu={data.main_menu} />
      <Hero hero={data.hero} />
      <Services services={data.services} />
      <Work portfolio={data.portfolio} />
      <Agency agency={data.agency_services} />
      <GetStarted />
      <Footer footer={data.footer} />
    </div>
  );
};

export default App;
