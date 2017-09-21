donutChart.controller('donutChartController', function ($scope) {
    $scope.donutData = [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ];
});

donutChart.directive('donutChart', function ($window) {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {

            // Load the Visualization API and the corechart package.
            google.charts.load('current', { 'packages': ['corechart'] });

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {


                var chartData = google.visualization.arrayToDataTable(scope.data);

                var options = {
                    title: 'Donut chart',
                    pieHole: 0.5,
                    fontName: 'Montserrat',
                    titleTextStyle: {
                        color: '#000',
                        fontSize: 18,
                        bold: false
                    },
                    colors: ['#1980ff', '#222224', '#a2a6a9', '#ffab00', '#47CF73', '#ff5d5e'],
                    vAxis: {
                        textStyle: {
                            color: '#a2a6a9',
                            fontSize: 11
                        },
                        gridlines: {
                            color: '#e7eaf1'
                        }
                    },
                    hAxis: {
                        textStyle: {
                            color: '#a2a6a9',
                            fontSize: 11
                        }
                    },
                    tooltip: {
                        isHtml: true
                    },
                    legend: {
                        textStyle: {
                            color: '#000',
                            fontSize: 14
                        }
                    }

                };
                var chart = new google.visualization.PieChart(element[0].parentElement);

                chart.draw(chartData, options);

                angular.element($window).on('resize', function () {
                    chart.draw(chartData, options);
                });

            }

        }
    }
});