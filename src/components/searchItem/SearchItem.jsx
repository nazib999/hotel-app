import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm0YJVRuqoXhTRkznZ-Z5Y3DlXRfWi6OafGVwwpPrQqD6E1LINg2NM4RB_g&s"
        className="siImg"
        alt=""
      />
      <div className="searchDes">
        <h1>Tower street apertments</h1>
        <span className="desSpan">Free airport taxi.</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
      </div>
      <div className="searchDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siText">
          <span className="siPrice">$123 </span>
          <span className="siTax">Include taxes and fees </span>
          <button className="siBtn">See availabltiy</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
