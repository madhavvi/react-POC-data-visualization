import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import data from './DataSource/comsumption-data.json';
import exporting from "highcharts/modules/exporting.js";

export function HighChartPOC() {
    Highcharts.theme = {
        colors: [
            "#058DC7",
            "#50B432",
            "#ED561B",
            "#DDDF00",
            "#24CBE5",
            "#64E572",
            "#FF9655",
            "#FFF263",
            "#6AF9C4",
        ],
        chart: {
            backgroundColor: {
                linearGradient: { x1: 0, x2: 0, y1: 500, y2: 500 },
                stops: [
                    [0, "rgb(255, 255, 255)"],
                    [1, "rgb(240, 240, 255)"],
                ],
            },
        },
    };
    exporting(Highcharts);

    const [xAxislables] = data.topSongsStats.topSongsPlays.map(({ plays, predictions }) => Object.keys(plays).concat(Object.keys(predictions)));

    const seriesData = data.topSongsStats.topSongsPlays.map(({ name, plays, predictions }) => ({
        name,
        data: Object.values(plays).concat(Object.values(predictions)),
        type: 'spline',
        zoneAxis: 'x',
        zones: [{
            value: 3
        }, {
            dashStyle: 'dot'
        }]
    }));

    const options = {
        chart: {
            width: 950,
            height: 500
        },
        title: {
            text: 'Prediction chart'
        },
        rangeSelector: {
            selected: 4
        },
        colors: ['#E569AB', '#F7B751', '#007484', '#A85511', '#000', '#073271', '#EB5705'],
        yAxis: {
            title: {
                text: 'Number of plays'
            },
            // plotBands: [{
            //     from: 100,
            //     to: 300,
            //     color: 'rgba(68, 170, 213, 0.2)',
            //     label: {
            //         text: 'Last quarter year\'s value range'
            //     }
            // }]
        },
        xAxis: {
            categories: xAxislables,
            plotLines: [{
                color: '#FF0000',
                width: 1,
                value: 3,
                label: {
                    text: 'Projected'
                }
            }],
            // plotBands: [{
            //     from: 1,
            //     to: 3,
            //     color: 'rgb(240 150 150 / 45%)',
            //     label: {
            //         text: 'Festive time'
            //     }
            // }]
        },
        // plotOptions: {
        //     series: {
        //         threshold: 100
        //     }
        // },

        series: seriesData,

        // series: [
        //     // {   
        //     //     name: 'Projected',
        //     //     type: 'areaspline',
        //     //     data: [270, 350, 350, 300, 350, 370, 340, 320, 350, 250, 250, 280]
        //     // },
        //     {
        //         name: 'Radio',
        //         data: [30, 25, 38, 32, 43, 40, 48, 43, 40, 50, 55, 40],
        //         marker: {
        //             symbol: 'triangle'
        //         },
        //         zoneAxis: 'x',
        //         zones: [{
        //             value: 6
        //         }, {
        //             dashStyle: 'dot'
        //         }]
        //     }, {
        //         name: 'Spotify',
        //         data: [120, 150, 100, 140, 120, 135, 150, 150, 120, 140, 160, 170],
        //         marker: {
        //             // symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
        //             symbol: 'url(https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png)',
        //             width: 16,
        //             height: 16,
        //         },
        //         zoneAxis: 'x',
        //         zones: [{
        //             value: 6
        //         }, {
        //             dashStyle: 'dot'
        //         }]
        //     }, {
        //         name: 'TikTok',
        //         data: [250, 235, 244, 255, 235, 248, 260, 240, 220, 254, 229, 240],
        //         marker: {
        //             symbol: "circle"
        //         },
        //         zoneAxis: 'x',
        //         zones: [{
        //             value: 6
        //         }, {
        //             dashStyle: 'dot'
        //         }]
        //     }, {
        //         name: 'Youtube',
        //         data: [350, 329, 371.5, 306.4, 329.2, 344.0, 376.0, 335.6, 348.5, 316.4, 394.1, 395.6],
        //         marker: {
        //             symbol: 'square',
        //             // lineColor: null,
        //             // lineWidth: 2
        //         },
        //         zoneAxis: 'x',
        //         zones: [{
        //             value: 6
        //         }, {
        //             dashStyle: 'dot'
        //         }]
        //     }],

        credits: {
            enabled: false
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    legend: { enabled: false },
                    // yAxis: { title: false },
                    // subtitle: { text: null }
                }
            }]
        }
    };

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    );
};


