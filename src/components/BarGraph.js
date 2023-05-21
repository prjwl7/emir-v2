import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { FiArrowRight } from 'react-icons/fi';
import './dashboard.css';

const data = [
  { name: 'Bikes', sales: 60 },
  { name: 'Scooters', sales: 49 },
];

const BarGraph = () => {
  return (
    <div className='bar-graph' style={{ width: '362px', height: '271px' , border : '2px solid rgba(170, 175, 221, 0.42)', paddingRight:50, paddingTop:50, paddingBottom:-30, paddingLeft:10}}>
      <ResponsiveContainer width="85%" height="80%" >
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" domain={[10, 80]} tickCount={8} axisLine={false} />
          <YAxis dataKey="name" type="category" hide={false} axisLine={false} dx={3.5}/>
          <Tooltip />
          <Legend content={<CustomLegend />}/>
          <Bar dataKey="sales" fill="#8884d8" barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#4939FF' : '#FFD493'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="custom-legend" style={{position:'relative', left:'50%', marginTop: 20}}>
      {payload.map((entry, index) => (
        <div key={`legend-${index}`}>
          <span className="legend-label">Sales</span>
          <span className="legend-icon" style={{position : 'relative', top:3, left:3 ,width:10 }}>
            <FiArrowRight />
          </span>
        </div>
      ))}
    </div>
  );
};

export default BarGraph;
