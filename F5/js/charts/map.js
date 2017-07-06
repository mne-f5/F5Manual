var width = $('.map').parent().width(),
    height = $('.map').parent().height();

// D3 Projection
var projection = d3.geoAlbers()
                    .translate([width / 2, height / 2])
                    .rotate([0,0,-45])
                    .scale([width / 1.5]);

// Define path generator
var path = d3.geoPath()               
		  	 .projection(projection);

// Tooltip
var tooltip = d3.select("body")
		    .append("div")
    		.attr("class", "ctooltip")
    		.style("opacity", 0);

//Create SVG element and append map to the SVG
var chart = d3.select('.map').append('svg')
    .attrs({
        width: '100%',
        height: height
    });

var svg = d3.select('.map svg'),
    g = svg.append("g").attrs({
        'class': 'map-holder',
        'transform': 'translate(' + (-width /2) + "," + 10 +')'
    });

d3.json("js/maps/europe.json", function (error, map) {
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

function updateMap() {
    var el = document.getElementsByClassName("map-holder");
    var elHeight = el[0].getBoundingClientRect();
    height = elHeight.height;
    chart.attr('height', height);
    //g.attr('transform', 'translate(0' + "," + height + ')');
};

window.onload = function () {
    updateMap();
};







