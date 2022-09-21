import React from 'react'

const CardSecond = ({logo, text}) => {
  return (
    <div >
      <img src={logo} alt='pic'/>
      <p>{text}</p>
    </div>
  )
}

export default CardSecond
