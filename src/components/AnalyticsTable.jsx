"use client";  // Ensures compatibility with React hooks

import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { useRouter } from "next/navigation"; // App Router
import { faFilter, faChevronDown, faSearch, faCalendarAlt, faChevronLeft, faChevronRight, faAngleDown, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import { productsData } from "@/utils/constant";

console.log(productsData);

export default function AnalyticsTable() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Product Title");
    const [isActive, setIsActive] = useState(false);

    const [selected, setSelected] = useState("All");
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;

    const options = ["Product Title", "Category", "Brand", "SKU"];

    // filters
    const [searchTerm, setSearchTerm] = useState("");
    // const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedStore, setSelectedStore] = useState("All");

    // Handle search function
    // const handleSearch = (event) => {
    //     const keyword = event.target.value.toLowerCase();
    //     setSearchTerm(keyword);

    //     if (keyword.trim() === "") {
    //         setFilteredProducts(productsData);
    //     } else {
    //         const filtered = productsData.filter(
    //             (product) =>
    //                 product.store.toLowerCase().includes(keyword) ||
    //                 product.title.toLowerCase().includes(keyword)
    //         );
    //         setFilteredProducts(filtered);
    //     }
    // };

    const stores = ["All", ...new Set(productsData.map(product => product.store))];
    console.log(stores);

    useEffect(() => {
        const user = getUserFromLocalStorage("user");
        if (!user) {
            // navigate("/");
            router.push("/login");  // Redirect to products page
        } else {
        }
    }, [])

    // Filtering function
    const filteredProducts = productsData.filter((product) => {
        return (
            // (selectedBrand === "All" || product.brand === selectedBrand) &&
            (selectedStore === "All" || product.store === selectedStore) &&
            (searchTerm === "" || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className="box">
            <div className="columns is-vcentered">
                <div className="column">
                    <h2 className="title is-5">ANALYTICS: SALES BY PRODUCTS</h2>
                </div>

                {/* Stats */}
                <div className="button is-flex is-align-items-center mr-3" style={{ padding: "0", borderRadius: "6px", overflow: "hidden" }}>
                    <span className="button is-info" style={{ borderRadius: "6px 0 0 6px" }}>
                        Orders
                    </span>
                    <span className="button is-dark" style={{ borderRadius: "0 6px 6px 0", fontWeight: "bold" }}>
                        12,643
                    </span>
                </div>

                <div className="button is-flex is-align-items-center mr-3" style={{ padding: "0", borderRadius: "6px", overflow: "hidden" }}>
                    <span className="button is-info" style={{ borderRadius: "6px 0 0 6px", backgroundColor: "#8a07f4", color: "white" }}>
                        Products
                    </span>
                    <span className="button is-dark" style={{ borderRadius: "0 6px 6px 0", fontWeight: "bold" }}>
                        1,033
                    </span>
                </div>

                <div className="button is-flex is-align-items-center" style={{ padding: "0", borderRadius: "6px", overflow: "hidden", }}>
                    <span className="button is-info" style={{ borderRadius: "6px 0 0 6px", backgroundColor: "#f25091", color: "white" }}>
                        Net Revenue
                    </span>
                    <span className="button is-dark" style={{ borderRadius: "0 6px 6px 0", fontWeight: "bold" }}>
                        $410.911
                    </span>
                </div>
            </div>


            {/* search */}
            <div className="columns is-vcentered is-mobile">

                {/* Left Column: Search Inputs */}
                <div className="column is-9">
                    <div className="is-flex is-align-items-center">
                        <div className="has-addons is-flex is-align-items-center">
                            <div className="">
                                <div className="control">
                                    <div className="select">
                                        <select
                                            value={selectedBrand}
                                            onChange={(e) => setSelectedBrand(e.target.value)}
                                        >
                                            {stores.map((store, index) => (
                                                <option key={index} value={store}>
                                                    {store}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Input field */}
                            {/* <div className="control is-expanded">
                                <input className="input" type="text" placeholder="Keywords..." />
                            </div> */}

                            {/* Search Icon */}
                            {/* <div className="control">
                                <button className="button is-light">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div> */}
                            <div className="control has-icons-right" style={{ width: "25vw" }}>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Keywords..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span className="icon is-small is-right">
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                            </div>
                        </div>

                        {/* Filters Button */}
                        {/* <button className="button ml-3">
                            <FontAwesomeIcon icon={faFilter} /> Filters
                        </button> */}
                        <div className={`dropdown ml-3 ${isActive ? "is-active" : ""}`}>
                            <div className="dropdown-trigger">
                                <button
                                    className="button"
                                    onClick={() => setIsActive(!isActive)}
                                    aria-haspopup="true"
                                    aria-controls="dropdown-menu"
                                >
                                    <span>
                                        <FontAwesomeIcon icon={faFilter} className="mr-2" /> Filters
                                    </span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        Option 1
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Option 2
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Option 3
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        Reset Filters
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Store Dropdown */}
                        {/* <div className="is-flex ml-3">
                            <span className="button is-static">Store</span>
                            <div className="select ml-2">
                                <select>
                                    <option>All</option>
                                </select>
                            </div>
                        </div> */}
                        <div className="field mb-0 ml-3 has-addons">
                            {/* Store Label */}
                            <p className="control">
                                <button className="button is-static">Store</button>
                            </p>

                            {/* Dropdown */}
                            {/* <div className={`dropdown  ${isActive ? "is-active" : ""} control`}>
                                <div className="dropdown-trigger">
                                    <button
                                        className="button is-fullwidth"
                                        onClick={() => setIsActive(!isActive)}
                                        aria-haspopup="true"
                                        aria-controls="dropdown-menu"
                                    >
                                        <span>{selected}</span>
                                        <span className="icon is-small">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </button>
                                </div>
                            </div> */}
                            <div className="field">
                                {/* <label className="label">Store</label> */}
                                <div className="control">
                                    <div className="select ">
                                        <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
                                            <option value="All">All</option>
                                            <option value="Pawsionate">Pawsionate</option>
                                            <option value="Wrappiness">Wrappiness</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="dropdown-menu is-fullwidth control" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
                                        {
                                            stores.map((store, idx) =>
                                                <option key={idx}>{store}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div> */}

                        </div>

                        {/* Date Picker */}
                        <div className="field mb-0 ml-3 has-addons">
                            {/* Time Button */}
                            <p className="control">
                                <button className="button is-light">
                                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                    Time
                                </button>
                            </p>

                            {/* Date Picker */}
                            <p className="control">
                                <DatePicker
                                    selectsRange
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={(update) => setDateRange(update)}
                                    className="input"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </p>

                            {/* Previous Button */}
                            {/* <p className="control">
                                <button className="button is-light">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                            </p> */}

                            {/* Next Button */}
                            {/* <p className="control">
                                <button className="button is-light">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </p> */}
                        </div>

                        {/* Search Button */}
                        <button className="button is-primary ml-3">
                            <FontAwesomeIcon icon={faSearch} /> Search
                        </button>

                    </div>
                </div>

                {/* Right Column: Click Priority Links */}
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

            {/* total tasks found */}
            <h2 className="mb-4 has-text-right">{filteredProducts.length} Product{filteredProducts.length > 1 && 's'} Found</h2>

            {/* Table */}
            <div className="table-wrapper">
                <div className="box table-container scrollable-table p-0">
                    <table className="table is-fullwidth is-striped is-hoverable"
                        style={{
                            maxHeight: "82vh",
                            overflowY: "auto",
                        }}
                    >
                        <thead className="fixed-header">
                            <tr>
                                <th>RANK</th>
                                <th>STORE</th>
                                <th>PRODUCT TITLE</th>
                                <th>NET REV</th>
                                <th>PERCENT</th>
                                <th>QUANTITY</th>
                                <th>FACEBOOK</th>
                                <th>GOOGLE</th>
                                <th>TIKTOK</th>
                                <th>KLAVIYO</th>
                                <th>OTHERS</th>
                            </tr>
                        </thead>
                        <tbody className=" scrollable-body" style={{
                            maxHeight: "75vh",
                            overflowY: "auto",
                        }}>
                            {filteredProducts.length > 0 ? filteredProducts.map((item, index) => (
                                <tr key={index} className="is-vcentered">
                                    <td className="is-vcentered">#{item.rank}</td>
                                    <td className="is-vcentered">{item.store}</td>
                                    {/* <td>{item.product}ss</td> */}
                                    <td className="is-vcentered">
                                        <div className="media">
                                            {/* Product Image */}
                                            <div className="media-left">
                                                <figure className="image is-64x64">
                                                    <img
                                                        src={item.img} alt={item.img}
                                                    />
                                                </figure>
                                            </div>

                                            {/* Product Content */}
                                            <div className="media-content">
                                                <p className="title is-6 mb-2">
                                                    <a href="#" className="has-text-link">
                                                        {item.title}
                                                    </a>
                                                </p>
                                                <p className="subtitle is-7">
                                                    {item.details}
                                                </p>

                                                {/* Rating or additional icons */}
                                                {/* <div>
            <FontAwesomeIcon icon={faStar} className="has-text-warning" />
            <FontAwesomeIcon icon={faStar} className="has-text-warning" />
            <FontAwesomeIcon icon={faStar} className="has-text-warning" />
            <FontAwesomeIcon icon={faStar} className="has-text-warning" />
            <FontAwesomeIcon icon={faStar} className="has-text-grey-light" />
          </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="is-vcentered">{item.netRevenue}</td>
                                    <td className="is-vcentered">{item.percent}</td>
                                    <td className="is-vcentered">{item.quantity}</td>
                                    <td className="has-text-success is-vcentered">{item.facebook}</td>
                                    <td className="has-text-info is-vcentered">{item.google}</td>
                                    <td className="has-text-danger is-vcentered">{item.tiktok}</td>
                                    <td className="has-text-warning is-vcentered">{item.klaviyo}</td>
                                    <td className="has-text-dark is-vcentered">{item.others}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="12" className="has-text-centered">
                                        No products found.
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
