import DevextremeStockChart from './DevextremeStockChart.tsx';
import LightWeightChart from './LightWeightChart.tsx';
import {HighChartPOC} from './HighStockChart.tsx';
import { HighChartAreaRangePOC } from './HighCharts2.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>POC for Data Visualization</h2>
      <div>
        <p>LightWeight by TradingView:</p>
        <div className="chart-container">
          <LightWeightChart />
        </div>
      </div>

      <div>
        <p>Highchart:</p>
        <div className="chart-container">
          <HighChartPOC />
        </div>
        <div className="chart-container">
          <HighChartAreaRangePOC />
        </div>
      </div>

      <div>
        <p>Devextreme by DevExpress:</p>
        <div className="chart-container">
          <DevextremeStockChart />
        </div>
      </div>
    </div>
  );
}

export default App;
