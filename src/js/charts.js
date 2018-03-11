var echarts = require('echarts');

let myChart1 = echarts.init($('.histogram')[0],'light');
let myChart2 = echarts.init($('.histogram')[1]);
let pieChart = echarts.init($('.pieChart')[0]);
let lineChart = echarts.init($('.lineChart')[0],'dark');
myChart1.setOption({
    title: {
        text: 'Echarts'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']

    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
myChart2.setOption({
    title: {
        text: 'Echarts'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']

    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
pieChart.setOption({
    title: {
        text: '广告投放量',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['视频广告','联盟广告','邮件营销','直接访问','搜索引擎'],
    },
    series : [
        {
            name: 'Respiration system(lug)',
            type: 'pie',
            radius: '55%',
            center: ['50%','60%'],
            data: [
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
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
lineChart.setOption({
    title: {
        text: 'Results by year'
    },
    xAxis:{
        type: 'category',
        data: ['1','2','3','4','5','6','7','8','9','10']
    },
    yAxis:{
        type: 'value'
    },
    series: [
        {
            data: [80,67,105,90,113,122,50,72,64,90],
            type: 'line',
            smooth: true
        },
        {
            data: [85,60,80,120,100,90,60,80,55,70],
            type: 'line',
            smooth: true
        }
    ]
});
