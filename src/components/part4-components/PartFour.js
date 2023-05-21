import React from 'react'
import './partfour.css'

const PartFour = ({image, TotalLeads, Bookings}) => {
  return (
    <div className='part-four'>
        <div className="image-value">
            <img src={image} alt="hero" className='brand-image'/>
        </div>
        <div className="leads-value">
            <div className='leads-value1'>Total Leads : {TotalLeads}</div>
            <div className='leads-value2'>Bookings :  {Bookings}</div>
        </div>
         </div>
  )
}

export default PartFour