import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Heading from "../../components/heading/Heading";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heading type="list" />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <MailList />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
