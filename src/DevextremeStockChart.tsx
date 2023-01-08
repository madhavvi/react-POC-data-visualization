import React from "react";
import {
    Chart,
    Title,
    CommonSeriesSettings,
    Series,
    Legend,
    ArgumentAxis,
    ValueAxis,
    CommonAnnotationSettings,
    Font,
    Image,
    Annotation,
    Export,
    ScrollBar,
    ZoomAndPan,
    Label,
    Strip,
    StripStyle,
    ConstantLine
} from "devextreme-react/chart";
import { dataSource, annotationSources, consumptiomData } from "./DataSource/DevextremeStockChartData";
import data from './DataSource/comsumption-data.json';



const highAverage = 200;
const lowAverage = 120;
const highAverageColor = '#ff9b52';
const lowAverageColor = '#6199e6';

function DevextremeStockChart() {
    const customizeTooltip = (annotation) => {
        return {
            html: `<div class='tooltip'>${annotation.description}</div>`
        };
    }

    const customizeText = (arg) => `${arg.valueText}K`;

    return (
        <Chart id="devextreme-chart" dataSource={dataSource}>
            {/* <Title text="Devextreme Stock Chart" subtitle="Utopia Music" /> */}
            <CommonSeriesSettings argumentField="date" type="line" />
            {/* <CommonSeriesSettings argumentField="date2" type="line" dashStyle={'dot'} /> */}
            {/* {
                data.topSongsStats.dataSources.map((item) => <Series
                    key={item.value}
                    valueField={item.value}
                    name={item.value}
                ></Series>)
            } */}
            <Series valueField="close" />
            <ArgumentAxis>
                <ConstantLine value={4} />
                <ConstantLine value={50} />
            </ArgumentAxis>

            <ValueAxis>
                <Label customizeText={customizeText} />
                {/* <ConstantLine
                    // value={180}
                    // width={2}
                    color="#fc3535"
                    dashStyle="dash"
                >
                    <Label text="Projected" visible={false} />
                </ConstantLine> */}
                {/* <Strip startValue={highAverage} color="rgba(255,155,85,0.15)">
                    <Label text="Above average">
                        <Font color={highAverageColor} />
                    </Label>
                </Strip>
                <Strip endValue={lowAverage} color="rgba(97,153,230,0.10)">
                    <Label text="Below average">
                        <Font color={lowAverageColor} />
                    </Label>
                </Strip> */}
                {/* <StripStyle>
                    <Label>
                        <Font weight="100" size="10" />
                    </Label>
                </StripStyle> */}
            </ValueAxis>

            {/* <Series
                name="frequency"
                valueField="close"
                axis="frequency"
                type="bar"
                color="#fac29a"
            /> */}
            <Legend visible={false} />
            {/* <ArgumentAxis argumentType="value" /> */}
            <ScrollBar visible={true} />
            <ZoomAndPan argumentAxis="both" />


            {/* <ValueAxis position="right" /> */}
            {/* <CommonAnnotationSettings
                series="AAPL"
                type="image"
                customizeTooltip={customizeTooltip}
            >
                <Font size={15} weight={600} />
                <Image width={20} height={15} />
            </CommonAnnotationSettings> */}
            {/* {annotationSources.map((item) => (
                <Annotation
                    key={item.description}
                    argument={item.date}
                    type={item.type}
                    text={item.text}
                    description={item.description}
                    paddingTopBottom={item.padding}
                    offsetY={item.offset}
                >
                    <Image url={item.image} />
                </Annotation>
            ))} */}
            <Export enabled={true} />
        </Chart>
    );

}

export default DevextremeStockChart;