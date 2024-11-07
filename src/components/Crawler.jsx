import React from 'react'
import '../components/Crawler.css'

function Crawler() {
  return (
    <div className='crawler'>
      <img src="https://tinyurl.com/2s42mjpr" alt="" />
    </div>
  )
}

export default Crawler



// import React from 'react'
// import '../components/Crawler.css'
// import '../components/Card.css'
// import { useState } from 'react';


// const images = [

//     {
//         "img":  "https://tinyurl.com/2s42mjpr"
//     },
//     {
//         "img":  "https://tinyurl.com/2s42mjpr"
//     },
//     {
//         "img":  "https://tinyurl.com/2s42mjpr"
//     },
   
  
//   ];


// function Crawler() {
//      const [image, setScroller] = useState(0)
//     const next = ()=>{
//         setScroller(image + 1)
//         console.log(image)
//     }
//     const prev = ()=>{
//         setScroller(image - 1)
//     }
//   return (
//     <div className='crawler'>
      
//      <img src={images.img} alt="" />
//       <button onClick={next}>next</button>
//       <button onClick={prev}>Prev</button>
//     </div>
//   )
// }

// export default Crawler