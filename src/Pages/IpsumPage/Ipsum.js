import React from 'react'
import classes from './Ipsum.module.css'

const Ipsum = () => {
  return (
    <div>
      <div className={classes.head}>
        <div className={classes.logo}>
            <h3><a href="./index.html">Wales Drive</a></h3>
        </div>
    </div>
    <form>
      <div className={classes.personal_info}>
        <h3>Personal Information</h3>
         <div  className={classes.formControl}> 
              <label  for='name'>Name</label>
              <input type="text" name='name' id='name' required/>
              <small id='badMessage'></small>
        </div> 
      </div>
    </form>
    </div>
  )
}

export default Ipsum
