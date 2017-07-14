angular.module('barChartModule').controller('barChartController', function ($scope) {
    $scope.data = [215, 499, 185, 8, 74, 30, 141, 380, 148, 273, 434, 186, 398, 260, 288, 228, 326, 236, 310, 435, 20, 232, 124, 233];
});

angular.module('barChartModule').directive('barChart', function () {
    return {
        restrict: 'E',
        template: '<svg></svg>',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {
            var margin = { top: 20, right: 20, bottom: 30, left: 40 },
                    width = element.parent().width(),
                    height = element.parent().height();

            var chart = element.find('svg');
            chart.attr({
                width: '100%',
                height: '100%',
                'viewBox': '0 0 ' + Math.max(width, height) + ' ' + (40 + height),
                'preserveAspectRatio': 'xMinYMin'
            });

            var drawChart = function (data) {
               
                var svg = d3.select(chart[0]),
                    g = svg.append("g");

                //// set the ranges
                var x = d3.scaleBand()
                          .range([0, width])
                          .padding(0.1);
                var y = d3.scaleLinear()
                          .range([height, 0]);

                //// Scale the range of the data in the domains
                x.domain(data.map(function (d) { return d; }));
                y.domain([0, d3.max(data, function (d) { return d; })]);


                var yAxis = d3.axisRight(y).tickSize(width);
                var xAxis = d3.axisBottom(x);


                ////// add the x Axis
                g.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(customXAxis);

                function customXAxis(g) {
                    g.call(xAxis);
                    g.select(".domain").remove();
                }

                //// add the y Axis
                g.append('g').call(customYAxis);

                function customYAxis(g) {
                    g.call(yAxis);
                    g.select(".domain").remove();
                    g.selectAll(".tick text").remove();
                }


                //// append the rectangles for the bar chart
                g.append("g")
                    .attr('class', 'bars').attr("transform", "translate(5, 0)").selectAll(".bar")
                    .data(data)
                  .enter()
                    .append('rect')
                    .attrs({
                        class: 'bar',
                        x: function (d) { return x(d); },
                        y: function (d) { return y(d); },
                        height: function (d) { return height - y(d); },
                        width: x.bandwidth()
                    });
            };
            
            drawChart(scope.data);
        }
    };
});