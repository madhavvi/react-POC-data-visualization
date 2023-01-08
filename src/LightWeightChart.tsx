import { createChart, CrosshairMode } from 'lightweight-charts';
import { useRef, useEffect } from 'react';
import { volumeData, priceData, areaData, ExtraAreaData } from './DataSource/LightWeightChartData';


function LightWeightChart() {
    const chartContainerRef = useRef();
    const chart = useRef();

    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, {
            width: 950,
            height: 500,
            layout: {
                backgroundColor: '#253248',
                textColor: 'rgba(255, 255, 255, 0.9)',
            },
            grid: {
                vertLines: {
                    color: '#334158',
                },
                horzLines: {
                    color: '#334158',
                },
            },
            range: {
                from: 54,
                to: 58
            },
            crosshair: {
                mode: CrosshairMode.Normal,
                vertLine: {
                    visible: true
                },
                horzLine: {
                    visible: true
                }
            },
            // timeScale: {
            //     minBarSpacing: 53,
            //     borderVisible: true,
            //     fixLeftEdge: true,
            //     fixRightEdge: true,
            //   },
            priceScale: {
                borderColor: '#485c7b',
            },
            timeScale: {
                borderColor: '#485c7b',
            },
        });

        // const candleSeries = chart.current.addCandlestickSeries({
        //     upColor: '#ff1c91',
        //     borderUpColor: '#ff1c91',
        //     downColor: '#000',
        //     borderDownColor: '#000',
        //     wickDownColor: '#838ca1',
        //     wickUpColor: '#838ca1',
        // });

        // candleSeries.setData(priceData);

        const areaSeries = chart.current.addAreaSeries({
            topColor: 'rgba(255, 28, 145, 0.56)',
            bottomColor: 'rgba(255, 28, 145, 0.04)',
            lineColor: 'rgba(255, 28, 145, 1)',
            lineWidth: 2
        });

        areaSeries.setData(areaData);

        let datesForMarkers = [priceData[priceData.length - 39], priceData[priceData.length - 19]];
        let indexOfMinPrice = 0;
        for (let i = 1; i < datesForMarkers.length; i++) {
            if (datesForMarkers[i].high < datesForMarkers[indexOfMinPrice].high) {
                indexOfMinPrice = i;
            }
        }
        // console.log('datesForMarkers: ', datesForMarkers);

        let markers = [{
            time: priceData[priceData.length - 48].time,
            position: 'aboveBar',
            color: '#f68410',
            shape: 'circle',
            text: 'Live in London',
            size: 1
        }];
        for (let i = 0; i < datesForMarkers.length; i++) {
            if (i !== indexOfMinPrice) {
                markers.push({
                    time: datesForMarkers[i].time,
                    position: 'aboveBar',
                    color: '#e91e63',
                    shape: 'arrowDown',
                    text: 'Live in Helsinki',
                    size: 1
                });
            } else {
                markers.push({
                    time: datesForMarkers[i].time,
                    position: 'belowBar',
                    color: '#2196F3',
                    shape: 'arrowUp',
                    text: 'Xyzzz',
                    size: 1
                    // text: <CustomEvent />
                });
            }
        }
        areaSeries.setMarkers(markers);
        // candleSeries.setMarkers(markers);

        const volumeSeries = chart.current.addAreaSeries({
            color: '#182233',
            lineWidth: 0.3,
            priceFormat: {
                type: 'volume',
            },
            overlay: true,
            scaleMargins: {
                top: 0.8,
                bottom: 0,
            },
        });

        volumeSeries.setData(ExtraAreaData);

        var minimumPrice = areaData[0].value;
        var maximumPrice = minimumPrice;
        for (var i = 1; i < areaData.length; i++) {
            var price = areaData[i].value;
            if (price > maximumPrice) {
                maximumPrice = price;
            }
            if (price < minimumPrice) {
                minimumPrice = price;
            }
        }
        var avgPrice = (maximumPrice + minimumPrice) / 2;

        var lineWidth = 2;
        var minPriceLine = {
            price: minimumPrice,
            color: '#be1238',
            lineWidth: lineWidth,
            // lineStyle: 'solid,
            axisLabelVisible: true,
            title: 'Minimum',
        };
        var avgPriceLine = {
            price: avgPrice,
            color: '#be1238',
            lineWidth: lineWidth,
            // lineStyle: 'solid',
            axisLabelVisible: true,
            title: 'Average',
        };
        var maxPriceLine = {
            price: maximumPrice,
            color: '#be1238',
            lineWidth: lineWidth,
            // lineStyle: 'solid',
            axisLabelVisible: true,
            title: 'Maximum',
        }

        areaSeries.createPriceLine(minPriceLine);
        areaSeries.createPriceLine(avgPriceLine);
        areaSeries.createPriceLine(maxPriceLine);

        // chart.timeScale().fitContent();
    }, []);

    return (
        <>
            <div>
                <div ref={chartContainerRef} />
            </div>
        </>
    );
}

export default LightWeightChart;