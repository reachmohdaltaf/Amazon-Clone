import React, { memo } from 'react'
import '../components/FilterHeader.css'

export default memo(function FilterHeader() {
  return (
    <div className='filterheader'>
        <ul>
            <li><i className='fa fa-bars'></i> <strong>All</strong></li>
            <li>Fresh</li>
            <li>Mx Player</li>
            <li>Sell</li>
            <li>Best Sellers</li>
            <li>Today's Deals</li>
            <li>Mobiles</li>
            <li>Electronics</li>
            <li>Home & Kitchen</li>
            <li>Customer Service</li>
            <li>Prime</li>
            <li>New Realease</li>
            <li>Amazon Pay</li>
            <li>Fashion</li>
            <li>Car & Motorbike</li>

        </ul>
    </div>
  )
})
