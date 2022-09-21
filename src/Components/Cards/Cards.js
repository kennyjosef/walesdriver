import React from 'react'

const Cards = ({img, title, content}) => {
  return (
    <div>
             <div className='display'>
                <div className='display_logo'>
                    <img src={img} alt="pic"/>
                </div>
                <div className='display_text'>
                    <h3>{title}</h3>
                    <p>{content}</p>    
                </div>
            </div>
            
    </div>
  )
}

export default Cards;