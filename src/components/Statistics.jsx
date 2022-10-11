import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    // console.log(data);
    return (
        <div className='pt-44 lg:pt-0'>
           <div style={{width:"100%", height: "400px", padding:"20px 30px 20px 5px"}}>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc"  strokeDasharray="5 5"/>
            <XAxis dataKey="name" />
            <YAxis />
           <Tooltip />
            </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default Statistics;