var ec_left2 = echarts.init(document.getElementById('l2'));

option = {

    title: {
        text: '31个省市自治区人均GDP',
        left: 'center',
        top: 60,
        textStyle:{
        	color:'#ffffff',
        	fontSize:20
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}元 ({d}%)'
    },
	color:['#65b5c2', '#ffbe05','#1dc499','#177bbb', '#3ddcde','#177bbb','#1ccacc', '#e33244','#ffbe05','#3ddcde'],
    visualMap: {
        show: false,
        min: 20,
        max: 600,
        inRange: {
            colorLightness: [0, 0.8]
        },
    },
    series: [
        {
            name: '人均GDP',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
			itemStyle: {
			    normal: {
			    // 设置扇形的颜色
			// color: '#111dc2',
			    color: '#9fc21f',
			    shadowBlur: 200,
			    shadowColor: 'rgba(255, 255, 127, 127)'
			    }
			},
            data: [
                {value: 164220, name: '北京市'},
                {value: 90435, name: '天津市'},
                {value: 46457, name: '河北省'},
                {value: 45791, name: '山西省'},
                {value: 67926, name: '内蒙古自治区'},
                {value: 57141, name: '辽宁省'},
                {value: 43367, name: '吉林省'},
                {value: 36078, name: '黑龙江省'},
                {value: 157421, name: '上海市'},
                {value: 123755, name: '江苏省'},
                {value: 108684, name: '浙江省'},
                {value: 58691, name: '安徽省'},
                {value: 107574, name: '福建省'},
                {value: 53269, name: '江西省'},
                {value: 70734, name: '山东省'},
                {value: 56491, name: '河南省'},
                {value: 77452, name: '湖北省'},
                {value: 57622, name: '湖南省'},
                {value: 94898, name: '广东省'},
                {value: 43112, name: '广西自治区'},
                {value: 56821, name: '海南省'},
                {value: 75828, name: '重庆市'},
                {value: 55888, name: '四川省'},
                {value: 46582, name: '贵州省'},
                {value: 48087, name: '云南省'},
                {value: 49381, name: '西藏自治区'},
                {value: 66746, name: '陕西省'},
                {value: 33058, name: '甘肃省'},
                {value: 49168, name: '青海省'},
                {value: 54475, name: '宁夏自治区'},
                {value: 54678, name: '新疆自治区'},
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(108, 255, 16, 76)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(41, 144, 255, 76)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                // color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 1200;
            }
        }
    ]
};

ec_left2.setOption(option)