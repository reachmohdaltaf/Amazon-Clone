import React, { memo, useState } from "react";
import "../components/FilterHeader.css";
import Sidebar from "./Sidebar";

export default memo(function FilterHeader() {
  const obj = [
    { name: "Fresh" },
    { name: "Mx player" },
    { name: "Sell" },
    { name: "Best Seller" },
    { name: "Today's Deals" },
    { name: "Mobile" },
    { name: "Electronics" },
    { name: "Home & Kitchen" },
    { name: "Customer Service" },
    { name: "Prime" },
    { name: "Amazon Pay" },
    { name: "Fashion" },
    { name: "New Release" },
    { name: "Car & Motorbike" },
  ];
  const sidebar = () => {};
  return (
    <div className="filterheader">
      <ul>
        <li onClick={sidebar}>
          <i className="fa fa-bars"></i>
          <strong>All</strong>
        </li>
        {obj.map((filter, index) => {
          return <li>{filter.name}</li>;
        })}
      </ul>
    </div>
  );
});
