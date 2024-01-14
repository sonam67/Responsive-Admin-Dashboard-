
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,

        data: [{
            type: "rangeColumn",
            yValueFormatString: "$#,##0.00",
            xValueFormatString: "MMM YYYY",
            toolTipContent: "{x}<br>High: {y[0]}<br>Low: {y[1]}",
            dataPoints: [
                { x: new Date(2016, 0), y: [27.10, 38.99] },
                { x: new Date(2016, 1), y: [29.92, 37.00] },
                { x: new Date(2016, 2), y: [35.95, 42.54] },
                { x: new Date(2016, 3), y: [37.27, 48.50] },
                { x: new Date(2016, 4), y: [43.33, 50.51] },
                { x: new Date(2016, 5), y: [46.69, 52.86] },
                { x: new Date(2016, 6), y: [41.80, 50.75] },
                { x: new Date(2016, 7), y: [41.51, 51.22] },
                { x: new Date(2016, 8), y: [45.09, 50.14] },
                { x: new Date(2016, 9), y: [47.98, 53.73] },
                { x: new Date(2016, 10), y: [43.57, 50.49] },
                { x: new Date(2016, 11), y: [51.51, 57.89] }
            ]
        }]
    });
    chart.render();

}
