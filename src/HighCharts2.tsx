import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import data from './DataSource/comsumption-data.json';
import exporting from "highcharts/modules/exporting.js";
import more from "highcharts/highcharts-more";

export function HighChartAreaRangePOC() {
    exporting(Highcharts);
    more(Highcharts);

    const [xAxislables] = data.topSongsStats.topSongsPlays.map(({ plays, predictions }) => Object.keys(plays).concat(Object.keys(predictions)));

    const data1 = data.topSongsStats.topSongsPlays.map(({ name, plays, predictions }) => ({
        name,
        data: Object.values(plays).concat(Object.values(predictions)),
        type: 'spline',
        zoneAxis: 'x',
        zones: [{
            value: 3
        }, {
            dashStyle: 'dot'
        }]
    }))

    const seriesData = data.topSongsStats.predictionData.map(({ name, data }) => ({
        name,
        data: Object.values(data),
        // type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        fillOpacity: 0.15,
        zIndex: 0,
        // color: 'rgb(124, 181, 236)',
        marker: {
            enabled: false
        }
    }));
    console.log(data1, seriesData);


    const options2 = {
        chart: {
            width: 950,
            height: 500
        },
        title: {
            text: 'Prediction chart'
        },
        // rangeSelector: {
        //     selected: 4
        // },
        colors: ['#E569AB', '#F7B751', '#007484', '#A85511', '#000', '#073271', '#EB5705'],
        yAxis: {
            title: {
                text: 'Number of plays'
            }
        },
        xAxis: {
            categories: xAxislables
        },
        // series:  [{data1}, {seriesData}],
        series: 
        [
        {
            name: "Iyaz - Replay",
            type: 'spline',
            data: data.topSongsStats.averages,
            // data: data.topSongsStats.averages.map((item) => item[1]),
            // zIndex: 1,
            zoneAxis: 'x',
            color: '#E569AB',
            zones: [{
                value: 4
            }, {
                // dashStyle: 'dash'
            }]
        },
        {
            name: 'Iyaz - Replay',
            data: data.topSongsStats.rangeData,
            // data: data.topSongsStats.predictionData[0].data,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            fillOpacity: 0.15,
            zIndex: 0,
            color: '#E569AB',
            marker: {
                enabled: false
            }
        },
        {
            name: "Jason Derulo - In My Head",
            type: 'spline',
            data: data.topSongsStats.averages1,
            // data: data.topSongsStats.averages1.map((item) => item[1]),
            zIndex: 1,
            color: '#F7B751',
            zoneAxis: 'x',
            zones: [{
                value: 3
            }, {
                // dashStyle: 'dash'
            }]
        },
        {
            name: 'Jason Derulo - In My Head',
            data: data.topSongsStats.rangeData1,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            fillOpacity: 0.15,
            color: '#F7B751',
            marker: {
                enabled: false
            }
        }
        ],
        credits: {
            enabled: false
        }
    };

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options2}
            />
        </>
    );
};