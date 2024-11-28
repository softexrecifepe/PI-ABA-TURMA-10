import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1 mes', uv: 1, pv: 1 },
  { name: '3 meses', uv: 2, pv: 2 },
  { name: '6 meses', uv: 3, pv: 3 },
  { name: 'Todos', uv: 4, pv: 4 },
];

const MyBarChart = () => (
  <>
  <div className='graficos'>
  <ResponsiveContainer width="70%" height={400} margin-top="50%">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
      <Bar dataKey="pv" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
  </div>
  </>
);

export default MyBarChart;
