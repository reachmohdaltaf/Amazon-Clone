import React, { memo } from 'react'
import logo from '../assets/logo.svg'; 
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import india from '../assets/india.png'
import './header.css'
export default memo(function Header() {
  return (
    <div className='amazon-header'>
        <div className='amazon-logo'>
        <img className='logo' src={logo} alt="" srcset="" />
        </div>

        {/* Update Location */}

        <div className='location'>
            <p>Delivering to Delhi 001111</p>
            <h3><i className='fa fa-map-marker'></i><span> Update Location</span></h3>
        </div>
        
       
       
        {/* Search  Bar */}
           <div className='searchbar'>
           <select name="" className='selector' id="">
            <option value="All">All</option>
            <option value="All">Alexa Skills</option>
            <option value="All">Amazon Devices</option>
            <option value="All">Amazon Fashion</option>
            <option value="All">Amazon Fresh</option>
            <option value="All">Amazon Fresh Meat</option>
            <option value="All">Appliances</option>
            <option value="All">Baby</option>

           </select>
           <input className='input' type="text" placeholder='Search Amazon.in' />
           <button className='searchbtn'>        <img className='searchicon' src={search} alt="" srcset="" />
           </button>
        </div>
       
       
       
       {/* Upadte Language  */}

       <div className='update-language'>
       <img className='country' src={india} alt="" /> 
       <select name="" id="" className='language'>
        <option value="">EN</option>
       </select>
       </div>
     
        
       
       
        {/* sign in  */}
 
        <div className='signin'>
            <h6>Hello, Sign in</h6>
            <div>
            <select name="" id="" className='account-list'>
                <option value="">Account & Lists</option>
            </select>
            </div>
           
        </div>
        
       
       
        {/* Order  */}
        <div className='order'>
            Returns<br /><strong>& Orders</strong>
        </div>



        {/* Cart  */}
        <div className='cart'>
            <img className='cartlogo' src={cart  } alt="" />
            <h5 className='carttext'>Cart</h5>
        </div>
    </div>
  )
})
