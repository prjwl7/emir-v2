import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import './piechart180.css'
const data = [
  { name: 'Facebook adds', value: 26 },
  { name: 'Google adds', value: 20 },
  { name: 'Youtube adds', value: 40 },
  { name: 'Instagram adds', value: 36 }
];

const COLORS = [
  { name: 'Facebook adds', color: '#2DDB81' },
  { name: 'Google adds', color: '#FFD493' },
  { name: 'Youtube adds', color: '#4939FF' },
  { name: 'Instagram adds', color: '#E2E1ED' }
];

const PieChart180 = () => {
  return (
    <div className="contentpie">
        <div className="piechart1">
        <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={130}
          fill="#82ca9d"
          label
          stroke="#fff"
          strokeWidth={6}
          sectorBorderColor="#8884d8"
          sectorBorderRadius={20}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length].color} />
          ))}

        </Pie>
      </PieChart>
    </ResponsiveContainer>
        </div>
        <div className="visits">Visits 3800</div>
        <div className="labels-piechart">
        <div>
      <ul style={{ display: 'grid', gridTemplateColumns: '200px 200px', gap: '15px' }}>
        {COLORS.map((item, index) => (
          <li key={index} style={{ listStyleType: 'none' }}>
            <span
              style={{
                display: 'inline-block',
                marginRight: '5px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: item.color
              }}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
        </div>
    </div>
  );
};

export default PieChart180;
