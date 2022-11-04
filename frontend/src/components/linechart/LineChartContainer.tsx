import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { formatStringToLocaleDateString } from '../../utils/utilities';

const LineChartContainer: React.FC<any> = ({ data }) => {
  return (
    <ResponsiveContainer width='99.5%' height={400}>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        className='line-chart'
      >
        <XAxis dataKey='date' tickFormatter={formatStringToLocaleDateString} />
        <Tooltip />
        <CartesianGrid stroke='#ccd2ff' />
        <Line type='monotone' dataKey='priceUsd' stroke='#808eff' yAxisId={0} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartContainer;
