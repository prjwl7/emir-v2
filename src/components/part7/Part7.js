import React from 'react'
import nalasopara from './nalasopara.png'
import image2 from './image2.png'
import bookings from './part7-bookings.png'
import './part7.css'

const Part7 = () => {
    const data = [
        { variable1: 'Nalasopara Branch', variable2: '32', variable3: '32' },
        { variable1: 'Nalasopara Branch', variable2: '32', variable3: '32' },
        { variable1: 'Nalasopara Branch', variable2: '32', variable3: '32' },
        { variable1: 'Nalasopara Branch', variable2: '32', variable3: '32' },
        { variable1: 'Nalasopara Branch', variable2: '32', variable3: '32' },
        { variable1: 'Nalasopara Branch', variable2: '32', variable3: '32' },
        { variable1: 'Nalasopara Branch', variable2: '32', variable3: '32' },
      ];
    
      return (
        <div className='part7-total'>
            <div className="part7-top">
                <div className='top-left-content'style={{fontSize:20, width:500}}>Top Performing Branches</div>
                <div className='part7-filter'>
                <select className='part7-filter-range'>
                        <option defaultValue="main" >Today</option>
                        <option value="Range" className='filter-range-options'>Yesterday</option>
                </select>
                </div>
            </div>
          {data.map((item, index) => (
            <div key={index} className="data-row">
              <div style={{display:'flex', flexDirection:'row', gap:5}}><img src={nalasopara} alt="nalasopara" 
              style={{height:40, width:40}} />{item.variable1}</div>
              <div style={{fontSize:10}} > <img src={image2} alt="image 2" /> Total leads : {item.variable2}</div>
              <div style={{fontSize:10}} > <img src={bookings} alt="booking-image" /> Bookings : {item.variable3}</div>
            </div>
          ))}
        </div>
      );
}

export default Part7