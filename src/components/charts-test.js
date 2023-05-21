import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './charts1.css'
import percentageimg from './percentage.png'
const data = [
  { week: 1, leads: 0 },
  { week: 2, leads: 1 },
  { week: 3, leads: 0.3 },
  { week: 4, leads: 1.4 },
  { week: 5, leads: 1.6 },
  { week: 6, leads: 1.8 },
  { week: 7, leads: 1.9 }
];

const LineCharts = ({name, number,percentage}) => {
  return (
    <div className="part1-A">
       <div className="text-heading">{name}</div>
        <div className="numberAndChart">
            <div className="number">{number}</div>
            <ResponsiveContainer width={100} height={20}>
            <LineChart data={data}>
            <Line type="monotone" dataKey="leads" stroke="#8884d8" strokeWidth={2} dot={false} />
            </LineChart>
            </ResponsiveContainer>
        </div><div className="percentage"> <div className='percentage-value'><img src={percentageimg} alt='percentage'/> {percentage}</div>Increase since Last Week</div>
        
    </div>
  );
};

LineCharts.defaultProps = {
    name: "My Leads",
    number: 6000,
    percentage:'10%'
  }

export default LineCharts;
