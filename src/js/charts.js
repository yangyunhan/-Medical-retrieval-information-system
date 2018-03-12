var echarts = require('echarts');

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
        data: ['系列1','系列2','系列3'],
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
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
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
            name: '系列1',
            type: 'bar',
            legendHoverLink: true,
            barWidth: '28%',
            barGap: '-30%',
            data: [150, 200, 310, 110, 150, 260]
        },
        {
            name: '系列2',
            type: 'bar',
            legendHoverLink: true,
            barWidth: '28%',
            barGap: '-30%',
            data: [140, 80, 150, 120, 180, 230]
        },
        {
            name: '系列3',
            type: 'bar',
            barWidth: '28%',
            barGap: '-30%',
            data: [145, 340, 260, 90, 120, 240]
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
        data: ['视频广告','联盟广告','邮件营销','直接访问','搜索引擎'],
    },
    series : [
        {
            name: '类型',
            type: 'pie',
            radius: '50%',
            center: ['32%','65%'],
            data: [
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
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
        data: ['系列1','系列2'],

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
        data: ['1','2','3','4','5','6','7','8','9'],
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
        //gridIndex: 0,
        //min:0,
        //max: 140
    },
    series: [
        {
            name: '系列1',
            data: [80,67,105,90,113,122,50,72,64],
            type: 'line',
            smooth: true,
        },
        {
            name: '系列2',
            data: [85,60,80,120,100,90,60,80,55,70],
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
        data: ['系列1','系列2'],

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
        data: ['1','2','3','4','5','6','7','8','9'],
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
        //gridIndex: 0,
        //min:0,
        //max: 140
    },
    series: [
        {
            name: '系列1',
            data: [80,67,105,90,113,122,50,72,64],
            type: 'line',
            smooth: true,
        },
        {
            name: '系列2',
            data: [85,60,80,120,100,90,60,80,55,70],
            type: 'line',
            smooth: true
        }
    ]
});
