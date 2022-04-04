import React from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";


const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div className="lg:flex justify-around lg:px-5">
    <div>
      <BarChart width={300} height={300} data={data}>
          <Bar dataKey="investment" type="monotone" stoke="#8884d8" fill="#8884d8" />
          <Bar dataKey="revenue" type="monotone" stoke="#82ca9d" fill="#82ca9d" />
          <XAxis dataKey="month">

          </XAxis>
          <YAxis ></YAxis>
          <Tooltip/>
        </BarChart>
    </div>

    <div>
      <AreaChart width={300} height={300} data={data}>
          <Area dataKey="investment" type="monotone" stoke="#8884d8" fill="#8884d8" />
          <Area dataKey="revenue" type="monotone" stoke="#82ca9d" fill="#82ca9d" />
          <XAxis dataKey="month">

          </XAxis>
          <YAxis ></YAxis>
          <Tooltip/>
        </AreaChart>
    </div>

    
  </div>
  );
};

export default Dashboard;
