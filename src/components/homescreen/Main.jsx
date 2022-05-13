import React, { useEffect, useState} from "react";
// import {useCallback} from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";
const Main = () => {
  const [list, setList] = useState([]);
  const [orginalist, setorginalList] = useState([]);

  const getCars = async () => {
    await axios

      .get("https://627cfe98bf2deb7174e560df.mockapi.io/cars")

      .then((response) => {
        setList(response.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCars();
  }, []);

  // const fetchBusinesses = useCallback(() => {
  //   getCars();
  // }, []);

  // useEffect(() => {
  //   fetchBusinesses();
  // }, [fetchBusinesses]);

  const handleSelect = (e) => {
    const sortValue = e.target.value;
    let _list = [...list];
    if (sortValue === "low") {
      const sortedArray = _list.sort(
        (a, b) => a.rentalPricePerMonth - b.rentalPricePerMonth
      );
      setList(sortedArray);
    } else if (sortValue === "high") {
      const sortedArray = _list.sort(
        (a, b) => b.rentalPricePerMonth - a.rentalPricePerMonth
      );
      setList(sortedArray);
    }
  };

  const handleSearch = (e) => {
    const key = e.target.value;
    let _list = [...list];
    const filtered = _list.filter((car) => {
      return car.name.toLowerCase().includes(key.toLowerCase());
    });
    setorginalList(filtered);
  };

  const newList = orginalist.length > 0 ? orginalist : list;
  return (
    <React.Fragment>
      <div className="searchSortContainer">
        <div>
          <span className="sortBy">SortBy</span>
          <select onChange={(e) => handleSelect(e)} name="cars" id="cars">
            <option value=""></option>
            <option value="high">Highest Price</option>
            <option value="low">Lowest Price</option>
          </select>
        </div>

        <input
          onChange={(e) => handleSearch(e)}
          className="searchBar"
          type="text"
          placeholder="Search by name"
        />
      </div>
      <div className="cardContainer">
        {newList.map((car) => {
          return (
            <div className="card" key={car._id}>
              <div>
                <p>from ${car.rentalPricePerMonth}/mo</p>
                <p>for 6 months</p>
              </div>
              <div>
                <img src={car.imgUrl} alt="img of car" />
              </div>
              <div>
                <p>{car.name + " " + car.useable_Battery}</p>
              </div>
              <div>
                <p>{car.efficiency}</p>
                <p>Efficiency</p>
              </div>
              <div>
                <NavLink to={"/electric_cars/" + car._id}>
                  <button>Explore</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Main;
