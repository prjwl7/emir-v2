import React from 'react'
import { useState } from 'react';
import './part6.css'
import medal from './medal.png'
import gold from './gold.png'
import silver from './silver.png'
import bronze from  './bronze.png'
import location from './location.png'
import image1 from './image1.png'
import image2 from './image2.png'
const Parrt6 = () => {

    const [activeButton, setActiveButton] = useState('day');
  
    const handleButtonClick = (button) => {
      setActiveButton(button);
    };    

    const goldName = 'Rajesh';
    const silverName = 'Rajesh';
    const bronzeName = 'Rajesh';
  return (
    <div className='Part6-divs'>
        <div className="part6-top">
            <div style={{fontSize : 32}}>Top Performers</div>
            <div className="part6-filter">
                <select className='part6-filter-range'>
                        <option defaultValue="main" >Today</option>
                        <option value="Range" className='filter-range-options'>Yesterday</option>
                </select>
                </div>
        </div>
        <div className="part6-mid">
        <div className="button-group"
                        style={{backgroundColor :'white', display:'flex', flexDirection:'row', gap:30}}
                    >
                        <button
                                className={activeButton === 'day' ? 'active' : ''}
                                onClick={() => handleButtonClick('day')}
                                style={{borderRadius : 8, borderStyle:'none', width:'172px', height:'36px'}}
                        >
                        Leads Generated
                        </button>
                        <button
                                 className={activeButton === 'week' ? 'active' : ''}
                                 onClick={() => handleButtonClick('week')}
                                 style={{borderRadius : 8, borderStyle:'none', width:'172px', height:'36px'}}
                        >
                        Leads Closed
                        </button>
                    </div>
                
        </div>
        <div className="part6-bottom">
            <div className='medal' >
                <div className="medal-top">
                    <img src={medal} alt="photo" className='medal-photo'/>
                    <img src={gold} alt="gold-medal" className='medal-metal' />
                    <div className='medal-top-middle'>
                        <div>{goldName}</div>
                        <div style={{fontSize:10, position:'relative', top:7}}> <img src={location} alt="location" style={{position:'relative', top:7}}/> Mumbai </div>
                    </div>
                </div>
                <div className="medal-bottom">
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10, width:150}}><img src={image1} alt="image" />Total Lead Value $40k</div>
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10}}><img src={image2} alt="image" />Closed Leads 14</div>
                </div>
            </div>
            <div className='medal' >
                <div className="medal-top">
                    <img src={medal} alt="photo" className='medal-photo'/>
                    <img src={silver} alt="gold-medal" className='medal-metal' />
                    <div className='medal-top-middle'>
                        <div>{goldName}</div>
                        <div style={{fontSize:10, position:'relative', top:7}}> <img src={location} alt="location" style={{position:'relative', top:7}}/> Mumbai </div>
                    </div>
                </div>
                <div className="medal-bottom">
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10, width:150}}><img src={image1} alt="image" />Total Lead Value $40k</div>
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10}}><img src={image2} alt="image" />Closed Leads 14</div>
                </div>
            </div>
            <div className='medal' >
                <div className="medal-top">
                    <img src={medal} alt="photo" className='medal-photo'/>
                    <img src={bronze} alt="gold-medal" className='medal-metal' />
                    <div className='medal-top-middle'>
                        <div>{goldName}</div>
                        <div style={{fontSize:10, position:'relative', top:7}}> <img src={location} alt="location" style={{position:'relative', top:7}}/> Mumbai </div>
                    </div>
                </div>
                <div className="medal-bottom">
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10, width:150}}><img src={image1} alt="image" />Total Lead Value $40k</div>
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10}}><img src={image2} alt="image" />Closed Leads 14</div>
                </div>
            </div>
            <div className='medal' >
                <div className="medal-top">
                    <img src={medal} alt="photo" className='medal-photo'/>
                    <div className='medal-top-middle'>
                        <div>{goldName}</div>
                        <div style={{fontSize:10, position:'relative', top:7}}> <img src={location} alt="location" style={{position:'relative', top:7}}/> Mumbai </div>
                    </div>
                </div>
                <div className="medal-bottom">
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10, width:150}}><img src={image1} alt="image" />Total Lead Value $40k</div>
                    <div style={{fontSize:10, display:'flex', flexDirection:'row', gap:10}}><img src={image2} alt="image" />Closed Leads 14</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Parrt6