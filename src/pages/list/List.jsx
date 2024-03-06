import React, { useState } from "react";
import "./list.css";

import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRangePicker } from "react-date-range";
import Navbar from "../../components/navbar/Navbar";
import Heading from "../../components/heading/Heading";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Heading />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="listItem">
              <label>Destination :</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>Check in date :</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRangePicker
                  onChange={(it) => setDate([it.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="lsOption">
                <div className="lsOptionItem">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span>Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span>Child</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={0}
                    placeholder={options.child}
                  />
                </div>
                <div className="lsOptionItem">
                  <span>Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="lsSearchBtn">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
