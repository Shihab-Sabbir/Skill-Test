import React from 'react'
import { useLoaderData } from 'react-router-dom';
// import { BarChart, LineChart, Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';
function Statistics() {
    const newData = useLoaderData();
    return (
        <div className='p-5 w-[100vw] h-[80vh] '>
            <ResponsiveContainer width="100%" height="100%" >
                {/* <BarChart
                    maxBarSize={20}
                    data={newData.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey='name'  />
                    <YAxis dataKey='total' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#FFFF" />
                </BarChart> */}

                {/* <LineChart
                    data={newData.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='name' />
                    <YAxis dataKey='total' />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey='total' stroke="#FFFF" activeDot={{ r: 8 }} />
                </LineChart> */}
                <ComposedChart
                    width={500}
                    height={400}
                    data={newData.data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis width={10} />
                    <Tooltip style={{ background: 'black' }} />
                    {/* <Legend /> */}
                    <Area type="monotone" dataKey="total" tooltipType='none' fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="total" barSize={20} fill="#ffffff" />
                    <Line type="monotone" dataKey="total" stroke="#ff7300" tooltipType='none' />
                    <Scatter dataKey="total" fill="blue" />
                </ComposedChart>


            </ResponsiveContainer>

        </div>
    )
}

export default Statistics