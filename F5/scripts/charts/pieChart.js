angular.module('pieChartModule').controller('pieChartController', function ($scope) {
    $scope.data = [
        { 'age': 10, 'population': 5.2704659 },
        { 'age': 20, 'population': 8.2704659 },
        { 'age': 30, 'population': 12.2704659 },
        { 'age': 40, 'population': 3.2704659 },
        { 'age': 50, 'population': 23.2704659 },
        { 'age': 60, 'population': 4.2704659 },
        { 'age': 70, 'population': 27.04659 }
    ]
});

angular.module('pieChartModule').directive('pieChart', function () {
    return {
        restrict: 'E',
        template: '<svg></svg>',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {
            var margin = { top: 20, right: 20, bottom: 30, left: 50 },
                width = element.parent().width(),
                height = element.parent().height(),
                radius = Math.min(width, height) / 2,
                color = d3.scaleOrdinal(["#1980ff", "#87a6bf", "#a2a6a9", "#5b5b5b", "#dbe0e4", "#5f5e5e", "#ff5d5e"]);            ;

            var chart = element.find('svg');
            chart.attr({
                width: '100%',
                height: '100%',
                'viewBox': '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height),
                'preserveAspectRatio': 'xMinYMin'
            });

            var drawChart = function (data) {
                var svg = d3.select(chart[0]),
                    g = svg.append("g").attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");

                var pie = d3.pie().sort(null).value(function (d) { return d.population; });

                var path = d3.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(0);

                var label = d3.arc()
                    .outerRadius(radius - 40)
                    .innerRadius(radius - 40);

                var arc = g.selectAll(".arc")
                    .data(pie(data))
                    .enter().append("g")
                      .attr("class", "arc");

                arc.append("path")
                    .attr("d", path)
                    .attr("fill", function (d) { return color(d.data.age); });

                arc.append("text")
                    .attr("transform", function (d) { return "translate(" + label.centroid(d) + ")"; })
                    .attr("dy", "0.35em")
                    .text(function (d) { return d.data.age; });
            };

            drawChart(scope.data);
        }
    }
});