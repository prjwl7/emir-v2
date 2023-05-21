import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
const data = [
  { name: '100', pv: 110 },
  { name: '200', pv: 140 },
  { name: '300', pv: 200 },
  { name: '400', pv: 300 },
  { name: '500', pv: 250 },
  { name: '600', pv: 200 },
  { name: '700', pv: 207 },
];


const LineChartComponent = () => {
  const minPv = Math.min(...data.map((item) => item.pv));
  const maxPv = Math.max(...data.map((item) => item.pv));
  const yAxisMargin = 20;


  const [activeButton, setActiveButton] = useState('day');
  
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="line-graph" style={{border: '2px solid rgba(170, 175, 221, 0.42)',
        borderRadius: '8px', width:'855px', height:'360px', padding:10, display:'flex', flexDirection:'column', gap:20,
        position:'relative', top:320, left:'20%'
        }}>
        <div className="topof">
            <div style={{display:'flex', flexDirection:'column',gap:20  }}>
                <div style={{fontWeight:600, height:25, width:106, fontSize:20}} >Sales by CC</div>
                <div style={{display:'flex', flexDirection:'row', gap:'63%', position:'relative', top:-5}} >
                    <div>04 April 2023</div>
                    <div className="button-group"
                        style={{backgroundColor :'#F5F4F6'}}
                    >
                        <button
                                className={activeButton === 'day' ? 'active' : ''}
                                onClick={() => handleButtonClick('day')}
                                style={{borderRadius : 15, borderStyle:'none', width:'50px'}}
                        >
                        Day
                        </button>
                        <button
                                 className={activeButton === 'week' ? 'active' : ''}
                                 onClick={() => handleButtonClick('week')}
                                 style={{borderRadius : 15, borderStyle:'none', width:'50px'}}
                        >
                        Week
                        </button>
                        <button
                                className={activeButton === 'year' ? 'active' : ''}
                                onClick={() => handleButtonClick('year')}
                                style={{borderRadius : 15, borderStyle:'none', width:'50px'}}
                        >
                        Year
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomof">
        <div style={{ width: '800px', height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis domain={[minPv - yAxisMargin, maxPv + yAxisMargin]} axisLine={false} hide={true} />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot ={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
        </div>
    </div>
  );
};

export default LineChartComponent;
