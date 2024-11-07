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
        const {title, link1, link2, link3, link4, page} = card
        return(
          <div className='card' key={index}>
          <div className="title"><h3> {title} </h3></div>
          <div className='cardimages'>
                  <img src={link1} alt="" />
                  <img src={link2} alt="" />
                  <img src={link3} alt="" />
                  <img src={link4} alt="" />
          </div>
          <footer>{
            <a href={page}>See more</a>
            }</footer>
          </div>
        )
      })
    }

    






 </div>
  )
}

export default Card
