import React, { useState } from "react";
import "./heading.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Heading = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleSelect = (e) => {
    setDate([e.selection]);
  };
  const handleOption = (name, operation) => {
    setOptions((pre) => {
      return {
        ...pre,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch=()=>{
  navigate("/hotels",{state:{destination,date,options}})
  }
  return (
    <div className="heading">
      <div className={type==="list"?"headerContainer":"headerContainer listNode"}>
        <div className="headerList">
          <div className="headerItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport texi</span>
          </div>
        </div>
        {type == 'list' && <>
        <h1 className="headerTitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h1>
        <p className="headerDes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          assumenda ipsa? In?
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="What are you doing"
              className="headerInput" onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRangePicker
                ranges={date}
                onChange={handleSelect}
                className="datePicker"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult  ${options.child} child  ${options.room} room`}</span>
           {openOptions &&  <div className="options">
              <div className="optionItem">
                <div className="optionText">Adult</div>
                <div className="optionCounter">
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                  <span className="optionNumber">{options.adult}</span>
                  <button disabled={options.adult<1}
                    className="optionBtn"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <div className="optionText">Child</div>
                <div className="optionCounter">
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("child", "i")}
                  >
                    +
                  </button>
                  <span className="optionNumber">{options.child}</span>
                  <button disabled={options.child<1}
                    className="optionBtn"
                    onClick={() => handleOption("child", "d")}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <div className="optionText">Room</div>
                <div className="optionCounter">
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                  <span className="optionNumber">{options.room}</span>
                  <button disabled={options.room<1}
                    className="optionBtn"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
};

export default Heading;
