import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Heading from "../../components/heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleSelect = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (dir) => {
    let newSlideNum;
    if (dir === "l") newSlideNum = slideNumber === 0 ? 5 : slideNumber - 1;
    else newSlideNum = slideNumber === 5 ? 0 : slideNumber + 1;
    setSlideNumber(newSlideNum);
  };
  const photos = [
    {
      src: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1590073844006-33379778ae09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
    },
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww",
    },
  ];
  return (
    <div>
      <Navbar />
      <Heading />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="slideWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove()}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book now</button>
          <div className="hotelTitle">Grand Hotel</div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <div className="hotelImages">
            {photos.map((p, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleSelect(i)}
                  src={p.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetail">
            <div className="hotelDetails">
              <h1>Stay in the heart of the Krakow</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                reiciendis, pariatur impedit rerum quis hic vitae blanditiis aut
                sit officia voluptatem repudiandae nam odit eius maxime maiores
                mollitia illo magnam in. Ducimus voluptatibus dignissimos soluta
                quia repellendus, nihil aperiam illum.
              </p>
            </div>
            <div className="hotelPriceDetail">
              <h1>perfect for a 9-night stay</h1>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati vel laborum reiciendis consequuntur optio a.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
