import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import FilterHeader from './components/FilterHeader.jsx'
import Card from './components/Card.jsx'
let myObj = [
  {
    title: "Home Appliances Sale | Save up to 55%",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  },
  {
    title: "Big Discount on Kitchen Appliances | Limited Time Offer",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  },
  {
    title: "Upgrade Your Home with Top Appliances | 55% Off",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  },
  {
    title: "Get the Best Appliances for Your Home | Discounts Available",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  },
  {
    title: "Exclusive Offers on Home Appliances | Up to 55% Off",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  },
  {
    title: "Best Deals on Kitchen Gadgets | Limited Offer",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  },
  {
    title: "Seasonal Sale on Home Appliances | Shop Now",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  },
  {
    title: "Special Discount on Smart Appliances | Shop Today",
    link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
  }
]





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <FilterHeader/>
    <Card obj = {myObj}/>
  </StrictMode>,
)
