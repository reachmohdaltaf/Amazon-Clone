import React from 'react'
import '../components/Card.css'
function Card(props) {
  console.log(props)
 const {title, link} = props.obj
 console.log({title})
 console.log({link})

  return (
    <div className='card-container'>
       
       {/* card  */}
    
   
    {
      props.obj.map((card, index) => {
        const {title, link} = card
        return(
          <div className='card' key={index}>
          <div className="title"><h3> {title} </h3></div>
          <div className='cardimages'>
                  <img src={link} alt="" />
                  <img src={link} alt="" />
                  <img src={link} alt="" />
                  <img src={link} alt="" />
          </div>
          <footer><a href="">See More</a></footer>
          </div>
        )
      })
    }

    






 </div>
  )
}

export default Card
