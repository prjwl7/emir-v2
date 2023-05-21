import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './piechart2.css'

const data = [
    { name: 'Hero, TVS, Honda', value: 838 },
    { name: 'Yamaha, KTM, Royal Enfield', value: 655 },
    { name: 'Suzuki, Harley Davidson, Ducati', value: 250 },
];

const COLORS = ['#FFD493', '#4939FF', '#E8E3F3'];

const PieChartComponent = () => {
  return (
    <div className='piechart22'>
        
    <PieChart width={350} height={360} className='piechart221'>
      <Pie
        data={data}
        cx={200}
        cy={150}
        
        startAngle={110}
        endAngle={-290}
        innerRadius={80}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        labelLine={false}
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          percent,
          index,
        }) => {
          const RADIAN = Math.PI / 180;
          const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <g>
              <foreignObject x={x - 20} y={y - 10} width="40" height="30">
                <div
                  style={{
                    border: '1px solid #8884d8',
                    borderRadius: '2px',
                    textAlign: 'center',
                    backgroundColor:'white',
                    margin:7
                  }}
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </div>
              </foreignObject>
            </g>
          );
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend
            wrapperStyle={{ position: 'relative', left: 350, top: -320, }}
            layout="vertical"
            align="right" // Align the legend items to the right
            verticalAlign="middle" // Vertically align the legend items to the middle
            payload={data.map((item, index) => ({
             id: item.name,
             type: 'circle',
            value: (
                        <div style={{position:'relative' , top:-30, left:20, marginBottom:35}} >
                        <div style={{color:'black', position:'relative'}} >{item.name}</div> {/* Display the legend item */}
                        <div style={{color:'black', position:'relative',top:7, fontSize: 12 }}>{item.value} Leads generated</div> {/* Display the legend value */}
                        </div>
                    ),
            color: COLORS[index % COLORS.length],
  }))}
/>


    </PieChart>
  
    </div>

  );
};

export default PieChartComponent;
