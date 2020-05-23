var ec_right1 = echarts.init(document.getElementById('r1'));

var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
option = {
	tooltip: {
	    trigger: 'item',
	    formatter: '高校数量 <br/>{b} : {c} 所'
	},
    grid: {
        left: '12%',
        top: '12%',
        right: '12%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '6rem',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16rem',
            }
        },
        data: ['辽宁', '安徽', '河北', '湖南', '四川', '湖北', '河南', '山东', '广东', '江苏']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16rem',
            }
        },
        data: []
    }, {
        name: '高校数量TOP 10',
        nameGap: '0',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: 20,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
			silent:false,
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [115, 120, 122, 125, 126, 128, 141, 146, 154, 167],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '13rem',
                    }
                }
            },
            barWidth: 7,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
			silent:true,
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [200, 200, 200, 200,200, 200,200, 200,200, 200],
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 3,
                }
            },
            z: 1
        }, {
			silent:true,
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [200, 200, 200, 200,200, 200,200, 200,200, 200],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 3,
                }
            },
            z: 0
        },
        {
			silent:true,
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 18,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};


ec_right1.setOption(option)