var chart;
function setColor(num) {
    if (num <= 25) {
        return '#35db4e'
    } else if (num > 25 && num <= 75) {
        return '#f2f22e'
    } else {
        return '#db3535'
    }
}
function generateGauge(num1, num2) {
    var options = {
        legend: {
            show: true,
            position: "bottom",
            fontSize: "15px",
            markers: {
                fillColors: [setColor(num1), setColor(num2)]
            }
        },
        chart: {
            height: 800,
            type: 'radialBar',
            animations: {
                enabled: true,
                easing: "linear",
                speed: 1500,
                animateGradually: {
                    enabled: true,
                    delay: 200
                },
                dynamicAnimations: {
                    enabled: true,
                    speed: 500
                }
            }
        },
        series: [num1, num2],
        labels: ["stage periodontitis%", "grade periodontitis%"],
        fill: {
            colors: [function ({ value }) {
                return setColor(value);
            }]
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    margin: -1
                },
                hollow: {
                    background: "#dbe5ff",
                    margin: "0%"
                },
                dataLabels: {
                    name: {
                        fontSize: "20px",
                        color: "#888"
                    },
                    value: {
                        fontSize: "60px",
                        color: "#111",
                        offsetY: -50
                    },
                    total: {
                        show: true,
                        label: "stage/grade periodontitis",
                        formatter: function (w) {
                            var stage = w.globals.seriesTotals.reduce((a, b) => {
                                    if (a <= 25) return "I"
                                    else if (a <= 50) return "II"
                                    else if (a <= 75) return "III"
                                    else return "IV"
                                }),
                                grade = w.globals.seriesTotals.reduce((a, b) => {
                                    if (b <= 25) return "A"
                                    else if (b <= 75) return "B"
                                    else return "C"
                                });
                            return stage + "/" + grade;
                        }
                    }
                }
            }
        },
        stroke: {
            lineCap: "butt"
        }
    };
    chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

function updateGauge(num1, num2) {
    chart.updateOptions({
        legend: {
            markers: {
                fillColors: [setColor(num1), setColor(num2)]
            }
        }
    });
    chart.updateSeries([num1, num2])
}