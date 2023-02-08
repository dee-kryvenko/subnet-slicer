import React from 'react'
import './App.css';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ChartDataLabels);

const data = {
  datasets: [
    {
      data: [8190, 8190, 16382, 16382, 16382],
      subnets: [
        {
          cidr: '192.168.0.0/19',
          netmask: '255.255.224.0',
          range: '192.168.0.0 - 192.168.31.255',
          usable: '192.168.0.1 - 192.168.31.254',
          hosts: 8190,
        },
        {
          cidr: '192.168.32.0/19',
          netmask: '255.255.224.0',
          range: '192.168.32.0 - 192.168.63.255',
          usable: '192.168.32.1 - 192.168.63.254',
          hosts: 8190,
        },
        {
          cidr: '192.168.64.0/18',
          netmask: '255.255.192.0',
          range: '192.168.64.0 - 192.168.127.255',
          usable: '192.168.64.1 - 192.168.127.254',
          hosts: 16382,
        },
        {
          cidr: '192.168.128.0/18',
          netmask: '255.255.192.0',
          range: '192.168.128.0 - 192.168.191.255',
          usable: '192.168.128.1 - 192.168.191.254',
          hosts: 16382,
        },
        {
          cidr: '192.168.192.0/18',
          netmask: '255.255.192.0',
          range: '192.168.192.0 - 192.168.255.255',
          usable: '192.168.192.1 - 192.168.255.254',
          hosts: 16382,
        }
      ],
      spacing: 30,
      hoverOffset: 20,
      cutout: '25%',
      radius: '90%',
    },
    {
      data: [16382, 16382, 16382, 16382],
      subnets: [
        {
          cidr: '192.168.0.0/18',
          netmask: '255.255.192.0	',
          range: '192.168.0.0 - 192.168.63.255',
          usable: '192.168.0.1 - 192.168.63.254',
          hosts: 16382,
        },
        {
          cidr: '192.168.64.0/18',
          netmask: '255.255.192.0',
          range: '192.168.64.0 - 192.168.127.255',
          usable: '192.168.64.1 - 192.168.127.254',
          hosts: 16382,
        },
        {
          cidr: '192.168.128.0/18',
          netmask: '255.255.192.0',
          range: '192.168.128.0 - 192.168.191.255',
          usable: '192.168.128.1 - 192.168.191.254',
          hosts: 16382,
        },
        {
          cidr: '192.168.192.0/18',
          netmask: '255.255.192.0',
          range: '192.168.192.0 - 192.168.255.255',
          usable: '192.168.192.1 - 192.168.255.254',
          hosts: 16382,
        }
      ],
      spacing: 10,
      hoverOffset: 15,
      cutout: '25%',
      radius: '90%',
    },
    {
      data: [32766, 16382, 16382],
      subnets: [
        {
          cidr: '192.168.0.0/17',
          netmask: '255.255.128.0',
          range: '192.168.0.0 - 192.168.127.255',
          usable: '192.168.0.1 - 192.168.127.254',
          hosts: 32766,
        },
        {
          cidr: '192.168.128.0/18',
          netmask: '255.255.192.0',
          range: '192.168.128.0 - 192.168.191.255',
          usable: '192.168.128.1 - 192.168.191.254',
          hosts: 16382,
        },
        {
          cidr: '192.168.192.0/18',
          netmask: '255.255.192.0',
          range: '192.168.192.0 - 192.168.255.255',
          usable: '192.168.192.1 - 192.168.255.254',
          hosts: 16382,
        }
      ],
      spacing: 5,
      hoverOffset: 10,
      cutout: '25%',
      radius: '90%',
    },
  ],
};

const second = {
  datasets: [
    {
      data: [8190, 8190, 16382],
      subnets: [
        {
          cidr: '192.168.0.0/19',
          netmask: '255.255.224.0',
          range: '192.168.0.0 - 192.168.31.255',
          usable: '192.168.0.1 - 192.168.31.254',
          hosts: 8190,
        },
        {
          cidr: '192.168.32.0/19',
          netmask: '255.255.224.0',
          range: '192.168.32.0 - 192.168.63.255',
          usable: '192.168.32.1 - 192.168.63.254',
          hosts: 8190,
        },
        {
          cidr: '192.168.64.0/18',
          netmask: '255.255.192.0',
          range: '192.168.64.0 - 192.168.127.255',
          usable: '192.168.64.1 - 192.168.127.254',
          hosts: 16382,
        },
      ],
      spacing: 30,
      hoverOffset: 20,
      cutout: '25%',
      radius: '90%',
    },
    {
      data: [16382, 16382],
      subnets: [
        {
          cidr: '192.168.0.0/18',
          netmask: '255.255.192.0	',
          range: '192.168.0.0 - 192.168.63.255',
          usable: '192.168.0.1 - 192.168.63.254',
          hosts: 16382,
        },
        {
          cidr: '192.168.64.0/18',
          netmask: '255.255.192.0',
          range: '192.168.64.0 - 192.168.127.255',
          usable: '192.168.64.1 - 192.168.127.254',
          hosts: 16382,
        },
      ],
      spacing: 30,
      hoverOffset: 20,
      cutout: '25%',
      radius: '90%',
    },
  ],
};

const PieChart = () => {
  return (
    <div className="full-screen-container">
      <Doughnut
        data={data}
        plugins={[{
          beforeDraw: (chart, options) => {
            var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
         
            ctx.restore();
            var fontSize = (height / 600).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
         
            var text = chart.options.centerText.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
         
            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }]}
        options={{
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateScale: true
          },
          centerText: {
            text: '192.168.0.0/16'
          },
          cutoutPercentage: 0,
          onClick: (evt, items, chart) => {
            if (items.length !== 1) {
              return
            }

            var datasetIndex = items[0].datasetIndex;
            var dataIndex = items[0].index;
            console.log(datasetIndex + " datasetIndex " + dataIndex + " dataIndex");
            if (chart.options.centerText.text === '192.168.0.0/16') {
              chart.data = second;
              chart.options.centerText.text = '192.168.0.0/17'
            } else {
              chart.data = data;
              chart.options.centerText.text = '192.168.0.0/16'
            }
            chart.update({
                preservation: true,
            });
          },
          plugins: {
            tooltip: {
              callbacks: {
                 beforeTitle: charts => {
                  return 'Subnet Name';
                 },
                 title: charts => {
                  return charts[0].dataset.subnets[charts[0].dataIndex].cidr;
                 },
                 afterTitle: charts => {
                  return charts[0].dataset.subnets[charts[0].dataIndex].netmask;
                 },
                 beforeBody: charts => {
                  return charts[0].dataset.subnets[charts[0].dataIndex].range;
                 },
                 label: chart => {
                    return ' Hosts: ' + chart.dataset.subnets[chart.dataIndex].hosts;
                 },
                 beforeFooter: charts => {
                   return 'Usable:'
                  },
                  footer: charts => {
                  return charts[0].dataset.subnets[charts[0].dataIndex].usable;
                 },
              }
            },
            datalabels: {
              color: 'white',
              font: {
                size: '12p',
                weight: 'bold'
              },
              clamp: true,
              formatter: (value, context) => {
                var subnet = context.dataset.subnets[context.dataIndex]
                return [
                  'Subnet Name',
                  subnet.cidr,
                  // 'netmask: ' + subnet.netmask,
                  // 'range: ' + subnet.range,
                  // 'usable: ' + subnet.usable,
                  'Hosts: ' + value,
                ]
              },
              textAlign: 'center'
            }
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PieChart />
    </div>
  );
}

export default App;
