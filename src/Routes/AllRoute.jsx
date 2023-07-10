import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Forex from "../Pages/TradingMarket/Forex";
import Crypto from "../Pages/TradingMarket/Crypto";
import Commodites from "../Pages/TradingMarket/Commodites";
import Spot from "../Pages/TradingMarket/Spot";
import Energis from "../Pages/TradingMarket/Energis";
import Indices from "../Pages/TradingMarket/Indices";
import Account from "../Pages/Trading/Account";
import Conditions from "../Pages/Trading/Conditions";
import Deposite from "../Pages/Trading/Deposite";
import Event from "../Pages/Trading/Event";
import Plateform from "../Pages/Trading/Plateform";
import Statiment from "../Pages/TradingTools/Statiment";
import Centrals from "../Pages/TradingTools/Centrals";
import Calender from "../Pages/TradingTools/Calender";
import Navigator from "../Pages/TradingTools/Navigator";
import About from "../Pages/Company/About";
import Choose from "../Pages/Company/Choose";
import Careers from "../Pages/Company/Careers";
import Reviews from "../Pages/Company/Reviews";
import Contact from "../Pages/Company/Contact";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/trading-account" element={<Account />} />
      <Route path="/trading-conditions" element={<Conditions />} />
      <Route path="/trading-deposite" element={<Deposite />} />
      <Route path="/trading-events" element={<Event />} />
      <Route path="/trading-plateform" element={<Plateform />} />

      <Route path="/tradingmarket-forex" element={<Forex />} />
      <Route path="/tradingmarket-crypto" element={<Crypto />} />
      <Route path="/tradingmarket-commodites" element={<Commodites />} />
      <Route path="/tradingmarket-spotmetals" element={<Spot />} />
      <Route path="/tradingmarket-energies" element={<Energis />} />
      <Route path="/tradingmarket-indices" element={<Indices />} />

      <Route path="/market-statiment" element={<Statiment />} />
      <Route path="/economy-calender" element={<Calender />} />
      <Route path="/tools-centrals" element={<Centrals />} />
      <Route path="/tools-navigator" element={<Navigator />} />

      <Route path="/companies-about" element={<About />} />
      <Route path="/companies-why-choose-us" element={<Choose />} />
      <Route path="/companies-careers" element={<Careers />} />
      <Route path="/companies-reviews" element={<Reviews />} />
      <Route path="/companies-Contact-us" element={<Contact />} />
    </Routes>
  );
};

export default AllRoute;

// /blog
// /help-center
// /safty-center
// /community
// /cookies-policy
// /private-policy
// /term-of-service
// /law-enforcement
