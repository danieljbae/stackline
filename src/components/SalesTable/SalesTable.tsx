import React, { useState } from "react";
import { Sales } from "../../utils/types";
import "./SalesTable.css";

interface SalesTableProps {
    sales: Sales[];
}

const SalesTable: React.FC<SalesTableProps> = ({ sales }) => {
    const [sortField, setSortField] = useState<keyof Sales | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSort = (field: keyof Sales) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortField === field && sortDirection === 'asc') {
            direction = 'desc';
        }
        setSortField(field);
        setSortDirection(direction);
        sales.sort((a, b) => (a[field] > b[field] ? 1 : -1) * (direction === 'asc' ? 1 : -1));
    };

    return (
        <div className="sales-table">
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('weekEnding')}>WEEK ENDING {sortField === 'weekEnding' ? (sortDirection === 'asc' ? '▲' : '▼') : '▼'}</th>
                        <th onClick={() => handleSort('retailSales')}>RETAIL SALES {sortField === 'retailSales' ? (sortDirection === 'asc' ? '▲' : '▼') : '▼'}</th>
                        <th onClick={() => handleSort('wholesaleSales')}>WHOLESALE SALES {sortField === 'wholesaleSales' ? (sortDirection === 'asc' ? '▲' : '▼') : '▼'}</th>
                        <th onClick={() => handleSort('unitsSold')}>UNITS SOLD {sortField === 'unitsSold' ? (sortDirection === 'asc' ? '▲' : '▼') : '▼'}</th>
                        <th onClick={() => handleSort('retailerMargin')}>RETAILER MARGIN {sortField === 'retailerMargin' ? (sortDirection === 'asc' ? '▲' : '▼') : '▼'}</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.weekEnding}</td>
                            <td>${sale.retailSales.toLocaleString()}</td>
                            <td>${sale.wholesaleSales.toLocaleString()}</td>
                            <td>{sale.unitsSold.toLocaleString()}</td>
                            <td>${sale.retailerMargin.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesTable;