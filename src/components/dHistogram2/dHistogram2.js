import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import './dHistogram2.css'
const data = [
  { name: 'Two Star City', leadsGenerated: 10, leadsClosed: 8 },
  { name: 'Honda Shine', leadsGenerated: 15, leadsClosed: 13 },
  { name: 'Splendor Plus', leadsGenerated: 18, leadsClosed: 16 },
  { name: 'Honda SP125', leadsGenerated: 19, leadsClosed: 17 },
  { name: 'HF Deluxe', leadsGenerated: 21, leadsClosed: 19 },
  { name: 'Honda SP125', leadsGenerated: 22, leadsClosed: 20 },
  { name: 'Honda SP125', leadsGenerated: 23, leadsClosed: 21 },
  { name: 'Splendor Plus', leadsGenerated: 25, leadsClosed: 23 },
  { name: 'Two Star City', leadsGenerated: 26, leadsClosed: 23 },
  { name: 'Honda Shine', leadsGenerated: 30, leadsClosed: 27 },
];

const DoubleHistogram2 = () => {
  return (
    <div className='dHistogram-total'>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', position:'relative', top:-10,left:-575 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#4939FF', marginRight: '5px' }}></div>
          <span>Leads</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFD493', marginRight: '5px' }}></div>
          <span>Bookings</span>
        </div>
      </div>
      <div className='dHistogram-bottom'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={0}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} label={{ value: 'Top Models', dy: 10 }} />
            <YAxis type="number" axisLine={false} domain={[0, 40]} tickCount={5} label={{ value: 'Sales', angle: -90, position: 'insideLeft', dy : 40 }} />
            <Bar dataKey="leadsGenerated" fill="#4939FF" barSize={20}>
              {data.map((_, index) => (
                <Cell key={`cell-generated-${index}`} fill="#4939FF" />
              ))}
            </Bar>
            <Bar dataKey="leadsClosed" fill="#FFD493" barSize={20}>
              {data.map((_, index) => (
                <Cell key={`cell-closed-${index}`} fill="#FFD493" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoubleHistogram2;
