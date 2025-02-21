"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFilter, faSearch, faClock } from "@fortawesome/free-solid-svg-icons";
import { productsData } from "@/utils/constant";
import DatePicker from "react-datepicker";

export default function SearchFilterBar() {
  const [selectedStore, setSelectedStore] = useState("All");
  const [isActive, setIsActive] = useState(false);

  const stores = ["All", ...new Set(productsData.map(product => product.store))];

  return (
    <div className="mt-6">
      <div className="columns is-mobile is-2 is-vcentered is-multiline px-6">

        {/* LEFT SIDE: Search, Filters, Store Selection */}
        {/* <div className="column is-full-mobile is-two-thirds-tablet is-three-quarters-desktop"> */}
        <div className="column is-9">
          <div className="columns is-mobile">
            <div className="control column is-1 
            is-three-quarters-mobile
      is-two-thirds-tablet
      is-half-desktop
      is-one-third-widescreen
      is-one-quarter-fullhd">
              <div className="select is-fullwidth">
                <select
                // value={selectedBrand}
                // onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  {/* {stores.map((store, index) => (
                    <option key={index} value={store}>
                      {store}
                    </option>
                  ))} */}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <div className="control column is-2 has-icons-right" style={{ width: "22vw" }}>
              <input
                className="input is-fullwidth"
                type="text"
                placeholder="Keywords..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* <p className="column is-2">filter</p> */}
            <div class="field column is-2 has-addons m-0">
              <div class="control">
                <button type="submit" class="button ">Store</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select name="country" value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
                    {
                      stores.map((store, idx) => <option key={idx} value={store}>{store}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>

            {/* <p className="column is-2">filter</p> */}
            <div className="field column is-3 is-fullwidth has-addons m-0">
              <div className="control">
                <button className="button is-info">
                  <i className="fa-solid fa-business-time"></i> Time
                </button>
              </div>
              <div className="control is-expanded">
                <DatePicker
                  // selectsRange
                  // startDate={startDate}
                  // endDate={endDate}
                  // onChange={(update) => setDateRange(update)}
                  className="input"
                  dateFormat="dd/MM/yyyy"
                />
              </div>

            </div>

            {/* <p className="column is-1">filter</p> */}
            <div className="column">
              <button className="button is-primary ml-3">
                <FontAwesomeIcon icon={faSearch} /> <span className="ml-2">Search</span>
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Search Button & Extra Links */}
        {/* <div className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop"> */}
        {/* <div className="column is-3">
          <div className="columns is-mobile is-vcentered ">
            <p className="column is-6">filter</p>
            <p className="column is-6">filter</p>
          </div>
        </div> */}

        <div className="column is-3">
          <div className="is-flex is-align-items-center is-justify-content-flex-end">
            <a href="#" className="mr-3">
              <i className="fas fa-mouse-pointer"></i> Last Click Priority
            </a>
            <a href="#">
              <i className="fas fa-history"></i> First & Last Click
            </a>
          </div>
        </div>

      </div>


      {/* test */}
      <div className="columns is-multiline is-mobile px-4">
        <div className="column is-three-quarters-fullhd is-12-desktop">

          <div class="columns is-mobile">
            <div className="column 
      is-three-quarters-mobile
      is-2-tablet
      is-2-desktop
      is-2-widescreen
      is-2-fullhd">
              <div className="select is-fullwidth">
                <select
                // value={selectedBrand}
                // onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  {/* {stores.map((store, index) => (
                    <option key={index} value={store}>
                      {store}
                    </option>
                  ))} */}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <div
              class="
      column
      is-three-quarters-mobile
      is-two-thirds-tablet
      is-5-desktop
      is-5-widescreen
      is-5-fullhd
    "
            >
              <input
                className="input is-fullwidth"
                type="text"
                placeholder="Keywords..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div class="column 
            is-fullwidth
            is-expanded
            field
            has-addons 
            is-three-quarters-mobile
      is-two-thirds-tablet
      is-2-desktop
      is-2-widescreen
      is-2-fullhd">
              <div class="control">
                <button type="submit" className="button">Store</button>
              </div>
              <div class="control ">
                <div class="select ">
                  <select name="country" value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
                    {
                      stores.map((store, idx) => <option key={idx} value={store}>{store}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
            <div class="column
             is-three-quarters-mobile
             is-two-thirds-tablet
             is-3-desktop
             is-3-widescreen
             is-3-fullhd
             
             field is-fullwidth has-addons
             "
            >
              <div className="control">
                <button className="button is-info">
                  <i className="fa-solid fa-business-time"></i> Time
                </button>
              </div>
              <div className="control is-expanded">
                <DatePicker
                  // selectsRange
                  // startDate={startDate}
                  // endDate={endDate}
                  // onChange={(update) => setDateRange(update)}
                  className="input"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
            <div class="column  is-three-quarters-mobile
      is-two-thirds-tablet
      is-1-desktop
      is-1-widescreen
      is-1-fullhd">
              <button className="button is-primary ml-3">
                <FontAwesomeIcon icon={faSearch} /> <span className="ml-2">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="column is-one-quarter-desktop">
          <div className="is-flex is-align-items-center is-justify-content-flex-end">
            <a href="#" className="mr-3">
              <i className="fas fa-mouse-pointer"></i> Last Click Priority
            </a>
            <a href="#">
              <i className="fas fa-history"></i> First & Last Click
            </a>
          </div>
        </div>
      </div>


      
    </div>
  );
}
