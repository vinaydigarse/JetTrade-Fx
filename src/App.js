import React from "react";
import AllRoute from "./Routes/AllRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ThemeToggle from "./utils/ToggleTheme";

const App = () => {
  return (
    <div>
      <Navbar />
      <AllRoute />
      <ThemeToggle />
      <Footer />
    </div>
  );
};

export default App;
