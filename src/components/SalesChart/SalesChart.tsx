import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SalesChart.css';
import { Sales } from '../../utils/types';

const CustomTooltip = ({ active, payload, label }: { active: boolean, payload: any[], label: string }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Date: ${label}`}</p>
                <p style={{ color: '#347deb' }}>{`Retail Sales: $${payload[0].value}`}</p>
                <p style={{ color: '#abaaa9' }}>{`Wholesale Sales: $${payload[1].value}`}</p>
            </div>
        );
    }
    return null;
};

const monthTickFormatter = (tick: string) => {
    const date = new Date(tick);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    if (date.getTime() === firstDayOfMonth.getTime()) {
        return date.toLocaleString('default', { month: 'short' });
    }
    return '';
};

interface SalesChartProps {
    sales: Sales[];
}

const SalesChart: React.FC<SalesChartProps> = ({ sales }) => {
    return (
        <div className="SalesChart">
            <div className="chart-title">Retail Sales</div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sales} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="weekEnding" type="category" axisLine={false} tickLine={false} tickFormatter={monthTickFormatter} />
                    <YAxis hide={true} />
                    <Tooltip content={<CustomTooltip active={true} payload={[]} label="" />} />
                    <Line type="monotone" dataKey="retailSales" stroke="#347deb" strokeWidth={4} dot={false} />
                    <Line type="monotone" dataKey="wholesaleSales" stroke="#abaaa9" strokeWidth={4} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;


