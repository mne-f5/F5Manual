angular.module('donutChartModule').controller('donutChartController', function ($scope) {
    $scope.data = [
        { text: 'Text', value: 74 },
        { text: 'Text1', value: 54 },
        { text: 'Text2', value: 24 },
        { text: 'Text3', value: 34 },
        { text: 'Text4', value: 14 }
    ]
});

angular.module('donutChartModule').directive('donutChart', function () {
    return {
        restrict: 'E',
        template: '<svg></svg>',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {
            var margin = { top: 20, right: 20, bottom: 20, left: 20 },
                width = element.parent().width(),
                height = element.parent().height(),
                colors = d3.scaleOrdinal().range(["#1980ff", "#ffab00", "#a2a6a9", "#5b5b5b", "#ff5d5e"]),
                radius = Math.min(width, height) / 2,
                donutWidth = 75;
            
            var chart = element.find('svg');
            chart.attr({
                width: '100%',
                height: '100%',
                'viewBox': '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height),
                'preserveAspectRatio': 'xMinYMin'
            });

            var total = function (d) {
                var sum = 0;
                var s = d3.sum(d, function (v) {
                    return sum += v.value;
                });
                return sum;
            };

            var drawChart = function (data) {

                var svg = d3.select(chart[0]),
                   g = svg.append("g").attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");
                
                var arc = d3.arc()
                        .innerRadius(radius - donutWidth)
                        .outerRadius(radius - 20);

                var arcOver = d3.arc()
                            .innerRadius(radius - donutWidth)
                            .outerRadius(radius);

                var pie = d3.pie()
                            .value(function (d) { return d.value; })
                            .sort(null);

                var updatePercentage = function (val) {
                    if (val) {
                        var percentage = (val * 100) / total(data);
                        d3.select('.percentage')
                            .text(percentage + '%');
                    }
                    else {
                        d3.select('.percentage')
                            .text('');
                    }
                };

                var updateValue = function (string) {
                    d3.select('.value')
                        .text(string);
                };


                g.append('g')
                    .attr('class', 'donut')
                    .selectAll('path')
                    .data(pie(data))
                    .enter()
                    .append('path')
                    .attrs({
                        d: arc,
                        fill: function (d, i) { return colors(i); }
                    })
                    .on('mouseover', function (d) {
                        d3.select(this).transition()
                                           .duration(500)
                                           .ease(d3.easeBack)
                                           .attr("d", arcOver);
                        updatePercentage(d.data.value);
                        updateValue(d.data.value + ' GB');
                    })
                    .on("mouseout", function (d) {
                        d3.select(this).transition()
                           .duration(1000)
                           .attr("d", arc);
                        updatePercentage(null);
                        updateValue(total(data) + 'GB');
                    });



                var donut = d3.select('.donut')

                donut.append('g')
                        .attr('class', 'center-text')
                        .append('circle')
                        .attrs({
                            r: radius / 2,
                            fill: '#E7E7E7'
                        });

                var circle = d3.selectAll('.center-text');

                circle.append('text')
                        .text('Upload')
                        .attrs({
                            'text-anchor': 'middle',
                            y: radius * -0.16,
                            class: 'name'
                        });

                circle.append('text')
                        .text(total(data) + "GB")
                        .attrs({
                            class: 'value',
                            'text-anchor': 'middle'
                        });

                circle.append('text')
                        .attrs({
                            class: 'percentage',
                            y: radius * 0.16,
                            'text-anchor': 'middle',
                            fill: '#A2A2A2'
                        });
            };

            drawChart(scope.data);
        }
    }
});