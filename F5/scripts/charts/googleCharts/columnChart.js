columnChart.controller('columnChartController', function ($scope) {
    $scope.$watch('$viewContentLoaded', function () {
        $scope.cData = [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]
        ];
    });
});

//angular.module('columnChartModule').component('columnChart', {

//    controller: 'ColumnChartController',
//    controllerAs: 'vm',
//    bindings: {
//        data: '<',
//    }
//});

//angular.module('columnChartModule').controller('ColumnChartController', function () {
//    var vm = this;

//    vm.$onInit = function () {
//        console.log(vm.data);
//    }
//});

columnChart.directive('columnChart', function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {

            // Load the Visualization API and the corechart package.
            google.charts.load('current', { 'packages': ['bar'] });

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

                console.log(scope.data);
                var chartData = google.visualization.arrayToDataTable(scope.data);
                console.log(chartData);
                var options = {
                    chart: {
                        title: 'Company Performance'
                    },
                    colors: ['#1980ff'],
                    vAxis: { title: 'Hello', titleTextStyle: { color: '#FF0000' } }

                };
                var chart = new google.charts.Bar(element[0]);

                chart.draw(chartData, options);
            }

        }
    }
});