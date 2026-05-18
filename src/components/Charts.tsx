import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from 'recharts';

const COLORS = ['#C65D3D', '#7A9D8F', '#2D2D2D', '#D0EBE4'];

export const MarketCurve = () => {
  const data = Array.from({ length: 20 }, (_, i) => ({
    name: i,
    val: Math.exp(-Math.pow(i - 10, 2) / 20) * 100 + Math.random() * 5,
  }));

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C65D3D" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#C65D3D" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type="monotone" 
            dataKey="val" 
            stroke="#C65D3D" 
            fillOpacity={1} 
            fill="url(#colorVal)" 
            strokeWidth={1.5}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#F0EBE4', border: '1px solid #C65D3D', borderRadius: '4px' }}
            labelStyle={{ display: 'none' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const MinimalBarChart = ({ data, horizontal = false }: { data: any[], horizontal?: boolean }) => {
  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data} 
          layout={horizontal ? 'vertical' : 'horizontal'}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis 
            type={horizontal ? 'number' : 'category'} 
            dataKey={horizontal ? undefined : 'name'} 
            hide 
          />
          <YAxis 
            type={horizontal ? 'category' : 'number'} 
            dataKey={horizontal ? 'name' : undefined} 
            hide 
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ backgroundColor: '#F0EBE4', border: '1px solid #C65D3D', borderRadius: '4px' }}
          />
          <Bar 
            dataKey="value" 
            fill="#C65D3D" 
            radius={horizontal ? [0, 4, 4, 0] : [4, 4, 0, 0]}
            barSize={ horizontal ? 30 : 40}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const RevenuePieChart = ({ data }: { data: any[] }) => {
  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#F0EBE4', border: '1px solid #C65D3D', borderRadius: '4px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
