﻿lineChart.controller('lineChartController', function ($scope) {
    $scope.lineData = [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2005', 37.8, 80.8, 41.8],
        ['2006', 30.9, 69.5, 32.4],
        ['2007', 25.4, 57, 25.7],
        ['2008', 11.7, 18.8, 10.5],
        ['2009', 11.9, 17.6, 10.4],
        ['2010', 8.8, 13.6, 7.7],
        ['2011', 7.6, 12.3, 9.6],
        ['2012', 12.3, 29.2, 10.6],
        ['2013', 16.9, 42.9, 14.8],
        ['2014', 12.8, 30.9, 11.6],
        ['2015', 5.3, 7.9, 4.7],
        ['2016', 6.6, 8.4, 5.2],
        ['2017', 4.8, 6.3, 3.6],
        ['2018', 4.2, 6.2, 3.4]
    ];
});

lineChart.directive('lineChart', function ($window) {
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
                    title: 'Line chart',
                    curveType: 'function',
                    fontName: 'Montserrat',
                    titleTextStyle: {
                        color: '#000',
                        fontSize: 18,
                        bold: false
                    },
                    colors: ['#1980ff', '#ffab00', '#ff5d5e', '#222224', '#a2a6a9', '#47CF73'],
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
                var chart = new google.visualization.LineChart(element[0].parentElement);

                chart.draw(chartData, options);

                angular.element($window).on('resize', function () {
                    chart.draw(chartData, options);
                });

            }

        }
    }
});