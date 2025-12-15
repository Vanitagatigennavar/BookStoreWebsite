import React, { useState } from "react";
import "./App.css";
import AppStoreBanner from "./components/appstorebanner/AppStoreBanner";
import BestBooks from "./components/bestbooks/BestBooks";
import BookFirstPage from "./components/bookfirstpage/BookFirstPage";
import DarkMode from "./components/navbar/DarkMode";
import LibraryCorner from "./components/libraryfingertips/LibraryCorner";
import Navbar from "./components/navbar/Navbar";
import AllBooks from "./components/allbooks/AllBooks";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import PopUp from "./components/popup/PopUp";
function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="duration-200 bg-white dark:bg-gray-900 dark:text-white">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <BookFirstPage handleOrderPopup={handleOrderPopup} />
        <BestBooks handleOrderPopup={handleOrderPopup} />
        <LibraryCorner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
        <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
}

export default App;
