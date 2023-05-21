import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Legend } from 'recharts';
import './dHistogram.css'
const data = [
  { name: '11', leadsGenerated: 15, leadsClosed: 9 },
  { name: '12', leadsGenerated: 18, leadsClosed: 10 },
  { name: '17', leadsGenerated: 21, leadsClosed: 15 },
  { name: '18', leadsGenerated: 25, leadsClosed: 20 },
  { name: '23', leadsGenerated: 29, leadsClosed: 21 },
  { name: '24', leadsGenerated: 33, leadsClosed: 23 },
  { name: '30', leadsGenerated: 39, leadsClosed: 28 },
];

const DoubleHistogram = () => {
  return (
    <div className='dHistogram-total'>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', position:'relative', top:-10,left:-105 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFD493', marginRight: '5px' }}></div>
          <span>Leads Generated</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#4939FF', marginRight: '5px' }}></div>
          <span>Leads Closed</span>
        </div>
      </div>
      <div className='dHistogram-bottom'>
        <ResponsiveContainer width="85%" height={260}>
          <BarChart data={data} barGap={0}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} label={{ value: 'Leads closed', position: 'insideBottom', dy: 10 }} />
            <YAxis type="number" axisLine={false} domain={[0, 40]} tickCount={5} label={{ value: 'Leads generated', angle: -90, position: 'insideLeft', dy : 40 }} />
            <Bar dataKey="leadsGenerated" fill="#8884d8" barSize={20}>
              {data.map((_, index) => (
                <Cell key={`cell-generated-${index}`} fill="#FFD493" />
              ))}
            </Bar>
            <Bar dataKey="leadsClosed" fill="#82ca9d" barSize={20}>
              {data.map((_, index) => (
                <Cell key={`cell-closed-${index}`} fill="#4939FF" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoubleHistogram;
