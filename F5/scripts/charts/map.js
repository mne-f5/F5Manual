﻿angular.module('mapModule').controller('mapController', function ($scope) {
    $scope.location = 'js/maps/europe.json';
});
angular.module('mapModule').directive('map', function () {
    return {
        restrict: 'E',
        template: '<svg></svg>',
        scope: {
            data: '='
        },
        link: function (scope, element, attrs) {
            var width = element.parent().width(),
                height = element.parent().height();

            var chart = element.find('svg');
            chart.attr({
                width: '100%',
                height: '100%',
                'viewBox': '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height),
                'preserveAspectRatio': 'xMinYMin'
            });

            var drawMap = function (data) {
                
                // D3 Projection
                var projection = d3.geoAlbers()
                                    .translate([width / 2, height / 2])
                                    .rotate([0, 0, -45])
                                    .scale([width / 1.5]);

                // Define path generator
                var path = d3.geoPath()               
                		  	 .projection(projection);

                // Tooltip
                var tooltip = d3.select("body")
                		    .append("div")
                    		.attr("class", "ctooltip")
                    		.style("opacity", 0);

                var svg = d3.select(chart[0]),
                    g = svg.append("g").attr("transform", "translate(" + (-width / 2) + "," + 10 + ")");

                d3.json(data, function (error, map) {
                    var objects = map.objects.continent_Europe_subunits;

                    g.selectAll(".subunit")
                      .data(topojson.feature(map, objects).features)
                    .enter().append("path")
                      .attrs({
                          d: path,
                          'class': 'country'
                      })
                    .on("mouseover", function (d) {
                        tooltip.transition()
                      	   .duration(200)
                           .style("opacity", .9);
                        tooltip.text(d.properties.geounit)
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                    })

                    // fade out tooltip on mouse out               
                    .on("mouseout", function (d) {
                        tooltip.transition()
                           .duration(500)
                           .style("opacity", 0);
                    });
                });

                //function updateMap() {
                //    var el = document.getElementsByClassName("map-holder");
                //    var elHeight = el[0].getBoundingClientRect();
                //    height = elHeight.height;
                //    chart.attr('height', height);
                //};

                //window.onload = function () {
                //    updateMap();
                //};

                  
            };

            drawMap(scope.data);
        }
    }
});






