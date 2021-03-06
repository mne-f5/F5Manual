﻿columnChart.controller('columnChartController', function ($scope) {
    $scope.cData = [
           ['Year', 'Sales'],
           ['2008', 1000],
           ['2009', 1170],
           ['2010', 660],
           ['2011', 1300],
           ['2012', 1170],
           ['2013', 660],
           ['2014', 900],
           ['2015', 1170],
           ['2016', 660],
           ['2017', 1030]
    ];
});

columnChart.directive('columnChart', function ($window) {
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
                    animation: {
                        duration: 1500,
                        easing: 'linear',
                        startup: true
                    },
                    title: 'Column chart',
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
                var chart = new google.visualization.ColumnChart(element[0].parentElement);

                chart.draw(chartData, options);

                angular.element($window).on('resize', function () {
                    chart.draw(chartData, options);
                });
            }

        }
    }
});