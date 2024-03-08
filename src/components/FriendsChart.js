import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    You: 300,
    Akshai: 500,
    Porchelvan: 440,
    Nithesh: 750
  },
  {
    name: 'Tuesday',
    You: 432,
    Akshai: 578,
    Porchelvan: 1000,
    Nithesh: 764
  },
  {
    name: 'Wednesday',
    You: 219,
    Akshai: 789,
    Porchelvan: 600,
    Nithesh: 347
  },
  {
    name: 'thursday',
    You: 600,
    Akshai: 234,
    Porchelvan: 888,
    Nithesh: 876
  },
  {
    name: 'Friday',
    You: 645,
    Akshai: 645,
    Porchelvan: 968,
    Nithesh: 673
  },
  {
    name: 'Saturday',
    You: 310,
    Akshai: 568,
    Porchelvan: 866,
    Nithesh: 872
  },
  {
    name: 'Sunday',
    You: 0,
    Akshai: 321,
    Porchelvan: 986,
    Nithesh: 362
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="You" stroke="#f04637" fill="#fe481b" />
            <Area type="monotone" dataKey="Akshai" stackId="1" stroke="#fe481b" fill="#fe9980" />
          <Area type="monotone" dataKey="Porchelvan" stackId="1" stroke="#fe481b" fill="#ffc2b3" />
          <Area type="monotone" dataKey="Nithesh" stackId="1" stroke="#fe481b" fill="#ffebe6" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
