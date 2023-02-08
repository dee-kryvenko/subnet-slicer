import React from 'react'
import './App.css';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ChartDataLabels);

const data = {
  datasets: [
    {
      data: [5, 15, 20, 20, 5, 10, 10, 5, 3, 2, 2, 3],
      spacing: 30,
      hoverOffset: 20,
      cutout: '25%',
      radius: '90%',
    },
    {
      data: [20, 40, 15, 15, 5, 5],
      spacing: 10,
      hoverOffset: 15,
      cutout: '25%',
      radius: '90%',
    },
    {
      data: [60, 30, 10],
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
      data: [60, 30, 10],
      spacing: 5,
      hoverOffset: 10,
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
            text: '10.0.0.0/16'
          },
          cutoutPercentage: 0,
          onClick: (evt, items, chart) => {
            if (items.length !== 1) {
              return
            }

            var datasetIndex = items[0].datasetIndex;
            var dataIndex = items[0].index;
            console.log(datasetIndex + " datasetIndex " + dataIndex + " dataIndex");
            if (chart.options.centerText.text === '10.0.0.0/16') {
              chart.data = second;
              chart.options.centerText.text = '10.0.0.0/24'
            } else {
              chart.data = data;
              chart.options.centerText.text = '10.0.0.0/16'
            }
            chart.update({
                preservation: true,
            });
          },
          plugins: {
            tooltip: {
              callbacks: {
                 label: chart => {
                    var datasetIndex = chart.datasetIndex;
                    var dataIndex = chart.dataIndex;
                    return datasetIndex + " datasetIndex " + dataIndex + " dataIndex";
                 }
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
                return ['datasetIndex=' + context.datasetIndex, 'dataIndex=' + context.dataIndex, value]
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
