
var echarts = require('echarts');



let histogramLiteratureNum = [150, 200, 310, 110, 150, 260];
let histogramLiteratureCitation = [140, 80, 150, 120, 180, 230];
let histogramLiteratureDownload = [145, 340, 260, 90, 120, 240];
let pieChartValues = [235,274,310,335,400];
let lineChart1Male = [80,67,105,90,113,122,50,72,64];
let lineChart1Female = [85,60,80,120,100,90,60,80,55,70];
let lineChart2Male = [80,67,105,90,113,122,50,72,64];
let lineChart2Female = [85,60,80,120,100,90,60,80,55,70];

let histogram = echarts.init($('.histogram')[0]);
let pieChart = echarts.init($('.pieChart')[0]);
let lineChart1 = echarts.init($('.lineChart')[0]);
let lineChart2 = echarts.init($('.lineChart')[1]);
histogram.setOption({
    title: {
        text: 'Associated disease',
        x: 'left',
        textStyle:{
            color: '#AF542B',
            fontSize: 15
        }
    },
    legend:{
        type: 'plain',
        orient: 'horizontal',
        bottom: 0,
        itemGap: 5,
        itemWidth: 8,
        itemHeight: 6,
        textStyle:{
            fontSize: 8
        },
        data: ['文章总数','引文数量','下载量'],
    },
    textStyle:{
        fontSize: 14
    },
    tooltip: {
        trigger: 'axis',
        axisPointer:{
            type: 'shadow'
        }
    },
    grid: {
        show: true,
        left: 30,
        bottom: 35,
        width: '88%',
        height: '52%'
    },
    xAxis: {
        data: ['大脑', '肺部', '肝脏', '大肠', '胃', '胆囊'],
        splitNumber: 6,
        axisLine:{
            lineStyle:{
                color: '#4F4F56',
                width: 0.5
            },
        },
        axisPointer:{
            label:{
                formatter: '{value}'
            }
        },
        axisTick:{
            length: 3,
            alignWithLabel: true,
            interval: 0
        },
        axisLabel:{
            color: 'black',
            interval: 0,
            fontSize: 8,
            margin: 3
        },

    },
    yAxis: {
        type: 'value',
        name: 'value',
        nameLocation: 'center',
        nameTextStyle:{
            fontSize: 9
        },
        nameGap: 20,
        axisLine:{
            lineStyle:{
                color: '#4F4F56',
                width: 0.5
            },
        },
        axisTick:{
            length: 2
        },
        axisLabel:{
            color: 'black',
            fontSize: 8,
            margin: 6
        },
        splitNumber: 4
    },
    series: [
        {
            name: '文章总数',
            type: 'bar',
            legendHoverLink: true,
            barWidth: '28%',
            barGap: '-30%',
            data: histogramLiteratureNum
        },
        {
            name: '引文数量',
            type: 'bar',
            legendHoverLink: true,
            barWidth: '28%',
            barGap: '-30%',
            data: histogramLiteratureCitation
        },
        {
            name: '下载量',
            type: 'bar',
            barWidth: '28%',
            barGap: '-30%',
            data: histogramLiteratureDownload
        }
        ]
});
pieChart.setOption({
    textStyle: {
        fontSize: 14
    },
    title: {
        text: 'Respiratory system(lung)',
        x: 'left',
        textStyle: {
            color: '#AF542B',
            fontSize: 15
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0.7)',
        formatter: "{b} : {c} ({d}%)"// {a}<br/>
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 5,
        bottom: 10,
        pageIconSize: [10,6],
        width: 10,
        height: 120,
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 6,
        textStyle: {
            fontSize: 8
        },
        data: ['概念介绍','方法模型','临床试验','理论分析','对比研究'],
    },
    series : [
        {
            name: '类型',
            type: 'pie',
            radius: '50%',
            center: ['32%','65%'],
            data: [
                {value:pieChartValues[0], name:'概念介绍'},
                {value:pieChartValues[1], name:'方法模型'},
                {value:pieChartValues[2], name:'临床试验'},
                {value:pieChartValues[3], name:'理论分析'},
                {value:pieChartValues[4], name:'对比研究'}
            ],
            label:{
                formatter: "{b}",
                fontSize: 8
            },
            itemStyle: {

                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }

            }
        }
        ],
});
lineChart1.setOption({
    textStyle: {
        fontSize: 14
    },
    title: {
        text: 'Results by year',
        x: 'left',
        textStyle: {
            color: '#AF542B',
            fontSize: 15
        }
    },
    legend: {
        type: 'plain',
        orient: 'horizontal',
        left: 6,
        top: 23,
        itemGap: 3,
        itemWidth: 8,
        itemHeight: 6,
        textStyle: {
            fontSize: 8
        },
        data: ['男性','女性'],

    },
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        show: true,
        left: 30,
        bottom: 25,
        width: '88%',
        height: '52%',
    },
    xAxis:{
        type: 'category',
        name: 'category',
        nameLocation: 'center',
        nameTextStyle:{
            fontSize: 9
        },
        nameGap: 13,
        data: ['10','11','12','13','14','15','16','17','18'],
        axisLine:{
            lineStyle:{
                color: '#A69B92',
                width: 0.5
            },
        },
        axisPointer:{
            label:{
                formatter: '{value}'
            }
        },
        axisTick:{
            length: 3,
            alignWithLabel: true
        },
        axisLabel:{
            color: 'black',
            fontSize: 8,
            margin: 3
        },
    },
    yAxis:{
        type: 'value',
        name: 'value',
        nameLocation: 'center',
        nameTextStyle:{
            fontSize: 9
        },
        nameGap: 20,
        axisLine:{
            lineStyle:{
                color: '#A69B92',
                width: 0.5
            },
        },
        axisTick:{
            length: 2
        },
        axisLabel:{
            color: 'black',
            fontSize: 8,
            margin: 6
        },
        splitNumber: 4
    },
    series: [
        {
            name: '男性',
            data: lineChart1Male,
            type: 'line',
            smooth: true,
        },
        {
            name: '女性',
            data: lineChart1Female,
            type: 'line',
            smooth: true
        }
    ]
});
lineChart2.setOption({
    textStyle: {
        fontSize: 14
    },
    title: {
        text: 'Results by year',
        x: 'left',
        textStyle: {
            color: '#AF542B',
            fontSize: 15
        }
    },
    legend: {
        type: 'plain',
        orient: 'horizontal',
        left: 6,
        top: 23,
        itemGap: 3,
        itemWidth: 8,
        itemHeight: 6,
        textStyle: {
            fontSize: 8
        },
        data: ['男性','女性'],

    },
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        show: true,
        left: 30,
        bottom: 25,
        width: '88%',
        height: '52%',
    },
    xAxis:{
        type: 'category',
        name: 'category',
        nameLocation: 'center',
        nameTextStyle:{
            fontSize: 9
        },
        nameGap: 13,
        data: ['10','11','12','13','14','15','16','17','18'],
        axisLine:{
            lineStyle:{
                color: '#A69B92',
                width: 0.5
            },
        },
        axisPointer:{
            label:{
                formatter: '{value}'
            }
        },
        axisTick:{
            length: 3,
            alignWithLabel: true
        },
        axisLabel:{
            color: 'black',
            fontSize: 8,
            margin: 3
        },
    },
    yAxis:{
        type: 'value',
        name: 'value',
        nameLocation: 'center',
        nameTextStyle:{
            fontSize: 9
        },
        nameGap: 20,
        axisLine:{
            lineStyle:{
                color: '#A69B92',
                width: 0.5
            },
        },
        axisTick:{
            length: 2
        },
        axisLabel:{
            color: 'black',
            fontSize: 8,
            margin: 6
        },
        splitNumber: 4
    },
    series: [
        {
            name: '男性',
            data: lineChart2Male,
            type: 'line',
            smooth: true,
        },
        {
            name: '女性',
            data: lineChart2Female,
            type: 'line',
            smooth: true
        }
    ]
});
