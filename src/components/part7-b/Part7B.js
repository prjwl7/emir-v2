import React from 'react'
import './part7b.css'
import Photo from './Photo.png'
const Part7B = () => {
    const data = [
        { variable1: 'Ajay Kumar Rao', variable2: '1234567890', variable3: 'TVS Star City', variable4: '$1,280,000' },
        { variable1: 'Ajay Kumar Rao', variable2: '1234567890', variable3: 'TVS Star City', variable4: '$1,280,000' },
        { variable1: 'Ajay Kumar Rao', variable2: '1234567890', variable3: 'TVS Star City', variable4: '$1,280,000' },
        { variable1: 'Ajay Kumar Rao', variable2: '1234567890', variable3: 'TVS Star City', variable4: '$1,280,000' },
        { variable1: 'Ajay Kumar Rao', variable2: '1234567890', variable3: 'TVS Star City', variable4: '$1,280,000' },
        { variable1: 'Ajay Kumar Rao', variable2: '1234567890', variable3: 'TVS Star City', variable4: '$1,280,000' },
        { variable1: 'Ajay Kumar Rao', variable2: '1234567890', variable3: 'TVS Star City', variable4: '$1,280,000' }
       
      ];
    
      return (
        <div className='part7b-total'>
            <div className="part7b-top">
                <div className='top-left-content'style={{fontSize:20, width:500}}>Recent Enquiries</div>
                <div className='part7b-filter'>
                <select className='part7b-filter-range'>
                        <option defaultValue="main" >Today</option>
                        <option value="Range" className='filter-range-options'>Yesterday</option>
                </select>
                </div>
            </div>
          {data.map((item, index) => (
            <div key={index} className="data-row">
              <div style={{display:'flex', flexDirection:'row', gap:5, width:200,alignContent:'center',padding:2, top:2}}> <img src={Photo} alt="Photo" /> {item.variable1}</div>
              <div style={{fontSize:13}} > {item.variable2}</div>
              <div style={{fontSize:13, width:100}} > {item.variable3}</div>
              <div style={{fontSize:13}} > {item.variable4}</div>
            </div>
          ))}
        </div>
      );
}

export default Part7B