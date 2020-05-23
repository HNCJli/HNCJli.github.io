var ec_center1 = echarts.init(document.getElementById('c1'));

var mydata=[{'name': '上海', 'value': 3814},
{'name': '北京', 'value': 1322.74},
{'name': '天津', 'value': 1306},
{'name': '江苏', 'value': 742},
{'name': '台湾', 'value': 600},
{'name': '山东', 'value': 579},
{'name': '河南', 'value': 553},
{'name': '广东', 'value': 481},
{'name': '浙江', 'value': 460},
{'name': '安徽', 'value': 429},
{'name': '重庆', 'value': 374},
{'name': '河北', 'value': 355},
{'name': '湖北', 'value': 325},
{'name': '湖南', 'value': 304},
{'name': '辽宁', 'value': 291},
{'name': '福建', 'value': 285},
{'name': '江西', 'value': 247},
{'name': '海南', 'value': 224},
{'name': '山西', 'value': 212},
{'name': '贵州', 'value': 200},
{'name': '广西', 'value': 190},
{'name': '陕西', 'value': 185},
{'name': '四川', 'value': 172},
{'name': '吉林', 'value': 151},
{'name': '云南', 'value': 109},
{'name': '宁夏', 'value': 85},
{'name': '黑龙江', 'value': 81},
{'name': '甘肃', 'value': 57},
{'name': '内蒙古', 'value': 20},
{'name': '新疆', 'value': 13.1},
{'name': '青海', 'value': 7.2},
{'name': '西藏', 'value': 2.1},
{'name': '香港', 'value': 6779},
{'name': '澳门', 'value': 22065}
]

var option = {
    title: {
        text: '',
        subtext: '',
        x: '',
    },
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} : {c} 人/每平方公里'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
		left:30,
		bottom:50,
        textStyle: {
            fontSize: 11,
			color:'#aaffff'
        },
        splitList: [{ start: 1,end: 9 },
            {start: 10,  end: 199 }, 
			{start: 200, end: 399 },
            {start: 400, end: 599 },
            {start: 600, end: 999 },
			{start: 1000}],
        color: ['#ba0000','#ff0000', '#ffaa00','#ffff00', '#00ff00','#6cff85']
    },
    //配置属性
    series: [{
        name: '人口密度',
        type: 'map',
        mapType: 'china',
        roam: true, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#ffff7f', //区域边框颜色
                areaColor: "#aaff7f", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#ff0000',
                areaColor: "#55ffff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data:mydata,//[] ,//mydata //数据
    }]
};
ec_center1.setOption(option)