# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Research Documentation

Why? We would love to have future-proof charts available for creating beautiful reports and interactive views for clients and ourselves. In short term, we will be having predictions on consumption and financial datas and on the long-term we would like to have Bloomberg/Marketplace -kind of visualisations.

### Entry points for data visualisation:

* Band
* Song/Recording
* Artist/Entity
* Time
* Territory
* Media



When? First implementation test (PoC) during this summer for consumption predictions.

How? Different chart libraries/dashboards ⭐ranked by the following features:

1. X-axis scrollable timeline (horizontal scroll)
2. Clickable/hoverable key events attached to timeline
3. Export as image/csv/pdf/excel
4. Chart layers which can be used to draw thresholds or medians
5. Mouse and keyboard support (scrollwheel, pinch zoom, etc.)
6. Cost / License

Research results: Chart libraries ranked

### Tradingview.com: 

  1. ⭐5/6 - does not support export as image or PDF (has export data as file), markers support in free version, event hoverable/clickable available in commercial one, can draw medians but not threshold
  2. License: Free (Open source, Free Apache license)/commercial with more functionalities
  3. Tech: Support for multiple frameworks ie. https://github.com/tradingview/lightweight-charts
  4. Demos: https://github.com/tradingview/charting-library-examples
  5. Types: Lightweight/Technical Analysis/Charting & Trading platform

### DevExtreme

  1. ⭐5/6 - mouse/kb support for zoom in/out, Hoverable events possible, export support(PDF, PNG, SVG), threshold/medians support
  2. License: Free / Commercial
  3. Tech: Support multiple frameworks 
  4. Demos: https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Stock/React/Light/, Stacked bi-directional Bar chart (for prediction)

### highcharts.com

  1. ⭐5/6 - Full version not free, and no mouse/kb support, export possible, markers/flags possible, threshold/medians support. Used by Wallet team.
  2. License: Free / Commercial
  3. Tech: JS charting library
  4. Demos: HighCharts Stock demo

### ChartIQ

  1. ⭐4/6 - Similar to TradingView, no export
  2. License: Commercial
  3. Tech: Supports multiple technologies
  4. Demos: https://live.demo.chartiq.com/#term-structure.demo.chartiq.com

### BizCharts

  1. ⭐3/6 - No events, no mouse/kb support
  2. License: Free
  3. Tech: Limited functionality & implementation possibilities

### Recharts

  1. ⭐2/6 - No events, no export and no mouse/kb support
  2. License: Free
  3. Tech: Limited functionality & implementation possibilities
  4. Demos: Doesn’t provide support for stock/trading view charts

### D3.js

  1. Notes: Lot of customisation needed to suit our requirements.

