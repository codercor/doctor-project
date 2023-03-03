import React, { Component } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';




const data = [
    { name: 'Eğitim 1', value: 1400, adet: 2 },
    { name: 'Eğitim 2', value: 8300, adet: 2 },
    { name: 'Eğitim 3', value: 9700, adet: 2 },
    { name: 'Eğitim 4', value: 5200, adet: 2 },
];

const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, adet } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}${ payload.name == "Kazanılan" ? '₺': ' adet' }`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Oran ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};
//width stats props

export default class EarningChart extends Component<any, any> {

    state = {
        activeIndex: 0,
        data: []
    };

    constructor(props: any) {
        super(props);
        console.log("PROPS", props.data);
        // { name: 'Eğitim 4', value: 5200, adet: 2 },

    }

    componentDidMount(): void {
        let tempData = []
        for (const key in this.props.data) {
            console.log("KEY", key);
            let tempKey = key;
            switch (key) {
                case "Education":
                    tempKey = "Eğitim"
                    break;
                case "Earned":
                    tempKey = "Kazanılan"
                    break;
                case "Purchased":
                    tempKey = "Satın Alınan"
                    break;
                case "UsersCount":
                    tempKey = "Toplam Üye"
                    break;
                default:
                    break;
            }
            tempData.push({ name: tempKey, value: this.props.data[key] })
        }
        this.setState({ data: tempData })
    }

    onPieEnter = (_: any, index: any) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <ResponsiveContainer className="scale-80 sm:scale-100" width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={this.state.data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={this.onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
