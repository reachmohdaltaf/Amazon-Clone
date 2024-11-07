import React from "react";
import "../components/Sidebar.css";

const data = [
  {
    heading: "Trending",
    category: ["Best Seller", "New Releases", "Movers and Shakers"],
  },
  {
    heading: "Digital Content and Devices",
    category: ["Echo & Alexa", "Fire TV", "Kindle Ebook", "Audio"],
  },
  {
    heading: "Shop by Category",
    category: [
      "Mobile",
      "Computers",
      "Appliances",
      "Men Fashions",
      "Best",
      "Best",
      "Best",
    ],
  },
  {
    heading: "Shop by Category",
    category: [
      "Mobile",
      "Computers",
      "Appliances",
      "Men Fashions",
      "Best",
      "Best",
      "Best",
    ],
  }
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user">
        <i className="fa fa-user"></i>
        <h3>
          Hello, <span>Sign in</span>
        </h3>
      </div>
    <div className="container">
    <div className="products">
        {data.map((item, index) => {
          return (
            <ul>
              <li>
                <strong>{item.heading}</strong>
              </li>

              {item.category.map((category, index) => {
                return <li>{category}</li>;
              })}
            </ul>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
