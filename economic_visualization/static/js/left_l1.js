var ec_left1 = echarts.init(document.getElementById('l1'));


option = {
	title: {
	    text: '全\n国\n居\n民\n人\n均\n消\n费\n支\n出',
		bottom:'10%',
	    left: "10%",
	    textStyle: {
	        fontSize:20,
	        fontWeight: '400',
			fontFamily:'Courier New',
			color:'#ffffff'
	    },
	},
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}元 ({d}%)'
    },
    series: [
        {
            name: '消费',
            type: 'pie',
            radius: ['45%', '60%'],
			center:['50%','60%'],
			color: ['#06FDBC', '#F6FE05', '#07B0FE', '#FDB408', '#00DB1C', '#0188FE','#ff0000', '#aa55ff'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 23,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
				{
			       name: "食品烟酒",
			       value: 6084
			    },
			    {
			       name: "衣着",
			       value: 1338
			    },
			    {
			       name: "居住",
			       value: 5055
			    },
			    {
			       name: "生活用品",
			       value: 1281
			    },
				{
					name: "交通通信",
					value: 2862
				},
			    {
			       name: "教育文化娱乐",
			       value: 2513
			    },
				{
					name: "医疗保健",
					value: 1902
				},
				{
			    name: "其他用品及服务",
			    value: 524
				}
            ]
        }
    ]
};


ec_left1.setOption(option)


