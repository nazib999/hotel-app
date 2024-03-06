import React from "react";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://travelingcanucks.com/wp-content/uploads/2018/03/ireland-top-attractions-06.jpg"
          alt="" className="featuredImg"
        />
        <div className="featuredTitle">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://travelingcanucks.com/wp-content/uploads/2018/03/ireland-top-attractions-06.jpg"
          alt="" className="featuredImg"
        />
        <div className="featuredTitle">
            <h1>Austin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://travelingcanucks.com/wp-content/uploads/2018/03/ireland-top-attractions-06.jpg"
          alt="" className="featuredImg"
        />
        <div className="featuredTitle">
            <h1>Remo</h1>
            <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
