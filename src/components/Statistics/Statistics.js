import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";


const Statistics = () => {
    const chartData = useLoaderData();
    return (
        <div className="stat-chart d-flex justify-content-center mt-5">
        <BarChart
          width={600}
          height={600}
          data={chartData.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#888443" />
        </BarChart>
      </div>
    );
};

export default Statistics;