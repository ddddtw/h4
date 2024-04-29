// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '台灣一些地區月均溫圖'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.cwa.gov.tw/V8/C/C/Statistics/monthlymean.html" ' +
            'target="_blank">氣候月平均</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: '溫度'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '淡水',
        marker: {
            symbol: 'square'
        },
        data: [ 
            15.4,
            15.7,
            17.7,
            21.4,
            24.7,
            27.3,
            29.0,
            28.7,
            26.9,
            23.6,
            21.0,
            17.3]

    }, {
        name: '嘉義',
        marker: {
            symbol: 'circle'
        },
        data: [ 16.8,
            17.7,
            20.2,
            23.5,
            26.3,
            28.3,
            28.9,
            28.4,
            27.4,
            24.8,
            22.0,
            18.4]
    },{
        name: '日月潭',
        marker: {
            symbol: 'diamond'
        },
        data: [ 14.4,
            15.2,
            16.9,
            19.2,
            21.1,
            22.3,
            22.9,
            22.7,
            22.2,
            20.6,
            18.6,
            15.6]
    }]
});
